<?php
/**
 * @file RegisterController.php
 * @description Define la clase RegisterController que maneja el comprobarRegistro.
 * @author Elías Osorio Pouseu
 */
include_once("Controller.php");

define("CONTRASENIA_REGISTRO", getenv("REGISTER_ACCESS_CODE") ?: "");

/**
 * Clase RegisterController, contiene el método de comprobarRegistro.
 */
class RegisterController {

    /**
     * Método comprobarRegistro que checkea si el usuario puede registrarse
     * @param mixed $object
     * @return void
     */
    public static function comprobarRegistro($object) {
        $data = json_decode($object, true);
        $contrasenia = $data[0]["contrasenia"];

        if (CONTRASENIA_REGISTRO === "") {
            header('Content-Type: application/json');
            http_response_code(500);
            echo json_encode(["success" => false, "error" => "El registro no esta configurado en este entorno."]);
            exit;
        }

        $puedeRegistrarse = hash_equals(CONTRASENIA_REGISTRO, (string) $contrasenia);

        if($puedeRegistrarse){
            header('Content-Type: application/json');
            echo json_encode(["success" => true]);
            exit;
        }else{
           header('Content-Type: application/json');
            http_response_code(400);
            echo json_encode(["success" => false, "error" => "Contraseña de registro incorrecta."]);
            exit;
        }
    }

}
