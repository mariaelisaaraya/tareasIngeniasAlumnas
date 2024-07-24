CREATE SCHEMA enterprise;

CREATE TABLE enterprise.equipos (
    idEquipo INT PRIMARY KEY AUTO_INCREMENT,
    nombreEquipo VARCHAR(50) NOT NULL,
    especialidad VARCHAR(50) NOT NULL,
    idCliente INT NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES enterprise.clientes(idCliente)
);

CREATE TABLE enterprise.clientes (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nombreEmpresa VARCHAR(50) NOT NULL,
    rubroEmpresa VARCHAR(50) NOT NULL
);

CREATE TABLE enterprise.empleados (
    idEmpleado INT PRIMARY KEY AUTO_INCREMENT,
    nombreEmpleado VARCHAR(50) NOT NULL,
    puestoEmpleado VARCHAR(50) NOT NULL,
    idEquipo INT NOT NULL,
    FOREIGN KEY (idEquipo) REFERENCES enterprise.equipos(idEquipo)
);
