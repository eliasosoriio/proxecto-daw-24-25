<?php
include_once("Model.php");
include_once("ModelObject.php");

class Usuario extends ModelObject{

    public int $id_usuario;
    public string $nombre;
    public string $apellidos;
    public string $correo;
    public string $contrasenia;
    public int $id_tipo = 2;
    public int $puntos;


    public static function fromJson($json): ModelObject {
        $data = json_decode($json, true)[0];
        $usuario = new Usuario();

        if(isset($data['id_usuario'])) {
            $usuario->setId_usuario($data['id_usuario']);
        }
        if(isset($data['nombre'])) {
            $usuario->setNombre($data['nombre']);
        }
        if(isset($data['apellidos'])) {
            $usuario->setApellidos($data['apellidos']);
        }
        if(isset($data['correo'])) {
            $usuario->setCorreo($data['correo']);
        }
        if(isset($data['contrasenia'])) {
            $usuario->setContrasenia(password_hash($data['contrasenia'], PASSWORD_DEFAULT));
        }

        return $usuario;
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
     * Get the value of apellidos
     */ 
    public function getApellidos()
    {
            return $this->apellidos;
    }

    /**
     * Set the value of apellidos
     *
     * @return  self
     */ 
    public function setApellidos($apellidos)
    {
            $this->apellidos = $apellidos;

            return $this;
    }

    /**
     * Get the value of correo
     */ 
    public function getCorreo()
    {
        return $this->correo;
    }

    /**
     * Set the value of correo
     *
     * @return  self
     */ 
    public function setCorreo($correo)
    {
        $this->correo = $correo;

        return $this;
    }

    /**
     * Get the value of id_tipo
     */ 
    public function getId_tipo()
    {
        return $this->id_tipo;
    }

    /**
     * Set the value of id_tipo
     *
     * @return  self
     */ 
    public function setId_tipo($id_tipo)
    {
        $this->id_tipo = $id_tipo;

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
     * Get the value of puntos
     */ 
    public function getPuntos()
    {
        return $this->puntos;
    }

    /**
     * Set the value of puntos
     *
     * @return  self
     */ 
    public function setPuntos($puntos)
    {
        $this->puntos = $puntos;

        return $this;
    }
}


class UsuarioModel extends Model
{

    public function getAll()
    {
        $sql = "SELECT u.*, a.puntos FROM usuario u INNER JOIN afiliado a ON u.id_usuario = a.id_usuario WHERE id_tipo = 2 ORDER BY a.puntos DESC LIMIT 5";
        $pdo = self::getConnection();
        $resultado = [];
        try {
            $stmt = $pdo->query($sql);
            $resultado = array();
            foreach($stmt as $u){
                $usuario = new Usuario();

                $usuario->setId_usuario($u['id_usuario']);
                $usuario->setNombre($u['nombre']);
                $usuario->setApellidos($u['apellidos']);
                $usuario->setCorreo($u['correo']);
                $usuario->setId_tipo($u['id_tipo']);
                $usuario->setPuntos($u['puntos']);

                $resultado[] = $usuario;
            }
        } catch (PDOException $th) {
            error_log("Error UsuarioModel->getAll()");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function get($id_usuario) : Usuario | null
    {
        $sql = "SELECT u.*, a.puntos FROM usuario u INNER JOIN afiliado a ON u.id_usuario = a.id_usuario WHERE u.id_usuario=?";
        $pdo = self::getConnection();
        $resultado = null;
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $id_usuario, PDO::PARAM_INT);
            $stmt->execute();
            if($u = $stmt->fetch()){
                $usuario = new Usuario();

                $usuario->setId_usuario($u['id_usuario']);
                $usuario->setNombre($u['nombre']);
                $usuario->setApellidos($u['apellidos']);
                $usuario->setCorreo($u['correo']);
                $usuario->setId_tipo($u['id_tipo']);
                $usuario->setPuntos($u['puntos']);

                $resultado = $usuario;
            }
        } catch (Throwable $th) {
            error_log("Error UsuarioModel->get($id_usuario)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function insert($usuario)
    {
        $sql = "INSERT INTO usuario (nombre, apellidos, correo, contrasenia, id_tipo) VALUES (:nombre, :apellidos, :correo, :contrasenia, :id_tipo)";
        $sql2 = "INSERT INTO afiliado (id_usuario) VALUES (:id_usuario)";
        $sql3 = "INSERT INTO token (id_usuario, token) VALUES (:id_usuario, :token)";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $pdo->beginTransaction();

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(":nombre", $usuario->getNombre(), PDO::PARAM_STR);
            $stmt->bindValue(":apellidos", $usuario->getApellidos(), PDO::PARAM_STR);
            $stmt->bindValue(":correo", $usuario->getCorreo(), PDO::PARAM_STR);
            $stmt->bindValue(":contrasenia", $usuario->getContrasenia(), PDO::PARAM_STR);
            $stmt->bindValue(":id_tipo", $usuario->getId_tipo(), PDO::PARAM_INT);

            $stmt->execute();

            $idUsuario = $pdo->lastInsertId();

            $stmt2 = $pdo->prepare($sql2);
            $stmt2->bindValue(":id_usuario", $idUsuario, PDO::PARAM_INT);

            $stmt2->execute();

            $stmt3 = $pdo->prepare($sql3);
            $stmt3->bindValue(":id_usuario", $idUsuario, PDO::PARAM_INT);
            $stmt3->bindValue(":token", bin2hex(random_bytes(16)), PDO::PARAM_STR);

            $stmt3->execute();

            $pdo->commit();
            $resultado = true;
        } catch (PDOException $th) {
            $pdo->rollBack();
            error_log("Error UsuarioModel->insert(" . $usuario->toJson. ")");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $stmt2 = null;
            $stmt3 = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function update($usuario, $id_usuario)
    {
        $sql = "UPDATE usuario SET nombre = :nombre, apellidos = :apellidos, correo = :correo";
        if (!empty($usuario->getContrasenia())) {
            $sql .= ", contrasenia = :contrasenia";
        }
        $sql .= " WHERE id_usuario = :id_usuario";

        $pdo = self::getConnection();
        $resultado = false;
        try {
            $stmt = $pdo->prepare($sql);
                $stmt->bindValue(":id_usuario", $usuario->getId_usuario(), PDO::PARAM_INT);
                $stmt->bindValue(":nombre", $usuario->getNombre(), PDO::PARAM_STR);
                $stmt->bindValue(":apellidos", $usuario->getApellidos(), PDO::PARAM_STR);
                $stmt->bindValue(":correo", $usuario->getCorreo(), PDO::PARAM_STR);
                if (!empty($usuario->getContrasenia())) {
                    $stmt->bindValue(":contrasenia", $usuario->getContrasenia(), PDO::PARAM_STR);
                }

            $resultado = $stmt->execute();
            $resultado = $stmt->rowCount() == 1;
        } catch (PDOException $th) {
            error_log("Error UsuarioModel->update(" . implode(",", $usuario) . ", $id_usuario)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $pdo = null;
        }

        return $resultado;
    }

    public function delete($id_usuario)
    {
        $sql = "DELETE FROM token WHERE id_usuario = ?";
        $sql2 = "DELETE FROM afiliado WHERE id_usuario = ?";
        $sql3 = "DELETE FROM usuario WHERE id_usuario = ?";

        $pdo = self::getConnection();
        $resultado = false;
        
        try {
            $pdo->beginTransaction();

            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(1, $id_usuario, PDO::PARAM_INT);
            $stmt->execute();

            $stmt2 = $pdo->prepare($sql2);
            $stmt2->bindValue(1, $id_usuario, PDO::PARAM_INT);
            $stmt2->execute();

            $stmt3 = $pdo->prepare($sql3);
            $stmt3->bindValue(1, $id_usuario, PDO::PARAM_INT);
            $stmt3->execute();

            $pdo->commit();
            $resultado = true;
        } catch (PDOException $th) {
            $pdo->rollBack();
            error_log("Error UsuarioModel->delete($id_usuario)");
            error_log($th->getMessage());
        } finally {
            $stmt = null;
            $stmt2 = null;
            $stmt3 = null;
            $pdo = null;
        }

        return $resultado;
    }

}