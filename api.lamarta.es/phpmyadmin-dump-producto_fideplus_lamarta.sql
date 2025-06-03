-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb:3306
-- Tiempo de generación: 03-06-2025 a las 19:39:54
-- Versión del servidor: 10.6.19-MariaDB
-- Versión de PHP: 8.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `producto_fideplus_lamarta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id_usuario`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliado`
--

CREATE TABLE `afiliado` (
  `id_usuario` int(11) NOT NULL,
  `puntos` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `afiliado`
--

INSERT INTO `afiliado` (`id_usuario`, `puntos`) VALUES
(2, 500),
(3, 500),
(4, 500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permiso`
--

CREATE TABLE `permiso` (
  `id_tipo` int(11) NOT NULL,
  `controlador` varchar(100) NOT NULL,
  `metodos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`metodos`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permiso`
--

INSERT INTO `permiso` (`id_tipo`, `controlador`, `metodos`) VALUES
(1, 'recompensa', '[\"GET\", \"POST\", \"PATCH\", \"DELETE\"]'),
(2, 'recompensa', '[\"GET\"]'),
(1, 'transaccion', '[\"GET\", \"POST\", \"PATCH\", \"DELETE\"]'),
(1, 'admin', '[\"GET\", \"POST\", \"PATCH\", \"DELETE\"]'),
(1, 'afiliado', '[\"GET\", \"POST\", \"PATCH\", \"DELETE\"]'),
(2, 'afiliado', '[\"GET\", \"POST\", \"PATCH\"]'),
(2, 'transaccion', '[\"GET\"]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recompensa`
--

CREATE TABLE `recompensa` (
  `id_recompensa` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recompensa`
--

INSERT INTO `recompensa` (`id_recompensa`, `nombre`, `descripcion`, `precio`) VALUES
(1, 'Lamarta', 'Smash.', 3300),
(3, 'Onion Ring', 'Smash.', 4000),
(4, 'Tequeños', 'Entrante.', 3700),
(5, 'Patatas', 'Entrante.', 800);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`id_tipo`, `nombre`) VALUES
(1, 'admin'),
(2, 'afiliado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `id_usuario` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `validez` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `token`
--

INSERT INTO `token` (`id_usuario`, `token`, `validez`) VALUES
(1, 'MTlkMTQ1MjQ4YmQ4OTExZDhjZTVmMjE2ODFlMjhhMmE=', '2025-06-03 19:38:42'),
(2, 'MzI3MzNjOWJlZTI0ZjczODIxMTZmZDk3MzIwZTJiNWQ=', '2025-06-03 19:38:34'),
(3, 'OTU1YmJiMDI2YjJiZTI1MzE4YjZjMGFmODk2MmFlMjE=', '2025-05-23 18:07:50'),
(4, 'NzcyNmM4ZmE4MmJhNDcyNDExNjllZDg3NWIwZjUzNGI=', '2025-05-24 18:38:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaccion`
--

CREATE TABLE `transaccion` (
  `id_transaccion` int(11) NOT NULL,
  `id_usuario_admin` int(11) NOT NULL,
  `id_usuario_afiliado` int(11) NOT NULL,
  `concepto` varchar(255) NOT NULL,
  `importe` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transaccion`
--

INSERT INTO `transaccion` (`id_transaccion`, `id_usuario_admin`, `id_usuario_afiliado`, `concepto`, `importe`, `fecha`) VALUES
(1, 1, 2, 'Bono Inicial', 500, '2025-05-24'),
(2, 1, 3, 'Bono Inicial', 500, '2025-05-24'),
(3, 1, 4, 'Bono Inicial', 500, '2025-05-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellidos`, `correo`, `contrasenia`, `id_tipo`) VALUES
(1, 'Camarero', 'Lamarta', 'administrador@lamarta.es', '$2y$10$SKIUapXyYhJO6nVQ95faN.Fmgwj9Yk1zrnrW5IxWkW7qB.R3nZZF.', 1),
(2, 'Elías', 'Osorio Pouseu', 'elias@lamarta.es', '$2y$10$/AtQ/i6/gY8V.TA811CaBeBlsSPN8zu7yiU9S/iHlQc9KeCTm3kyy', 2),
(3, 'DAW', 'Cotarelo', 'daw@lamarta.es', '$2y$10$/AtQ/i6/gY8V.TA811CaBeBlsSPN8zu7yiU9S/iHlQc9KeCTm3kyy', 2),
(4, 'Lucía', 'Vidal Porto', 'lucia@lamarta.es', '$2y$10$/AtQ/i6/gY8V.TA811CaBeBlsSPN8zu7yiU9S/iHlQc9KeCTm3kyy', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `afiliado`
--
ALTER TABLE `afiliado`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `permiso`
--
ALTER TABLE `permiso`
  ADD KEY `id_tipo` (`id_tipo`);

--
-- Indices de la tabla `recompensa`
--
ALTER TABLE `recompensa`
  ADD PRIMARY KEY (`id_recompensa`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD PRIMARY KEY (`id_transaccion`),
  ADD KEY `id_usuario_admin` (`id_usuario_admin`),
  ADD KEY `id_usuario_afiliado` (`id_usuario_afiliado`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `id_tipo` (`id_tipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recompensa`
--
ALTER TABLE `recompensa`
  MODIFY `id_recompensa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  MODIFY `id_transaccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `afiliado`
--
ALTER TABLE `afiliado`
  ADD CONSTRAINT `afiliado_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `permiso`
--
ALTER TABLE `permiso`
  ADD CONSTRAINT `permiso_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id_tipo`);

--
-- Filtros para la tabla `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `token_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD CONSTRAINT `transaccion_ibfk_1` FOREIGN KEY (`id_usuario_admin`) REFERENCES `administrador` (`id_usuario`),
  ADD CONSTRAINT `transaccion_ibfk_2` FOREIGN KEY (`id_usuario_afiliado`) REFERENCES `afiliado` (`id_usuario`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id_tipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
