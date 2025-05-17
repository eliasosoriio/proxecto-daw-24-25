<?php
include_once("Controller.php");
include_once("TokenController.php");
include_once(PATH_MODEL."LoginModel.php");

class LoginController {

    public static function singIn($object) {
        session_start();

        $model = new LoginModel();
        $data = json_decode($object, true);

        $login = $model->singIn(Login::fromJson(json_encode($data[0])));
        
        if ($login == null) {
            Controller::sendNotFound("El usuario y/o la contraseña es incorrecto.");
            die();
        } else {
            $tipo = $login->getId_tipo();
            $id_usuario = $login->getId_usuario();
            $token = TokenController::generarToken($id_usuario);
            

            $_SESSION["id_usuario"] = $id_usuario;
            $_SESSION["id_tipo"] = $tipo;
            $_SESSION["token"] = $token;
            $_SESSION["timestamp"] = time();

            $response = [
                "usuario" => $id_usuario,
                "id_tipo" => $tipo,
                "token" => $token
            ];

            echo json_encode($response);
        }
    }
}

/**
 * POST:  http://localhost/producto_fideplus_lamarta/route.php/login
 * 
 * HEADERS
 * Content-Type : application/json
 * 
 * [
 *   {
 *     "usuario": "administrador@lamarta.es",
 *     "contrasenia": "administrador"
 *   }
 * ]
 */