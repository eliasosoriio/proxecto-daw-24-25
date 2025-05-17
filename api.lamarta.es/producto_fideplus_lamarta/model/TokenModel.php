<?php
include_once("Model.php");
include_once("ModelObject.php");

class Token extends ModelObject{

    public int $id_usuario;
    public string $token = '';
    public string $validez;

    public static function fromJson($json): ModelObject {
        $data = json_decode($json, true);
        $token = new Token();
        $token->setId_usuario($data["id_usuario"]);
        $token->setToken($data["token"]);
        $token->setValidez($data["validez"]);
        return $token;
    }

    public function toJson():String{
        return json_encode($this,JSON_PRETTY_PRINT);
    }

    /**
     * Get the value of id_usuario
     */ 
    public function getId_usuario()
    {
        return $this->id_usuario;
    }

    /**
     * Set the value of id_usuario
     *
     * @return  self
     */ 
    public function setId_usuario($id_usuario)
    {
        $this->id_usuario = $id_usuario;

        return $this;
    }

    /**
     * Get the value of token
     */ 
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Set the value of token
     *
     * @return  self
     */ 
    public function setToken($token)
    {
        $this->token = $token;

        return $this;
    }

    /**
     * Get the value of validez
     */ 
    public function getValidez()
    {
        return $this->validez;
    }

    /**
     * Set the value of validez
     *
     * @return  self
     */ 
    public function setValidez($validez)
    {
        $this->validez = $validez;

        return $this;
    }
}


class TokenModel extends Model
{
    public function existe($id_usuario): bool {
    $sql = "SELECT * FROM token WHERE id_usuario = ? LIMIT 1";
    $pdo = self::getConnection();
    $existe = false;

    try {
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(1, $id_usuario, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->fetch()) {
            $existe = true;
        }
    } catch (Throwable $th) {
        error_log("Error TokenModel->existe($id_usuario)");
        error_log($th->getMessage());
    } finally {
        $stmt = null;
        $pdo = null;
    }

    return $existe;
}


    public function insert($token): bool{
        $sql = "INSERT INTO token (id_usuario, token) VALUES (?, ?)";
        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $token->getId_usuario(), PDO::PARAM_INT);
            $stmt->bindValue(2, $token->getToken(), PDO::PARAM_STR);
            if($stmt->execute()){
                $resultado = true;
            }
        } catch (Throwable $th) {
            error_log("Error TokenModel->insert(".$token->getId_usuario().")");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function update($token): bool {
    $sql = "UPDATE token SET token = ?, validez = CURRENT_TIMESTAMP WHERE id_usuario = ?";
    $pdo = self::getConnection();
    $resultado = false;
    try {
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(1, $token->getToken(), PDO::PARAM_STR);
        $stmt->bindValue(2, $token->getId_usuario(), PDO::PARAM_INT);
        if ($stmt->execute()) {
            $resultado = true;
        }
    } catch (Throwable $th) {
        error_log("Error TokenModel->update(" . $token->getId_usuario() . ")");
        error_log($th->getMessage());
    } finally {
        $stmt = null;
        $pdo = null;
    }

    return $resultado;
}

}