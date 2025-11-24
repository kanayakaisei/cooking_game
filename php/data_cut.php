<?php
require_once __DIR__ . "/config.php";

try {
    $pdo = new PDO(DB_DSN, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $count = filter_input(INPUT_POST, "count", FILTER_VALIDATE_INT);

    if ($count === null || $count === false) {
        echo "invalid count";
        exit;
    }

    // cut テーブルへ保存
    $stmt = $pdo->prepare("INSERT INTO mesh_data_cut (count) VALUES (:count)");
    $stmt->execute([':count' => $count]);

    echo "OK";
} catch (PDOException $error) {
    echo "DB Error: " . $error->getMessage();
}
