<?php
// Realizar la conexión a la base de datos (reemplaza con tus propios datos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mariadb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener datos de las tablas 'problema', 'solucion' y 'metodo'
$sql = "SELECT p.id_problema, p.total_fabrica, p.total_bodega, p.fecha_hora, m.nombre AS nombre_metodo, s.costo_total
        FROM problema p
        INNER JOIN solucion s ON p.id_problema = s.id_problema
        INNER JOIN metodo m ON s.id_metodo = m.id_metodo";
$result = $conn->query($sql);

// Crear un array para almacenar los resultados
$rows = array();

if ($result->num_rows > 0) {
    // Almacenar cada fila como un objeto en el array
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

// Devolver los datos como JSON
echo json_encode($rows);

// Cerrar la conexión
$conn->close();
?>


