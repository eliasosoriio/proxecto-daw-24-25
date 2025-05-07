<?php
include_once("Controller.php");
include_once(PATH_MODEL."TransaccionModel.php");

class TransaccionController extends Controller{

    public function get($id){
        $model = new TransaccionModel();
        $transaccion = $model->get($id);
        
        $transaccion = $model->get($id[0]);

        if($transaccion==null){
            Controller::sendNotFound("El id no se corresponde con ninguna transacción.");
            die();
        }

        echo $transaccion->toJson();
    }

    public function getAll(){
        $model = new TransaccionModel();
        $transacciones = $model->getAll();
        echo json_encode($transacciones, JSON_PRETTY_PRINT);
    }

    public function insert($object){
        $model = new TransaccionModel();
        $transaccion = Transaccion::fromJson($object);
        if($model->insert($transaccion)){
            echo "Transacción insertada.";
        }else{
            Controller::sendNotFound("No se ha podido insertar");
        }
    }
    
    public function delete($id) {

        if(count($id)!=1){
            Controller::sendNotFound("Las transacciones se identifican por un solo id.");
            die();
        }

        $model = new TransaccionModel();
        if($model->delete($id[0])){
            echo "Transacción eliminada.";
        }else{
            Controller::sendNotFound("No se ha podido eliminar la transacción.");
        }
    }

    public function update($id, $object){

        if(count($id)!=1){
            Controller::sendNotFound("Las transacciones se identifican por un solo id.");
            die();
        }

        $model = new TransaccionModel();
        $transaccion = Transaccion::fromJson($object);

        if($model->update($transaccion,$id[0])){
            echo "Transacción modificada.";
        }else{
            Controller::sendNotFound("No se ha podido modificar la transacción.");
        }
    }
}