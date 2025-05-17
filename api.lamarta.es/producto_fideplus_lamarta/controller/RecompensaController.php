<?php
include_once("Controller.php");
include_once(PATH_MODEL."RecompensaModel.php");

class RecompensaController extends Controller{

    public function get($id){
        $model = new RecompensaModel();
        $recompensa = $model->get($id);
        
        $recompensa = $model->get($id[0]);

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
            echo "recompensa insertada.";
        }else{
            Controller::sendNotFound("No se ha podido insertar");
        }
    }
    
    public function delete($id) {

        if(count($id)!=1){
            Controller::sendNotFound("Las recompensas se identifican por un solo id.");
            die();
        }

        $model = new RecompensaModel();
        if($model->delete($id[0])){
            echo "recompensa eliminada.";
        }else{
            Controller::sendNotFound("No se ha podido eliminar la recompensa.");
        }
    }

    public function update($id, $object){

        if(count($id)!=1){
            Controller::sendNotFound("Las recompensas se identifican por un solo id.");
            die();
        }

        $model = new RecompensaModel();
        $recompensa = recompensa::fromJson($object);

        if($model->update($recompensa,$id[0])){
            echo "recompensa modificada.";
        }else{
            Controller::sendNotFound("No se ha podido modificar la recompensa.");
        }
    }
}