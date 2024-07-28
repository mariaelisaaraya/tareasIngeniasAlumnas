/* 1. Ejecuta una consulta de selección para obtener los campos ProductID, 
ProductName, Quantity y UnitPrice, combinando la tabla Products y la 
tabla OrderDetails.
a. Deberás visualizar los datos de la órden número: 10255
*/

USE northwind;
SELECT Od.ProductID, P.ProductName, Od.Quantity, Od.UnitPrice 
FROM orderdetails Od
JOIN products P
ON Od.ProductID =  P.ProductID
WHERE OrderId=10255;

/* 2. Ejecuta una consulta de selección para visualizar el campo 
CustomerName, de la tabla Customers, y los campos FirstName y 
LastName de la tabla Employees.
a) Concatena FistName y LastName como un único campo llamado 
EjecutivoDeCuentas
*/

SELECT C.CompanyName, 
concat(E.FirstName,' ', E.LastName) AS EjecutivoDeCuentas
FROM orders O
JOIN customers C
ON O.CustomerID =  C.CustomerID
JOIN employees E
ON O.employeeID =  E.employeeID;

/* 3. Ejecuta una consulta de selección para visualizar los datos ProductID, 
ProductName de la tabla Products y los campos CompanyName y 
ContactName de la tabla Suppliers.
a) Visualizar la información solo de los productos correspondientes a 
la categoría 7
*/

SELECT P.ProductID, P.ProductName, S.CompanyName, S.ContactName
FROM products P
JOIN suppliers S
ON P.SupplierID =  S.SupplierID
where P.CategoryID = 7;