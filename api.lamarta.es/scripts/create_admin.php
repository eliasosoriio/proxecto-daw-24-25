<?php

$options = getopt("", ["name:", "surname:", "email:", "password:"]);

$required = ["name", "surname", "email", "password"];
foreach ($required as $field) {
    if (!isset($options[$field]) || trim((string) $options[$field]) === '') {
        fwrite(STDERR, "Falta el parametro --{$field}.\n");
        exit(1);
    }
}

$name = trim((string) $options["name"]);
$surname = trim((string) $options["surname"]);
$email = trim((string) $options["email"]);
$password = (string) $options["password"];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fwrite(STDERR, "El correo indicado no es valido.\n");
    exit(1);
}

$dbHost = getenv("DB_HOST") ?: "mariadb";
$dbName = getenv("DB_NAME") ?: "producto_fideplus_lamarta";
$dbUser = getenv("DB_USER") ?: "lamarta_app";
$dbPass = getenv("DB_PASS") ?: "";

$hash = password_hash($password, PASSWORD_DEFAULT);
if ($hash === false) {
    fwrite(STDERR, "No se ha podido generar el hash de la contrasena.\n");
    exit(1);
}

try {
    $pdo = new PDO(
        "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4",
        $dbUser,
        $dbPass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $existsStmt = $pdo->prepare("SELECT id_usuario FROM usuario WHERE correo = ? LIMIT 1");
    $existsStmt->execute([$email]);
    if ($existsStmt->fetch()) {
        fwrite(STDERR, "Ya existe un usuario con ese correo.\n");
        exit(1);
    }

    $pdo->beginTransaction();

    $insertUser = $pdo->prepare(
        "INSERT INTO usuario (nombre, apellidos, correo, contrasenia, id_tipo) VALUES (?, ?, ?, ?, 1)"
    );
    $insertUser->execute([$name, $surname, $email, $hash]);

    $userId = (int) $pdo->lastInsertId();

    $insertAdmin = $pdo->prepare("INSERT INTO administrador (id_usuario) VALUES (?)");
    $insertAdmin->execute([$userId]);

    $pdo->commit();

    fwrite(STDOUT, "Administrador creado correctamente con id {$userId}.\n");
} catch (Throwable $throwable) {
    if (isset($pdo) && $pdo instanceof PDO && $pdo->inTransaction()) {
        $pdo->rollBack();
    }

    fwrite(STDERR, "Error creando el administrador inicial: {$throwable->getMessage()}\n");
    exit(1);
}
