-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 13. 16:25
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `autotrader`
--
CREATE DATABASE IF NOT EXISTS `autotrader` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `autotrader`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cars`
--

CREATE TABLE `cars` (
  `Id` char(36) NOT NULL,
  `Brand` varchar(30) DEFAULT NULL,
  `Type` varchar(30) DEFAULT NULL,
  `Color` varchar(10) DEFAULT NULL,
  `MYear` date DEFAULT NULL,
  `CreatedTime` datetime DEFAULT current_timestamp(),
  `UpdatedTime` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `cars`
--

INSERT INTO `cars` (`Id`, `Brand`, `Type`, `Color`, `MYear`, `CreatedTime`, `UpdatedTime`) VALUES
('36c2f71d-8367-4127-b39b-9659d38e3153', 'Audi', 'A4', 'red', '2025-02-11', '2025-02-13 12:31:10', '2025-02-13 12:31:10');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
