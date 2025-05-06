-- MySQL dump 10.13  Distrib 9.2.0, for macos15.2 (arm64)
--
-- Host: localhost    Database: producto_fideplus_lamarta
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ADMINISTRADOR`
--

DROP TABLE IF EXISTS `ADMINISTRADOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ADMINISTRADOR` (
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_usuario`),
  CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `USUARIO` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ADMINISTRADOR`
--

LOCK TABLES `ADMINISTRADOR` WRITE;
/*!40000 ALTER TABLE `ADMINISTRADOR` DISABLE KEYS */;
INSERT INTO `ADMINISTRADOR` VALUES (1);
/*!40000 ALTER TABLE `ADMINISTRADOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AFILIADO`
--

DROP TABLE IF EXISTS `AFILIADO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AFILIADO` (
  `id_usuario` int NOT NULL,
  `puntos` int DEFAULT '0',
  PRIMARY KEY (`id_usuario`),
  CONSTRAINT `afiliado_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `USUARIO` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AFILIADO`
--

LOCK TABLES `AFILIADO` WRITE;
/*!40000 ALTER TABLE `AFILIADO` DISABLE KEYS */;
INSERT INTO `AFILIADO` VALUES (2,550);
/*!40000 ALTER TABLE `AFILIADO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RECOMPENSA`
--

DROP TABLE IF EXISTS `RECOMPENSA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RECOMPENSA` (
  `id_recompensa` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `precio` int NOT NULL,
  PRIMARY KEY (`id_recompensa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RECOMPENSA`
--

LOCK TABLES `RECOMPENSA` WRITE;
/*!40000 ALTER TABLE `RECOMPENSA` DISABLE KEYS */;
/*!40000 ALTER TABLE `RECOMPENSA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRANSACCION`
--

DROP TABLE IF EXISTS `TRANSACCION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRANSACCION` (
  `id_transaccion` int NOT NULL AUTO_INCREMENT,
  `id_usuario_admin` int NOT NULL,
  `id_usuario_afiliado` int NOT NULL,
  `concepto` varchar(255) NOT NULL,
  `importe` int NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id_transaccion`),
  KEY `id_usuario_admin` (`id_usuario_admin`),
  KEY `id_usuario_afiliado` (`id_usuario_afiliado`),
  CONSTRAINT `transaccion_ibfk_1` FOREIGN KEY (`id_usuario_admin`) REFERENCES `ADMINISTRADOR` (`id_usuario`),
  CONSTRAINT `transaccion_ibfk_2` FOREIGN KEY (`id_usuario_afiliado`) REFERENCES `AFILIADO` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRANSACCION`
--

LOCK TABLES `TRANSACCION` WRITE;
/*!40000 ALTER TABLE `TRANSACCION` DISABLE KEYS */;
INSERT INTO `TRANSACCION` VALUES (1,1,2,'Compra - Onion Belly Burger',50,'2025-05-01'),(2,1,2,'Compra - Onion Belly Burger',50,'2025-05-02'),(3,1,2,'Recurrencia - Programa fidelización',100,'2025-05-03'),(4,1,2,'Bonificación - Primer mes',300,'2025-05-05'),(5,1,2,'Recompensa - Onion Belly',-300,'2025-05-02'),(6,1,2,'Recompensa - La Classic',-150,'2025-05-04');
/*!40000 ALTER TABLE `TRANSACCION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIO`
--

DROP TABLE IF EXISTS `USUARIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USUARIO` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `tipo` enum('admin','afiliado') NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIO`
--

LOCK TABLES `USUARIO` WRITE;
/*!40000 ALTER TABLE `USUARIO` DISABLE KEYS */;
INSERT INTO `USUARIO` VALUES (1,'Admin','Lamarta','administrador@lamarta.es','9dbf7c1488382487931d10235fc84a74bff5d2f4','admin'),(2,'Cliente','Prueba','cliente@lamarta.es','d94019fd760a71edf11844bb5c601a4de95aacaf','afiliado');
/*!40000 ALTER TABLE `USUARIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'producto_fideplus_lamarta'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-06 19:40:08
