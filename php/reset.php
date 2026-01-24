<?php
require_once __DIR__ . "/config.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

try {
    $pdo = new PDO(DB_DSN, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->beginTransaction();
    $pdo->exec(
        "INSERT INTO mesh_data_cut (`count`) VALUES (0)" // cut
    );
    $pdo->exec(
        "INSERT INTO mesh_data_mix (`count`) VALUES (0)" // mix
    );
    $pdo->exec(
        "INSERT INTO mesh_data_flip (`count`) VALUES (0)" // flip
    );
    // 全部成功したら確定
    $pdo->commit();

    echo "OK";
} catch (PDOException $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo "エラー" . $e->getMessage();
}
