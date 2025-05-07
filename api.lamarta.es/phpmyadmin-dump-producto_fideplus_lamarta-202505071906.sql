-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 06, 2025 at 07:40 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `producto_fideplus_lamarta`
--

DROP DATABASE IF EXISTS `producto_fideplus_lamarta`;
CREATE DATABASE `producto_fideplus_lamarta`;
USE `producto_fideplus_lamarta`;

-- --------------------------------------------------------

--
-- Table structure for table `administrador`
--

CREATE TABLE `administrador` (
  `id_usuario` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administrador`
--

INSERT INTO `administrador` (`id_usuario`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `afiliado`
--

CREATE TABLE `afiliado` (
  `id_usuario` int NOT NULL,
  `puntos` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `afiliado`
--

INSERT INTO `afiliado` (`id_usuario`, `puntos`) VALUES
(2, 550);

-- --------------------------------------------------------

--
-- Table structure for table `recompensa`
--

CREATE TABLE `recompensa` (
  `id_recompensa` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `precio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transaccion`
--

CREATE TABLE `transaccion` (
  `id_transaccion` int NOT NULL,
  `id_usuario_admin` int NOT NULL,
  `id_usuario_afiliado` int NOT NULL,
  `concepto` varchar(255) NOT NULL,
  `importe` int NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaccion`
--

INSERT INTO `transaccion` (`id_transaccion`, `id_usuario_admin`, `id_usuario_afiliado`, `concepto`, `importe`, `fecha`) VALUES
(1, 1, 2, 'Compra - Onion Belly Burger', 50, '2025-05-01'),
(2, 1, 2, 'Compra - Onion Belly Burger', 50, '2025-05-02'),
(3, 1, 2, 'Recurrencia - Programa fidelización', 100, '2025-05-03'),
(4, 1, 2, 'Bonificación - Primer mes', 300, '2025-05-05'),
(5, 1, 2, 'Recompensa - Onion Belly', -300, '2025-05-02'),
(6, 1, 2, 'Recompensa - La Classic', -150, '2025-05-04');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `tipo` enum('admin','afiliado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellidos`, `correo`, `contrasenia`, `tipo`) VALUES
(1, 'Admin', 'Lamarta', 'administrador@lamarta.es', '9dbf7c1488382487931d10235fc84a74bff5d2f4', 'admin'),
(2, 'Cliente', 'Prueba', 'cliente@lamarta.es', 'd94019fd760a71edf11844bb5c601a4de95aacaf', 'afiliado');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indexes for table `afiliado`
--
ALTER TABLE `afiliado`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indexes for table `recompensa`
--
ALTER TABLE `recompensa`
  ADD PRIMARY KEY (`id_recompensa`);

--
-- Indexes for table `transaccion`
--
ALTER TABLE `transaccion`
  ADD PRIMARY KEY (`id_transaccion`),
  ADD KEY `id_usuario_admin` (`id_usuario_admin`),
  ADD KEY `id_usuario_afiliado` (`id_usuario_afiliado`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recompensa`
--
ALTER TABLE `recompensa`
  MODIFY `id_recompensa` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaccion`
--
ALTER TABLE `transaccion`
  MODIFY `id_transaccion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Constraints for table `afiliado`
--
ALTER TABLE `afiliado`
  ADD CONSTRAINT `afiliado_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Constraints for table `transaccion`
--
ALTER TABLE `transaccion`
  ADD CONSTRAINT `transaccion_ibfk_1` FOREIGN KEY (`id_usuario_admin`) REFERENCES `administrador` (`id_usuario`),
  ADD CONSTRAINT `transaccion_ibfk_2` FOREIGN KEY (`id_usuario_afiliado`) REFERENCES `afiliado` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;