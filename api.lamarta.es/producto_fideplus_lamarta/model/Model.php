<?php
define("DB_DSN","mysql:host=mariadb;dbname=producto_fideplus_lamarta");
define("DB_USER","root");
define("DB_PASS","bitnami");

class Model{
    protected function getConnection(){
        try {
            return new PDO(DB_DSN, DB_USER, DB_PASS);
        } catch (PDOException $e) {
            error_log("Error en la conexión con la Base de Datos: " + $e->getMessage());
        }
    }
}