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
            header('Content-Type: application/json');
            echo json_encode(["success" => true]);
            exit;
        }else{
           header('Content-Type: application/json');
            http_response_code(400);
            echo json_encode(["success" => false, "error" => "No se pudo insertar."]);
            exit;
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
            header('Content-Type: application/json');
            echo json_encode(["success" => true]);
            exit;
        }else{
           header('Content-Type: application/json');
            http_response_code(400);
            echo json_encode(["success" => false, "error" => "No se pudo eliminar."]);
            exit;
        }
    }

    public function update($id, $object){
        $model = new AdminModel();
        $usuario = Admin::fromJson($object);

        if($model->update($usuario,$id)){
            header('Content-Type: application/json');
            echo json_encode(["success" => true]);
            exit;
        }else{
           header('Content-Type: application/json');
            http_response_code(400);
            echo json_encode(["success" => false, "error" => "No se pudo actualizar."]);
            exit;
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