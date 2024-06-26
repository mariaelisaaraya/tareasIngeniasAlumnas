CREATE TABLE `personalcontact` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Fullname` varchar(70) NOT NULL,
  `Cellphone` varchar(22) NOT NULL DEFAULT '0',
  `CellphoneType` varchar(15) DEFAULT 'N/A',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci