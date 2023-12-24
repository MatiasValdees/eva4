<?php

// Datos de conexión
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mariadb";

// conexión a la base de datos
$conn = new mysqli($servername, $username, $password);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Crear base de datos
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Base de datos creada correctamente\n";
} else {
    echo "Error al crear la base de datos: " . $conn->error;
}

// Seleccionar la base de datos
$conn->select_db($dbname);

// Tabla Problema
$tableName = "problema";
$sql = "CREATE TABLE IF NOT EXISTS $tableName (
    id_problema INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    total_fabrica INT(6) NOT NULL,
    total_bodega INT(6) NOT NULL,
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB";

if ($conn->query($sql) === TRUE) {
    echo "Tabla Problema creada correctamente\n";
} else {
    echo "Error al crear la tabla: " . $conn->error;
}


//Tabla Metodo
$sqlMetodo = "CREATE TABLE IF NOT EXISTS metodo (
    id_metodo INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL
)ENGINE=InnoDB";

if ($conn->query($sqlMetodo) === TRUE) {
    echo "Tabla Metodo creada correctamente\n";
} else {
    echo "Error al crear la tabla: Metodo " . $conn->error;
}



//Tabla Solucion
$sqlSolucion = "CREATE TABLE IF NOT EXISTS solucion (
    costo_total INT NOT NULL,
    id_problema INT(6),
    id_metodo INT(6),
)";

if ($conn->query($sqlSolucion) === TRUE) {
    echo "Tabla Solucion creada correctamente\n";
} else {
    echo "Error al crear la tabla Solucion: " . $conn->error;
    
}

//Tabla Fabrica
$sqlFabrica = "CREATE TABLE IF NOT EXISTS Fabrica (
    id_problema INT(6),
    letra_fabrica VARCHAR(2),
    produccion INT,
    PRIMARY KEY(id_problema, letra_fabrica)
)";

if ($conn->query($sqlFabrica) === TRUE) {
    echo "Tabla Fabrica creada correctamente\n";
} else {
    echo "Error al crear la tabla Fabrica: " . $conn->error;
}


//Tabla Bodega
$sqlBodega = "CREATE TABLE IF NOT EXISTS Bodega (
    id_problema INT(6),
    num_bodega INT(6),
    capacidad INT,
    PRIMARY KEY(id_problema,num_bodega)
)";

if ($conn->query($sqlBodega) === TRUE) {
    echo "Tabla Bodega creada correctamente\n";
} else {
    echo "Error al crear la tabla Bodega: " . $conn->error;
}

//Tabla Asignacion
$sqlAsignacion = "CREATE TABLE IF NOT EXISTS Asignacion (
    id_problema INT(6),
    letra_fabrica VARCHAR(2),
    num_bodega INT(6),
    cantidad INT,
    PRIMARY KEY(id_problema,letra_fabrica)
)";

if ($conn->query($sqlAsignacion) === TRUE) {
    echo "Tabla Asignacion creada correctamente\n";
} else {
    echo "Error al crear la tabla Asignacion: " . $conn->error;
}




//Tabla costo
$sqlCosto = "CREATE TABLE IF NOT EXISTS Costo (
    monto INT,
    id_problema INT(6),
    letra_fabrica VARCHAR(2),
    num_bodega INT(6),  
    PRIMARY KEY(id_problema, num_bodega)
)";

if ($conn->query($sqlCosto) === TRUE) {
    echo "Tabla Costo creada correctamente\n";
} else {
    echo "Error al crear la tabla Costo: " . $conn->error;
}

// Cerrar la conexión
$conn->close();

?>

