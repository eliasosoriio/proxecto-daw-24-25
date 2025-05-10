<?php
include_once("Controller.php");
include_once(PATH_MODEL."LoginModel.php");

class LoginController {

    public static function singIn($object) {
        session_start();

        $model = new LoginModel();
        $login = $model->singIn(Login::fromJson($object));
        
        if ($login == null) {
            Controller::sendNotFound("El usuario y/o la contraseña es incorrecto.");
            die();
        } else {
            $tipo = $login->getTipo();
            $usuario = $login->getUsuario();
            $token = self::generarToken($usuario, $tipo);

            $_SESSION["usuario"] = $usuario;
            $_SESSION["tipo"] = $tipo;
            $_SESSION["token"] = $token;
            $_SESSION["timestamp"] = time();

            $response = [
                "usuario" => $usuario,
                "tipo" => $tipo,
                "token" => $token
            ];

            echo json_encode($response);
        }
    }

    public static function generarToken($usuario, $tipo) {
        $timestamp = time();
        $random = bin2hex(random_bytes(16)); 
        $raw = $usuario . "|" . $tipo . "|" . $timestamp . "|" . $random;
        $token = base64_encode($raw); 
        return $token;
    }

    public static function verificarToken($tokenEsperadoTipo, $tokenRecibido) {
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
    }
}
