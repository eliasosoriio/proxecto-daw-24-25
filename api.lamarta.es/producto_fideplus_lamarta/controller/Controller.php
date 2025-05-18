<?php
include_once("TransaccionController.php");
include_once("RecompensaController.php");
include_once("TokenController.php");


/**
 * Definicion de los nombres asociados a cada controlador en la URI.
 */
define("CONTROLLER_TRANSACCION", "transaccion");
define("CONTROLLER_RECOMPENSA", "recompensa");
define("CONTROLLER_TOKEN", "token");

class ControllerException extends Exception{
    function __construct()
    {
        parent::__construct("Error obteniendo el controlador solicitado.");
    }
}

abstract class Controller
{

    public static function sendNotFound($mensaje)
    {
        error_log($mensaje);
        header("HTTP/1.1 404 Not Found");
        $mensaje = ["error" => $mensaje];
        echo json_encode($mensaje, JSON_PRETTY_PRINT);
    }

    public static function getController($nombre): Controller
    {
        $controller = null;
        switch ($nombre) {
            case CONTROLLER_TRANSACCION:
                $controller = new TransaccionController();
                break;
            case CONTROLLER_RECOMPENSA:
                $controller = new RecompensaController();
                break;
            case CONTROLLER_TOKEN:
                $controller = new TokenController();
                break;
            default:
                throw new ControllerException();
        }
        return $controller;
    }

    public abstract function get($id);
    public abstract function getAll();
    public abstract function delete($id);
    public abstract function update($id, $object);
    public abstract function insert($object);
}