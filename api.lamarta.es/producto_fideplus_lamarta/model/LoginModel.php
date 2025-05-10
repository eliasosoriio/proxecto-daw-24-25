<?php
include_once("Model.php");
include_once("ModelObject.php");

class Login extends ModelObject{

    public string $usuario;
    public string $contrasenia;
    public string $tipo;
    public string $token;

    public static function fromJson($json): ModelObject {
        $data = json_decode($json, true);
        $login = new Login();
        $login->setUsuario($data["usuario"]);
        $login->setContrasenia($data["contrasenia"]);
        return $login;
    }

    public function toJson():String{
        return json_encode($this,JSON_PRETTY_PRINT);
    }

    /**
     * Get the value of usuario
     */ 
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Set the value of usuario
     *
     * @return  self
     */ 
    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * Get the value of contrasenia
     */ 
    public function getContrasenia()
    {
        return $this->contrasenia;
    }

    /**
     * Set the value of contrasenia
     *
     * @return  self
     */ 
    public function setContrasenia($contrasenia)
    {
        $this->contrasenia = $contrasenia;

        return $this;
    }

     /**
     * Get the value of tipo
     */ 
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Set the value of tipo
     *
     * @return  self
     */ 
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

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
}


class LoginModel extends Model
{

    public function singIn($login): Login{
        $sql = "SELECT correo AS usuario, contrasenia, tipo FROM usuario WHERE correo=?";
        $pdo = self::getConnection();
        $resultado = null;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $login->getUsuario(), PDO::PARAM_STR);
            $stmt->execute();
            if($u = $stmt->fetch()){
                $hola = password_verify($login->getContrasenia(), $u["contrasenia"]);

               //$hash = password_hash("cliente", PASSWORD_DEFAULT);

                if (password_verify($login->getContrasenia(), $u["contrasenia"])) {
                    $resultado = new Login();
                    $resultado->setUsuario($u["usuario"]);
                    $resultado->setTipo($u["tipo"]);
                }
            }
            
        } catch (Throwable $th) {
            error_log("Error LoginModel->singIn($login->getUsuario()");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }
}