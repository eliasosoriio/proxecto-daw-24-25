<?php
include_once("Controller.php");
include_once(PATH_MODEL."TransaccionModel.php");

class TransaccionController extends Controller{

    public function get($id){
        $model = new TransaccionModel();
        $transaccion = $model->get($id);
        
        if($transaccion==null){
            Controller::sendNotFound("El id no se corresponde con ninguna transacción.");
            die();
        }

        echo $transaccion->toJson();
    }

    public function getAll($id_usuario=null){
        $model = new TransaccionModel();
        $transacciones = $model->getAll($id_usuario);
        echo json_encode($transacciones, JSON_PRETTY_PRINT);
    }

    public function insert($object){
        $model = new TransaccionModel();
        $transaccion = Transaccion::fromJson($object);
        if($model->insert($transaccion)){
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
    
    public function delete($id) {
        $model = new TransaccionModel();
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
        $model = new TransaccionModel();
        $transaccion = Transaccion::fromJson($object);

        if($model->update($transaccion,$id)){
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
}