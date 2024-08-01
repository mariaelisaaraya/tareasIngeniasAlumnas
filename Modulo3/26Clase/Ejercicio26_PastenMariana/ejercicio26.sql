CREATE SCHEMA `basededatosej26`
 DEFAULT CHARACTER SET utf8;
 
 use basededatosej26;
 
 CREATE TABLE clientes(
 idCliente INT NOT NULL auto_increment primary key,
 nombreEmpresa varchar(30) NOT NULL,
 rubroEmpresa varchar(20) NOT NULL
 );
 
  CREATE TABLE equipos(
 idEquipo INT NOT NULL auto_increment primary key,
 nombreEquipo varchar(30) NOT NULL,
 especialidad varchar(20) NOT NULL,
 idCliente INT, foreign key (idCliente) REFERENCES clientes(idCliente)
 );
 
 CREATE TABLE empleados(
 idEmpleado INT NOT NULL auto_increment primary key,
 nombreEmpleado varchar(30) NOT NULL,
 puestoEmpresa varchar(20) NOT NULL,
 idEquipo INT, foreign key (idEquipo) REFERENCES equipos(idEquipo)
 );
