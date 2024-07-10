Use northwind;

/*Ejercicio 1
Ejecuta una consulta de selección sobre todos los campos de la tabla Customers*/

SELECT * FROM customers;

/*Ejercicio 2
Ejecuta una consulta de selección de los siguientes campos de la tabla Customers:
○ CustomerID, CompanyName, ContactName, ContactTitle, City, Phone
○ Ordena esta consulta por el campo CompanyName*/

SELECT CustomerID, CompanyName, ContactName, ContactTitle, City, Phone
FROM customers
ORDER BY CompanyName;

/*Ejercicio 3
Ejecuta una consulta de selección sobre los siguientes campos de la tabla Customers:
○ CustomerID, CompanyName, ContactName, ContactTitle
○ Ordena esta consulta por el campo ContactName de forma descendente*/

SELECT CustomerID, CompanyName, ContactName, ContactTitle
FROM customers
ORDER BY ContactName desc;

/*Ejercicio 4
Ejecuta una consulta de selección sobre todos los campos de la tabla Customers:
○ Ordena esta consulta por el campo CustomerID
○ Limita el total de registros a visualizar a 20*/

SELECT *
FROM customers
ORDER BY customerId
LIMIT 20;

/*Ejericio 5
Ejecuta una consulta de selección sobre todos los campos de la tabla Customers:
○ Ordena esta consulta por el campo ContactName
○ Limita el total de registros a visualizar: muestra solo 10 registros a partir del cliente
número 10 de esta consulta resultante*/

SELECT * 
FROM customers
ORDER BY ContactName
LIMIT 10,10;