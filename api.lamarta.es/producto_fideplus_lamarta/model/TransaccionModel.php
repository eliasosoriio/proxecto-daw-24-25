<?php
include_once("Model.php");
include_once("ModelObject.php");

class Transaccion extends ModelObject{

    public int $id_transaccion;
    public int $id_usuario_admin;
    public int $id_usuario_afiliado;
    public string $concepto;
    public int $importe;
    public string $fecha;

    function __construct($id_usuario_admin, $id_usuario_afiliado, $concepto, $importe, $fecha = null, $id_transaccion = 0)
    {
        $this->id_usuario_admin = $id_usuario_admin;
        $this->id_usuario_afiliado = $id_usuario_afiliado;
        $this->concepto = $concepto;
        $this->importe = $importe;
        $this->fecha = $fecha ?? date('Y-m-d');
        $this->id_transaccion = $id_transaccion;
    }

    public static function fromJson($json): ModelObject {
        $data = json_decode($json, true)[0];
        return new Transaccion(
            $data['id_usuario_admin'], 
            $data['id_usuario_afiliado'],
            $data['concepto'],
            $data['importe']
        );
    }

    public function toJson():String{
        return json_encode($this,JSON_PRETTY_PRINT);
    }

    /**
     * Get the value of id_transaccion
     */ 
    public function getId_transaccion()
    {
        return $this->id_transaccion;
    }

    /**
     * Set the value of id_transaccion
     *
     * @return  self
     */ 
    public function setId_transaccion($id_transaccion)
    {
        $this->id_transaccion = $id_transaccion;

        return $this;
    }

    /**
     * Get the value of id_usuario_admin
     */ 
    public function getId_usuario_admin()
    {
        return $this->id_usuario_admin;
    }

    /**
     * Set the value of id_usuario_admin
     *
     * @return  self
     */ 
    public function setId_usuario_admin($id_usuario_admin)
    {
        $this->id_usuario_admin = $id_usuario_admin;

        return $this;
    }

    /**
     * Get the value of id_usuario_afiliado
     */ 
    public function getId_usuario_afiliado()
    {
        return $this->id_usuario_afiliado;
    }

    /**
     * Set the value of id_usuario_afiliado
     *
     * @return  self
     */ 
    public function setId_usuario_afiliado($id_usuario_afiliado)
    {
        $this->id_usuario_afiliado = $id_usuario_afiliado;

        return $this;
    }

    /**
     * Get the value of concepto
     */ 
    public function getConcepto()
    {
        return $this->concepto;
    }

    /**
     * Set the value of concepto
     *
     * @return  self
     */ 
    public function setConcepto($concepto)
    {
        $this->concepto = $concepto;

        return $this;
    }

    /**
     * Get the value of importe
     */ 
    public function getImporte()
    {
        return $this->importe;
    }

    /**
     * Set the value of importe
     *
     * @return  self
     */ 
    public function setImporte($importe)
    {
        $this->importe = $importe;

        return $this;
    }

    /**
     * Get the value of fecha
     */ 
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */ 
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

        return $this;
    }

}


class TransaccionModel extends Model
{

