/* 2. Ejecuta una consulta de selección para visualizar el campo 
CustomerName, de la tabla Customers, y los campos FirstName y 
LastName de la tabla Employees.
a) Concatena FistName y LastName como un único campo llamado 
EjecutivoDeCuentas
*/
USE northwind;
SELECT C.CompanyName, 
concat(E.FirstName,' ', E.LastName) AS EjecutivoDeCuentas
FROM orders O
JOIN customers C
ON O.CustomerID =  C.CustomerID
JOIN employees E
ON O.employeeID =  E.employeeID;