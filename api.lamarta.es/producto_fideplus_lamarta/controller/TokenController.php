<?php
include_once("Controller.php");
include_once(PATH_MODEL."TokenModel.php");

class TokenController {
    
    public static function autentificarAccion($controlador, $metodo, $token, $timestamp): bool {
        $permiso = false;
        
        return $permiso;
    }

    public static function obtenerUsuarioPorToken($token, $timestamp) {
        //traer user
        
    }

    public static function verificarPermiso($usuario, $controlador, $metodo): bool {
        $permiso = false;
        
        
        return $permiso;
    }

    public static function generarToken($id_usuario) {
        $model = new TokenModel();
        $token = new Token();

        $tokenCadena = bin2hex(random_bytes(16));
        $tokenCadena = base64_encode($tokenCadena);

        $token->setId_usuario($id_usuario);
        $token->setToken($tokenCadena);
        $token->setValidez(time());

        try {
            if ($model->existe($id_usuario)) {
                $model->update($token);
            } else {
                $model->insert($token);
            }
        } catch (Exception $e) {
            Controller::sendNotFound("No se ha podido insertar/actualizar el token.");
        }

        return $tokenCadena;
    }


    /*public static function verificarToken($tokenEsperadoTipo, $tokenRecibido) {
        $decoded = base64_decode($tokenRecibido);
        list($usuario, $tipo, $timestamp, $random) = explode("|", $decoded);

        if ($tipo !== $tokenEsperadoTipo) {
            return false;
        }

        if ((time() - $timestamp) > 3600) {
            return false;
        }

        return true;
    }

    function verificarPermiso($rolPermitido) {
        if (!isset($_SESSION["usuario"], $_SESSION["tipo"], $_SESSION["token"])) {
            Controller::sendNotFound("No has iniciado sesión.");
            die();
        }
    
        if ($_SESSION["tipo"] !== $rolPermitido) {
            Controller::sendNotFound("No tienes permisos suficientes.");
            die();
        }
    
        if (!LoginController::verificarToken($rolPermitido, $_SESSION["token"])) {
            Controller::sendNotFound("Sesión expirada o token inválido.");
            die();
        }
    }*/
}
