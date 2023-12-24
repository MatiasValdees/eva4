-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-12-2023 a las 21:48:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mariadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacion`
--

CREATE TABLE `asignacion` (
  `id_problema` int(6) NOT NULL,
  `letra_fabrica` varchar(2) NOT NULL,
  `num_bodega` int(6) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asignacion`
--

INSERT INTO `asignacion` (`id_problema`, `letra_fabrica`, `num_bodega`, `cantidad`) VALUES
(1, 'AA', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega`
--

CREATE TABLE `bodega` (
  `id_problema` int(6) NOT NULL,
  `num_bodega` int(6) NOT NULL,
  `capacidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bodega`
--

INSERT INTO `bodega` (`id_problema`, `num_bodega`, `capacidad`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costo`
--

CREATE TABLE `costo` (
  `monto` int(11) DEFAULT NULL,
  `id_problema` int(6) NOT NULL,
  `letra_fabrica` varchar(2) NOT NULL,
  `num_bodega` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `costo`
--

INSERT INTO `costo` (`monto`, `id_problema`, `letra_fabrica`, `num_bodega`) VALUES
(11, 1, 'AA', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fabrica`
--

CREATE TABLE `fabrica` (
  `id_problema` int(6) NOT NULL,
  `letra_fabrica` varchar(2) NOT NULL,
  `produccion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fabrica`
--

INSERT INTO `fabrica` (`id_problema`, `letra_fabrica`, `produccion`) VALUES
(1, 'AA', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo`
--

CREATE TABLE `metodo` (
  `id_metodo` int(6) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `metodo`
--

INSERT INTO `metodo` (`id_metodo`, `nombre`) VALUES
(1, 'Bogel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `problema`
--

CREATE TABLE `problema` (
  `id_problema` int(6) NOT NULL,
  `total_fabrica` int(6) NOT NULL,
  `total_bodega` int(6) NOT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `problema`
--

INSERT INTO `problema` (`id_problema`, `total_fabrica`, `total_bodega`, `fecha_hora`) VALUES
(1, 2, 2, '2023-12-22 11:33:18'),
(2, 1, 2, '2023-12-22 12:56:01'),
(3, 2, 2, '2023-12-22 13:04:51'),
(4, 33, 3, '2023-12-22 13:17:34'),
(5, 33, 3, '2023-12-22 13:18:17'),
(6, 44, 4, '2023-12-22 13:22:36'),
(7, 44, 5, '2023-12-22 13:23:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solucion`
--

CREATE TABLE `solucion` (
  `id_problema` int(6) NOT NULL,
  `id_metodo` int(6) NOT NULL,
  `costo_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `solucion`
--

INSERT INTO `solucion` (`id_problema`, `id_metodo`, `costo_total`) VALUES
(1, 1, 22);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignacion`
--
ALTER TABLE `asignacion`
  ADD PRIMARY KEY (`id_problema`,`letra_fabrica`,`num_bodega`),
  ADD KEY `id_problema` (`id_problema`),
  ADD KEY `num_bodega` (`num_bodega`),
  ADD KEY `fk_num_bodega` (`id_problema`,`num_bodega`),
  ADD KEY `id_problema_2` (`id_problema`);

--
-- Indices de la tabla `bodega`
--
ALTER TABLE `bodega`
  ADD PRIMARY KEY (`id_problema`,`num_bodega`),
  ADD KEY `id_problema` (`id_problema`);

--
-- Indices de la tabla `costo`
--
ALTER TABLE `costo`
  ADD PRIMARY KEY (`id_problema`,`letra_fabrica`,`num_bodega`),
  ADD KEY `num_bodega` (`num_bodega`),
  ADD KEY `fk_costo_bodega` (`id_problema`,`num_bodega`);

--
-- Indices de la tabla `fabrica`
--
ALTER TABLE `fabrica`
  ADD PRIMARY KEY (`id_problema`,`letra_fabrica`),
  ADD KEY `id_problema` (`id_problema`);

--
-- Indices de la tabla `metodo`
--
ALTER TABLE `metodo`
  ADD PRIMARY KEY (`id_metodo`);

--
-- Indices de la tabla `problema`
--
ALTER TABLE `problema`
  ADD PRIMARY KEY (`id_problema`);

--
-- Indices de la tabla `solucion`
--
ALTER TABLE `solucion`
  ADD PRIMARY KEY (`id_problema`,`id_metodo`),
  ADD KEY `fk_solucion_metodo` (`id_metodo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `metodo`
--
ALTER TABLE `metodo`
  MODIFY `id_metodo` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `problema`
--
ALTER TABLE `problema`
  MODIFY `id_problema` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignacion`
--
ALTER TABLE `asignacion`
  ADD CONSTRAINT `fk_id_problema3` FOREIGN KEY (`id_problema`) REFERENCES `problema` (`id_problema`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_letra_fabrica` FOREIGN KEY (`id_problema`,`letra_fabrica`) REFERENCES `fabrica` (`id_problema`, `letra_fabrica`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_num_bodega` FOREIGN KEY (`id_problema`,`num_bodega`) REFERENCES `bodega` (`id_problema`, `num_bodega`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `bodega`
--
ALTER TABLE `bodega`
  ADD CONSTRAINT `bodega_ibfk_1` FOREIGN KEY (`id_problema`) REFERENCES `problema` (`id_problema`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `costo`
--
ALTER TABLE `costo`
  ADD CONSTRAINT `fk_costo_bodega` FOREIGN KEY (`id_problema`,`num_bodega`) REFERENCES `bodega` (`id_problema`, `num_bodega`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_costo_fabrica` FOREIGN KEY (`id_problema`,`letra_fabrica`) REFERENCES `fabrica` (`id_problema`, `letra_fabrica`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_costo_problema` FOREIGN KEY (`id_problema`) REFERENCES `bodega` (`id_problema`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_costo_problema2` FOREIGN KEY (`id_problema`) REFERENCES `problema` (`id_problema`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `fabrica`
--
ALTER TABLE `fabrica`
  ADD CONSTRAINT `fk_fabrica_problema` FOREIGN KEY (`id_problema`) REFERENCES `problema` (`id_problema`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `solucion`
--
ALTER TABLE `solucion`
  ADD CONSTRAINT `fk_solucion_metodo` FOREIGN KEY (`id_metodo`) REFERENCES `metodo` (`id_metodo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_solucion_problema` FOREIGN KEY (`id_problema`) REFERENCES `problema` (`id_problema`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
