<?php
include_once("Controller.php");
include_once(PATH_MODEL."TokenModel.php");

class TokenController extends Controller{
    
    public static function obtenerPermiso($token, $metodoHTTP, $controlador): bool {
        $permiso = false;

        $model = new TokenModel();
        $id_usuario = $model->obtenerUsuarioPorToken($token);
        
        $validez = false;
        if ($id_usuario) {
            $validez = $model->comprobarValidez($id_usuario, $token);
        }

        if ($validez) {
            $permiso = $model->comprobarPermiso($id_usuario, $metodoHTTP, $controlador);
        }
        
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

     public static function comprobarValidez($object) {
        $data = json_decode($object, true);
        $token = $data[0]['token'];
        $id_usuario = (int) $data[0]['id_usuario'];
        $tipo = $data[0]['tipo'];
        $model = new TokenModel();
        echo $model->comprobarValidez($id_usuario, $token, $tipo);
     }

    public function get($id){}
    public function getAll(){}
    public function delete($id){}
    public function update($id, $object){}
    public function insert($object){}
}
