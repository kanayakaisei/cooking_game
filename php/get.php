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

    // mesh_data_cut に保存
    $stmt1 = $pdo->prepare("INSERT INTO mesh_data_cut (count) VALUES (:count)");
    $stmt1->execute([':count' => $count]);

    // mesh_data_mix に保存
    $stmt2 = $pdo->prepare("INSERT INTO mesh_data_mix (count) VALUES (:count)");
    $stmt2->execute([':count' => $count]);

    // mesh_data_flip に保存
    $stmt3 = $pdo->prepare("INSERT INTO mesh_data_flip (count) VALUES (:count)");
    $stmt3->execute([':count' => $count]);

    echo "OK";
} catch (PDOException $e) {
    echo "DB Error: " . $e->getMessage();
}
