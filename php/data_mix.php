<?php
require_once __DIR__ . "/config.php";
header("Access-Control-Allow-Origin: *"); // 全てのオリジンから許可
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    $pdo = new PDO(DB_DSN, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $count = filter_input(INPUT_POST, "count", FILTER_VALIDATE_INT);

    if ($count === null || $count === false) {
        echo "invalid count";
        exit;
    }

    // mix テーブルへ保存
    $stmt = $pdo->prepare("UPDATE mesh_data_mix SET `count` = :count ORDER BY id DESC LIMIT 1");
    $stmt->execute([':count' => $count]);

    echo "OK";
} catch (PDOException $error) {
    echo "DB Error: " . $error->getMessage();
}
