-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2019 a las 15:04:55
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pisofranko`
--
CREATE DATABASE IF NOT EXISTS `pisofranko` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `pisofranko`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instrumentales`
--

DROP TABLE IF EXISTS `instrumentales`;
CREATE TABLE `instrumentales` (
  `Id_Instrumental` int(11) NOT NULL,
  `Nombre` varchar(256) NOT NULL,
  `Productor` varchar(256) NOT NULL,
  `Genero` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `instrumentales`
--

INSERT INTO `instrumentales` (`Id_Instrumental`, `Nombre`, `Productor`, `Genero`) VALUES
(1, 'Freedom', 'VintagemanProduckja', 'Rap'),
(2, 'Drugs', 'Tower Beatz', 'Trap');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

DROP TABLE IF EXISTS `temas`;
CREATE TABLE `temas` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(256) NOT NULL,
  `Instrumental` varchar(256) NOT NULL,
  `ID_Instrumental` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`ID`, `Nombre`, `Instrumental`, `ID_Instrumental`) VALUES
(1, 'DEBCA Vol.III', 'Drugs', 2),
(2, 'Nostalgico', 'Freedom', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `instrumentales`
--
ALTER TABLE `instrumentales`
  ADD PRIMARY KEY (`Id_Instrumental`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
