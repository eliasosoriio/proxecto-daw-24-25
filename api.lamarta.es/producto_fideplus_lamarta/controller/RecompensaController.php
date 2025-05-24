<?php
include_once("Controller.php");
include_once(PATH_MODEL."RecompensaModel.php");

class RecompensaController extends Controller{

    public function get($id){
        $model = new RecompensaModel();
        $recompensa = $model->get($id);
        
        if($recompensa==null){
            Controller::sendNotFound("El id no se corresponde con ninguna recompensa.");
            die();
        }

        echo $recompensa->toJson();
    }

    public function getAll(){
        $model = new RecompensaModel();
        $recompensas = $model->getAll();
        echo json_encode($recompensas, JSON_PRETTY_PRINT);
    }

    public function insert($object){
        $model = new RecompensaModel();
        $recompensa = Recompensa::fromJson($object);
        if($model->insert($recompensa)){
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
        $model = new RecompensaModel();
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
        $model = new RecompensaModel();
        $recompensa = Recompensa::fromJson($object);

        if($model->update($recompensa,$id)){
            echo "Recompensa modificada.";
        }else{
            Controller::sendNotFound("No se ha podido modificar la recompensa.");
        }
    }
}