<?php
include_once("Controller.php");
//include_once(PATH_MODEL."AuthModel.php");

class AuthController {
    
    public static function autentificarAccion($controlador, $metodo, $token, $timestamp): bool {
        $permiso = false;
        
        //Comprueba que el token del usuario que ha realizado la petición pertenece a un usuario.
        $usuario = self::obtenerUsuarioPorToken($token, $timestamp);
        
        //Si el usuario existe, se comprueba que puede realizar algo en ese controlador
        $controlador = false;
        if ($usuario) {
            $controlador = self::verificarPermiso($usuario, $controlador, $metodo);
        }

        //Se devuelve si finalmente se permite o no
        return $permiso;
    }

    public static function obtenerUsuarioPorToken($token, $timestamp) {
        //traer user
        
    }

    public static function verificarPermiso($usuario, $controlador, $metodo): bool {
        $permiso = false;
        
        switch ($usuario->getTipo()) {
            case CONSTANTE_USUARIO_TIPO_ADMIN_CODIGO:
                switch ($controlador) {
                    case RECURSO_CONTROLADOR_ADMINISTRADOR_TRANSACCION:
                        $permiso = true;
                        break;
                    
                }
                break;
            
            case CONSTANTE_USUARIO_TIPO_AFILIADO_CODIGO:
                break;
        }
        
        return $permiso;
    }

    public static function generarToken($usuario, $tipo) {
        $timestamp = time();
        $random = bin2hex(random_bytes(16)); 
        $raw = $usuario . "|" . $tipo . "|" . $timestamp . "|" . $random;
        $token = base64_encode($raw); 
        return $token;
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
