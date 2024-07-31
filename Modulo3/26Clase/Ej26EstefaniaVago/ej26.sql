DROP DATABASE IF EXISTS organizacionempresa;
CREATE DATABASE organizacionempresa;
USE organizacionempresa;

DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes(
idCliente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombreCliente  VARCHAR(150) NOT NULL,
rubroEmpresa VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS equipos;

CREATE TABLE equipos(
idEquipo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombreEquipo  VARCHAR(150) NOT NULL,
especialidad VARCHAR(100) NOT NULL,
idCliente INT NOT NULL,
FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
);

DROP TABLE IF EXISTS empleados;

CREATE TABLE empleados(
idEmpleado INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombreEmpleado  VARCHAR(150) NOT NULL,
puestoEmpresa VARCHAR(100) NOT NULL,
idEquipo INT NOT NULL,
FOREIGN KEY (idEquipo) REFERENCES equipos(idEquipo)
);

