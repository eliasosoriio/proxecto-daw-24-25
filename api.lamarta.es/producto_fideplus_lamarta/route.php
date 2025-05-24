<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-API-KEY");

include_once("globals.php");
include_once("Recursos.php");
include_once("Constantes.php");
include_once("controller/Controller.php");
include_once("controller/LoginController.php");
include_once("controller/TokenController.php");
include_once("controller/AdminController.php");
include_once("controller/AfiliadoController.php");

/**
 * Este fichero captura todas la peticiones a nuestra aplicación.
 * Aqui se parsea la uri para decidir el controlador y la acción que debemos ejecutar.
 */
$metodo = $_SERVER["REQUEST_METHOD"];
$uri = $_SERVER["REQUEST_URI"];
$uri = explode("/", $uri);
$elemento = $uri[3];
$id = $uri[4] ?? null;

// Si es una preflight request, solo responde 200 y termina
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    if($elemento != "login") {
        $controlador = Controller::getController($elemento);
    }
} catch (ControllerException $th) {
    Controller::sendNotFound("Error obteniendo el elemento " . $elemento);
    die();
}

if (count($uri) < 3) {
    throw new Exception("URI incompleta");
}

if ($elemento == "login" && ($metodo != 'POST' && $metodo != 'GET')) {
    throw new Exception("Método no permitido.");
}

/*if ($elemento !== 'login' && $elemento !== 'token') {
    $token = $_SERVER["HTTP_X_API_KEY"] ?? '';
    if (!TokenController::obtenerPermiso($token, $_SERVER['REQUEST_METHOD'], $elemento)) {
        Controller::sendNotFound("No tienes permiso o necesitas volver a inciar sesion.");
        die();
    }
}*/

switch ($metodo) {
    case 'POST':
        $json = file_get_contents('php://input');
        if($elemento == "login") {
            LoginController::singIn($json);
        } elseif($elemento == "token") {
            TokenController::comprobarValidez($json);
        } else {
            $controlador->insert($json);
        }
        break;
    case 'GET':
        if (isset($id)) {
            $controlador->get($id);
        } else {
            $controlador->getAll();
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