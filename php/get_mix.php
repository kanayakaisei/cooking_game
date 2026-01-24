<?php
require_once __DIR__ . "/config.php";

header("Access-Control-Allow-Origin: *"); // 全てのオリジンから許可
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    $pdo = new PDO(DB_DSN, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $count = filter_input(INPUT_GET, "count", FILTER_VALIDATE_INT);

    // mesh_data_mix に保存
    $stmt = $pdo->query("SELECT count FROM mesh_data_mix ORDER BY id DESC LIMIT 1");
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        echo $row["count"];
    } else {
        echo "0";
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
