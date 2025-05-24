<?php
include_once("Controller.php");
include_once(PATH_MODEL."AdminModel.php");

class AdminController extends Controller{

    public function get($id){
        $model = new AdminModel();
        $id = (int)$id;
        $usuario = $model->get($id);
        
        if($usuario==null){
            Controller::sendNotFound("El id no se corresponde con ningún usuario.");
            die();
        }

        echo $usuario->toJson();
    }

    public function getAll(){
        $model = new AdminModel();
        $usuarios = $model->getAll();
        echo json_encode($usuarios, JSON_PRETTY_PRINT);
    }

    public function insert($object){
        $model = new AdminModel();
        $usuario = Admin::fromJson($object);
        if($model->insert($usuario)){
            echo "Admin insertado.";
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
        $model = new AdminModel();
        if($model->delete($id)){
            echo "Admin eliminado.";
        }else{
            Controller::sendNotFound("No se ha podido eliminar el usuario.");
        }
    }

    public function update($id, $object){
        $model = new AdminModel();
        $usuario = Admin::fromJson($object);

        if($model->update($usuario,$id)){
            echo "Admin modificado.";
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