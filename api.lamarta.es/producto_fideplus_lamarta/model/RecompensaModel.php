<?php
include_once("Model.php");
include_once("ModelObject.php");

class Recompensa extends ModelObject{

    public int $id_recompensa;
    public string $nombre;
    public string $descripcion;
    public int $precio;

    function __construct($id_recompensa, $nombre, $descripcion, $precio)
    {
        $this->id_recompensa = $id_recompensa;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
    }

    public static function fromJson($json): ModelObject {
        $data = json_decode($json, true)[0];
        return new Recompensa(
            $data['id_recompensa'], 
            $data['nombre'],
            $data['descripcion'],
            $data['precio']
        );
    }

    public function toJson():String{
        return json_encode($this,JSON_PRETTY_PRINT);
    }

     /**
     * Get the value of id_recompensa
     */ 
    public function getId_recompensa()
    {
        return $this->id_recompensa;
    }

    /**
     * Set the value of id_recompensa
     *
     * @return  self
     */ 
    public function setId_recompensa($id_recompensa)
    {
        $this->id_recompensa = $id_recompensa;

        return $this;
    }

    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of descripcion
     */ 
    public function getDescripcion()
    {
            return $this->descripcion;
    }

    /**
     * Set the value of descripcion
     *
     * @return  self
     */ 
    public function setDescripcion($descripcion)
    {
            $this->descripcion = $descripcion;

            return $this;
    }

    /**
     * Get the value of precio
     */ 
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set the value of precio
     *
     * @return  self
     */ 
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }
}


class RecompensaModel extends Model
{

    public function getAll()
    {
        $sql = "SELECT * FROM recompensa";
        $pdo = self::getConnection();
        $resultado = [];
        try {
            $stmt = $pdo->query($sql);
            $resultado = array();
            foreach($stmt as $r){
                $recompensa =  new Recompensa(
      $r['id_recompensa'], 
             $r['nombre'],
        $r['descripcion'],
             $r['precio']
                );
                $resultado[] = $recompensa;
            }
        } catch (PDOException $th) {
            error_log("Error RecompensaModel->getAll()");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function get($id_recompensa) : Recompensa | null
    {
        $sql = "SELECT * FROM recompensa WHERE id_recompensa=?";
        $pdo = self::getConnection();
        $resultado = null;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $id_recompensa, PDO::PARAM_INT);
            $stmt->execute();
            if($r = $stmt->fetch()){
                $resultado =  new Recompensa(
      $r['id_recompensa'], 
             $r['nombre'],
        $r['descripcion'],
             $r['precio']
                );
            }
            
        } catch (Throwable $th) {
            error_log("Error RecompensaModel->get($id_recompensa)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function insert($recompensa)
    {
        $sql = "INSERT INTO recompensa (id_recompensa, nombre, descripcion, precio) VALUES (:id_recompensa, :nombre, :descripcion, :precio)";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(":id_recompensa", $recompensa->getId_recompensa(), PDO::PARAM_INT);
            $stmt->bindValue(":nombre", $recompensa->getNombre(), PDO::PARAM_STR);
            $stmt->bindValue(":descripcion", $recompensa->getDescripcion(), PDO::PARAM_STR);
            $stmt->bindValue(":precio", $recompensa->getPrecio(), PDO::PARAM_INT);
            $resultado = $stmt->execute();
        } catch (PDOException $th) {
            error_log("Error RecompensaModel->insert(" . $recompensa->toJson. ")");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function update($recompensa, $id_recompensa)
    {
        $sql = "UPDATE recompensa SET nombre = :nombre, descripcion = :descripcion, precio = :precio WHERE id_recompensa = :id_recompensa";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(":id_recompensa", $recompensa->getId_recompensa(), PDO::PARAM_INT);
            $stmt->bindValue(":nombre", $recompensa->getNombre(), PDO::PARAM_STR);
            $stmt->bindValue(":descripcion", $recompensa->getDescripcion(), PDO::PARAM_STR);
            $stmt->bindValue(":precio", $recompensa->getPrecio(), PDO::PARAM_INT);

            $resultado = $stmt->execute();
            $resultado = $stmt->rowCount() == 1;
        } catch (PDOException $th) {
            error_log("Error RecompensaModel->update(" . implode(",", $recompensa) . ", $id_recompensa)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function delete($id_recompensa)
    {
        $sql = "DELETE FROM recompensa WHERE id_recompensa = ?";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $id_recompensa, PDO::PARAM_INT);
            $resultado = $stmt->execute();
        } catch (PDOException $th) {
            error_log("Error RecompensaModel->delete($id_recompensa)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

   
}