<?php
include_once("TransaccionController.php");
include_once("RecompensaController.php");
include_once("TokenController.php");
include_once("AdminController.php");
include_once("AfiliadoController.php");


/**
 * Se definen como constantes los nombres de los controladores disponibles.
 */
define("CONTROLLER_TRANSACCION", "transaccion");
define("CONTROLLER_RECOMPENSA", "recompensa");
define("CONTROLLER_TOKEN", "token");
define("CONTROLLER_ADMIN", "admin");
define("CONTROLLER_AFILIADO", "afiliado");


/**
 * Clase ControllerException para manejar excepciones.
 */
class ControllerException extends Exception{
    function __construct()
    {
        parent::__construct("Error obteniendo el controlador solicitado.");
    }
}

/**
 * Clase abstracta Controller que define que estructuta tienen estos mismos.
 */
abstract class Controller
{
    /**
     * Método sendNotFound para los errores 404 cuando algo no se encuentra.
     * @param string $mensaje
     * @return void
     */
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
            case CONTROLLER_ADMIN:
                $controller = new AdminController();
                break;
            case CONTROLLER_AFILIADO:
                $controller = new AfiliadoController();
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