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
    PRIMARY KEY (id_problema, id_metodo),
    FOREIGN KEY (id_problema) REFERENCES problema(id_problema),
    FOREIGN KEY (id_metodo) REFERENCES metodo(id_metodo)
) ENGINE=InnoDB";

if ($conn->query($sqlSolucion) === TRUE) {
    echo "Tabla Solucion creada correctamente\n";
} else {
    echo "Error al crear la tabla Solucion: " . $conn->error;
    
}




//Tabla Fabrica
$sqlFabrica = "CREATE TABLE IF NOT EXISTS Fabrica (
    id_problema INT(6) PRIMARY KEY,
    letra_fabrica VARCHAR(2) PRIMARY KEY,
    produccion INT,
    FOREIGN KEY (id_problema) REFERENCES Problema(id_problema),
)";

if ($conn->query($sqlFabrica) === TRUE) {
    echo "Tabla Fabrica creada correctamente\n";
} else {
    echo "Error al crear la tabla Fabrica: " . $conn->error;
}


//Tabla Bodega
$sqlBodega = "CREATE TABLE IF NOT EXISTS Bodega (
    id_problema INT(6) PRIMARY KEY,
    num_bodega INT(6) PRIMARY KEY,
    capacidad INT,
    FOREIGN KEY (id_problema) REFERENCES Problema(id_problema),
)";

if ($conn->query($sqlBodega) === TRUE) {
    echo "Tabla Bodega creada correctamente\n";
} else {
    echo "Error al crear la tabla Bodega: " . $conn->error;
}

//Tabla Asignacion
$sqlAsignacion = "CREATE TABLE IF NOT EXISTS Asignacion (
    id_problema INT(6) PRIMARY KEY,
    letra_fabrica VARCHAR(2) PRIMARY KEY,
    num_bodega INT(6),
    cantidad INT,
    FOREIGN KEY (id_problema) REFERENCES Problema(id_problema),
    FOREIGN KEY (letra_fabrica) REFERENCES Fabrica(letra_fabrica),
    FOREIGN KEY (num_bodega) REFERENCES Bodega(num_bodega)
    

)";

if ($conn->query($sqlAsignacion) === TRUE) {
    echo "Tabla Asignacion creada correctamente\n";
} else {
    echo "Error al crear la tabla Asignacion: " . $conn->error;
}




//Tabla costo
$sqlCosto = "CREATE TABLE IF NOT EXISTS Costo (
    monto INT,
    id_problema INT(6) PRIMARY KEY,
    letra_fabrica VARCHAR(2) PRIMARY KEY,
    num_bodega INT(6),
    FOREIGN KEY (id_problema) REFERENCES Problema(id_problema),
    FOREIGN KEY (letra_fabrica) REFERENCES Fabrica(letra_fabrica),
    FOREIGN KEY (num_bodega) REFERENCES Bodega(num_bodega)
    

)";

if ($conn->query($sqlCosto) === TRUE) {
    echo "Tabla Costo creada correctamente\n";
} else {
    echo "Error al crear la tabla Costo: " . $conn->error;
}





// Cerrar la conexión
$conn->close();

?>