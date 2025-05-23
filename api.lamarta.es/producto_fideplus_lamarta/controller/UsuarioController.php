<?php
include_once("Controller.php");
include_once(PATH_MODEL."UsuarioModel.php");

class UsuarioController extends Controller{

    public function get($id){
        $model = new UsuarioModel();
        $usuario = $model->get($id);
        
        $usuario = $model->get($id[0]);

        if($usuario==null){
            Controller::sendNotFound("El id no se corresponde con ningún usuario.");
            die();
        }

        echo $usuario->toJson();
    }

    public function getAll(){
        $model = new UsuarioModel();
        $usuarios = $model->getAll();
        echo json_encode($usuarios, JSON_PRETTY_PRINT);
    }

    public function insert($object){
        $model = new UsuarioModel();
        $usuario = Usuario::fromJson($object);
        if($model->insert($usuario)){
            echo "Usuario insertado.";
        }else{
            Controller::sendNotFound("No se ha podido insertar");
        }
    }
    /**
     * [
     *    {
     *      "nombre": "Lorenzo",
     *      "apellidos": "Pérez Gómez",
     *      "correo": "lorenzo@lamarta.es",
     * 	    "contrasenia": "lorenzo"
     *    }
     *]
     */
    
    public function delete($id) {
        $model = new UsuarioModel();
        if($model->delete($id)){
            echo "Usuario eliminado.";
        }else{
            Controller::sendNotFound("No se ha podido eliminar el usuario.");
        }
    }

    public function update($id, $object){
        $model = new UsuarioModel();
        $usuario = Usuario::fromJson($object);

        if($model->update($usuario,$id[0])){
            echo "Usuario modificado.";
        }else{
            Controller::sendNotFound("No se ha podido modificar el usuario.");
        }
    }
    /**
     * [
     *    {
     *      "id_usuario" : 8,
     *      "nombre": "Lorenzo",
     *      "apellidos": "Pérez Gómez",
     *      "correo": "lorenzo@lamarta.es",
     * 	    "contrasenia": "lorenzo"
     *    }
     *]
     */
}