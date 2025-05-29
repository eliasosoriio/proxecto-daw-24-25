<?php
/**
 * @file Model.php
 * @description Define la clase Model de la que extenderán los modelos.
 * @author Elías Osorio Pouseu
 */
define("DB_DSN","mysql:host=mariadb;dbname=producto_fideplus_lamarta");
define("DB_USER","root");
define("DB_PASS","bitnami");

/**
 * Clase Model que define la conexión que utilizarán estos mismos.
 */
class Model
{
    /**
     * Método getConnection que devuelve la conexión con la base de datos.
     * @return PDO|void
     */
    protected function getConnection()
    {
        try {
            return new PDO(DB_DSN, DB_USER, DB_PASS);
        } catch (PDOException $e) {
            error_log("Error en la conexión con la Base de Datos: " + $e->getMessage());
        }
    }
}