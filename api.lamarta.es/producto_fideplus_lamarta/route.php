<?php
include_once("globals.php");
include_once("controller/Controller.php");
//include_once("controller/AuthController.php");

/**
 * Este fichero captura todas la peticiones a nuestra aplicación.
 * Aqui se parsea la uri para decidir el controlador y la acción que debemos ejecutar.
 */
$metodo = $_SERVER["REQUEST_METHOD"];
$uri = $_SERVER["REQUEST_URI"];
$uri = explode("/", $uri);
$elemento = $uri[3];
$id = $uri[4] ?? null;

try {
    $controlador = Controller::getController($elemento);
} catch (ControllerException $th) {
    Controller::sendNotFound("Error obteniendo el elemento " . $elemento);
    die();
}

if (count($uri) < 3) {
    throw new Exception("URI incompleta");
}

/*$token = $_SERVER["HTTP_X_API_KEY"];
$auth = AuthController::checkAccess($elemento,$metodo,$token);
if(!$auth){
    Controller::sendNotFound("No tienes permisos.");
    die();
}*/

    switch ($metodo) {
    case 'POST':
        $json = file_get_contents('php://input');
        $controlador->insert($json);
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
    case 'PUT':
        if (isset($id)) {
            $json = file_get_contents('php://input');
            $controlador->update($id, $json);
        } else {
            Controller::sendNotFound("Es necesario indicar el id correcto de la transacción a actualizar.");
        }

        break;
    default:
        Controller::sendNotFound("Método HTTP no disponible.");
}