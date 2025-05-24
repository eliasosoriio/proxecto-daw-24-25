<?php
include_once("Controller.php");
include_once(PATH_MODEL."AfiliadoModel.php");

class AfiliadoController extends Controller{

    public function get($id){
        $model = new AfiliadoModel();
        $id = (int)$id;
        $usuario = $model->get($id);
        
        if($usuario==null){
            Controller::sendNotFound("El id no se corresponde con ningún usuario.");
            die();
        }

        echo $usuario->toJson();
    }

    public function getAll(){
        $model = new AfiliadoModel();
        $usuarios = $model->getAll();
        echo json_encode($usuarios, JSON_PRETTY_PRINT);
    }

    public function insert($object){
        $model = new AfiliadoModel();
        $usuario = Afiliado::fromJson($object);
        if($model->insert($usuario)){
            echo "Afiliado insertado.";
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
        $model = new AfiliadoModel();
        if($model->delete($id)){
            echo "Afiliado eliminado.";
        }else{
            Controller::sendNotFound("No se ha podido eliminar el usuario.");
        }
    }

    public function update($id, $object){
        $model = new AfiliadoModel();
        $usuario = Afiliado::fromJson($object);

        if($model->update($usuario,$id)){
            echo "Afiliado modificado.";
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