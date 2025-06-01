<?php
/**
 * @file route.php
 * @description Maneja las peticiones que entran a la API.
 * @author Elías Osorio Pouseu
 */

//Dominios permitidos para las peticiones
$permitidos = [
    "https://lamarta.es",
    "https://lamartaes.vercel.app",
    "http://localhost:5173"
];

//Comprueba que el dominio tiene permiso
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $permitidos)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

//Métodos permitidos
header("Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS");

//Headers permitidos
header("Access-Control-Allow-Headers: Content-Type, X-API-KEY");

//Si es una preflight request, solo responde 200 y termina
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

//Ficheros que se utilizan
include_once("globals.php");
include_once("Recursos.php");
include_once("Constantes.php");
include_once("controller/Controller.php");
include_once("controller/LoginController.php");
include_once("controller/TokenController.php");
include_once("controller/AdminController.php");
include_once("controller/AfiliadoController.php");
include_once("controller/RegisterController.php");

//Se parsea la uri para decidir el controlador y la acción que debemos ejecutar
$metodo = $_SERVER["REQUEST_METHOD"];
$uri = $_SERVER["REQUEST_URI"];
$uri = explode("/", $uri);
$elemento = $uri[3];
$id = $uri[4] ?? null;

try {
    //Se crea el controlador si no es login
    if($elemento != "login" && $elemento != "register") {
        $controlador = Controller::getController($elemento);
    }
} catch (ControllerException $th) {
    Controller::sendNotFound("Error obteniendo el elemento " . $elemento);
    die();
}

//Se comprueba que la uri viene completa
if (count($uri) < 3) {
    throw new Exception("URI incompleta");
}

//Si el controlador es login/register y el método no es POST, se rechaza
if (($elemento == "login" || $elemento == "register") && ($metodo != 'POST')) {
    throw new Exception("Método no permitido.");
}

//Cuando no es login ni token se comprueba si el usuario tiene permiso
if ($elemento !== 'login' && $elemento !== 'token' && $elemento !== 'register') {
    $token = $_SERVER["HTTP_X_API_KEY"] ?? '';
    if (!TokenController::obtenerPermiso($token, $_SERVER['REQUEST_METHOD'], $elemento)) {
        Controller::sendNotFound("No tienes permiso o necesitas volver a inciar sesion.");
        die();
    }
}

//Se filtra la acción en función del método
switch ($metodo) {
    case 'POST':
        $json = file_get_contents('php://input');
        if($elemento == "login") {
            LoginController::singIn($json);
        } elseif($elemento == "token") {
            TokenController::comprobarValidez($json);
        } elseif($elemento == "register") {
            RegisterController::comprobarRegistro($json);
        } else {
            $controlador->insert($json);
        }
        break;
    case 'GET':
        if ($elemento == 'transaccion') {
            if (isset($id)) {
                $controlador->getAll((int)$id);
            }
        } else {
            if (isset($id)) {
                $controlador->get($id);
            } else {
                $controlador->getAll();
            }
        }
        break;
    case 'DELETE':
        if (isset($id)) {
            $controlador->delete($id);
        } else {
            Controller::sendNotFound("Es necesario indicar el id correcto de la transacción a eliminar.");
        }
        break;
    case 'PATCH':
        if (isset($id)) {
            $json = file_get_contents('php://input');
            $controlador->update($id, $json);
        } else {
            Controller::sendNotFound("Es necesario indicar el id correcto de la transacción a actualizar.");
        }
        break;
    default:
        Controller::sendNotFound("Método HTTP no disponible.");
        break;
}