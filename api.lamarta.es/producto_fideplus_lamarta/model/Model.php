<?php
/**
 * @file Model.php
 * @description Define la clase Model de la que extenderán los modelos.
 * @author Elías Osorio Pouseu
 */
define("DB_HOST", getenv("DB_HOST") ?: "mariadb");
define("DB_NAME", getenv("DB_NAME") ?: "producto_fideplus_lamarta");
define("DB_USER", getenv("DB_USER") ?: "lamarta_app");
define("DB_PASS", getenv("DB_PASS") ?: "");
define("DB_DSN", "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4");

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
            return new PDO(DB_DSN, DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        } catch (PDOException $e) {
            error_log("Error en la conexión con la Base de Datos: " . $e->getMessage());
        }
    }
}