    public function getAll($id_usuario)
    {
        $sql = "SELECT * FROM transaccion";
        if($id_usuario != null) {
            $sql.= " WHERE id_usuario_afiliado = ?";
        }
        $sql .= " ORDER BY fecha DESC LIMIT 5";
        $pdo = self::getConnection();
        $resultado = [];
        try {
            $stmt = $pdo->prepare($sql);
            if($id_usuario != null) {
                $stmt->bindValue(1, $id_usuario, PDO::PARAM_INT);
            }
                 
            $stmt->execute();

            $resultado = array();
            foreach($stmt as $t){
                $transaccion = new Transaccion($t['id_usuario_admin'],$t['id_usuario_afiliado'],$t['concepto'],$t['importe'], $t['fecha'], $t['id_transaccion']);
                $resultado[] = $transaccion;
            }
        } catch (PDOException $th) {
            error_log("Error TransaccionModel->getAll()");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function get($idTransaccion) : Transaccion | null
    {
        $sql = "SELECT * FROM transaccion WHERE id_transaccion=?";
        $pdo = self::getConnection();
        $resultado = null;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $idTransaccion, PDO::PARAM_INT);
            $stmt->execute();
            if($t = $stmt->fetch()){
                $resultado = new Transaccion($t['id_usuario_admin'],$t['id_usuario_afiliado'],$t['concepto'],$t['importe'], $t['fecha'], $t['id_transaccion']);
            }
            
        } catch (Throwable $th) {
            error_log("Error TransaccionModel->get($idTransaccion)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function insert($transaccion)
    {
        $sql = "INSERT INTO transaccion(id_usuario_admin, id_usuario_afiliado, concepto, importe, fecha) VALUES (:id_usuario_admin, :id_usuario_afiliado, :concepto, :importe, :fecha)";
        $sql2 = "SELECT puntos FROM afiliado WHERE id_usuario = ?";
        $sql3 = "UPDATE afiliado SET puntos = puntos + ? WHERE id_usuario = ?";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $pdo->beginTransaction();

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(":id_usuario_admin", $transaccion->getId_usuario_admin(), PDO::PARAM_INT);
            $stmt->bindValue(":id_usuario_afiliado", $transaccion->getId_usuario_afiliado(), PDO::PARAM_INT);
            $stmt->bindValue(":concepto", $transaccion->getConcepto(), PDO::PARAM_STR);
            $stmt->bindValue(":importe", $transaccion->getImporte(), PDO::PARAM_INT);
            $stmt->bindValue(":fecha", $transaccion->getFecha() ?? date('Y-m-d'), PDO::PARAM_STR);

            $stmt->execute();

            $stmt2 = $pdo->prepare($sql2);
            $stmt2->bindValue(1, $transaccion->getId_usuario_afiliado(), PDO::PARAM_INT);
            $stmt2->execute();
            $saldo = $stmt2->fetchColumn();

            if ($saldo + $transaccion->getImporte() < 0) {
                throw new PDOException("Saldo insuficiente para canjear esta recompensa.");
            }

            $stmt3 = $pdo->prepare($sql3);
            $stmt3->bindValue(1, $transaccion->getImporte(), PDO::PARAM_INT);
            $stmt3->bindValue(2, $transaccion->getId_usuario_afiliado(), PDO::PARAM_INT);

            $stmt3->execute();

            $pdo->commit();
            $resultado = true;
        } catch (PDOException $th) {
            error_log("Error TransaccionModel->insert(" . $transaccion->toJson. ")");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function update($transaccion, $idTransaccion)
    {
        /*  NO SE USA ACTUALMENTE*/
        /*$sql = "UPDATE transaccion SET id_usuario_admin=:id_usuario_admin, id_usuario_afiliado=:id_usuario_afiliado,
            concepto=:concepto, importe=:importe fecha=:fecha
            WHERE id_transaccion=:id_transaccion";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(":id_usuario_admin", $transaccion->getId_usuario_admin(), PDO::PARAM_INT);
            $stmt->bindValue(":id_usuario_afiliado", $transaccion->getId_usuario_afiliado(), PDO::PARAM_INT);
            $stmt->bindValue(":concepto", $transaccion->getConcepto(), PDO::PARAM_STR);
            $stmt->bindValue(":importe", $transaccion->getImporte(), PDO::PARAM_INT);
            $stmt->bindValue(":fecha", $transaccion->getFecha() ?? date('Y-m-d'), PDO::PARAM_STR);
            $stmt->bindValue(":id_transaccion", $idTransaccion, PDO::PARAM_INT);

            $resultado = $stmt->execute();
            $resultado = $stmt->rowCount() == 1;
        } catch (PDOException $th) {
            error_log("Error TransaccionModel->update(" . implode(",", $transaccion) . ", $idTransaccion)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;*/
    }

    public function delete($idTransaccion)
    {
        $sql = "DELETE FROM transaccion WHERE id_transaccion = ?";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $idTransaccion, PDO::PARAM_INT);
            $resultado = $stmt->execute();
        } catch (PDOException $th) {
            error_log("Error TransaccionModel->delete($idTransaccion)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }
}