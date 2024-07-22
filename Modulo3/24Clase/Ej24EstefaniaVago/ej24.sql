USE northwind;

/*Necesitamos simplificar la visualización de datos de la tabla Products,
Customers, Categories y Employees, a través de diferentes consultas de
selección:
Realiza para ello, las siguientes consignas:
1. Ejecuta una consulta de selección para obtener los campos ProductID,
ProductName, Quantity y UnitPrice, combinando la tabla Products y la
tabla OrderDetails.
a. Deberás visualizar los datos de la órden número: 10255*/

SELECT  P.ProductID, P.ProductName, D.Quantity, D.UnitPrice
FROM Products P
JOIN orderdetails D
ON P.ProductID=D.ProductID
WHERE D.OrderID=10255;

/*2. Ejecuta una consulta de selección para visualizar el campo
CustomerName, de la tabla Customers, y los campos FirstName y
LastName de la tabla Employees.
a) Concatena FistName y LastName como un único campo llamado
EjecutivoDeCuentas*/

SELECT o.OrderID, c.ContactName, CONCAT(e.FirstName,' ',e.LastName) AS 'EjecutivoDeCuentas'
FROM customers c
JOIN orders o 
ON o.CustomerID = c.CustomerID
JOIN employees e ON e.EmployeeID = o.EmployeeID;

/*3. Ejecuta una consulta de selección para visualizar los datos ProductID,
ProductName de la tabla Products y los campos CompanyName y
ContactName de la tabla Suppliers.
a) Visualizar la información solo de los productos correspondientes a la
categoría 7*/

SELECT  P.ProductID, P.ProductName, S.CompanyName,S.ContactName
FROM products P
JOIN suppliers S
ON S.supplierId=P.SupplierId
WHERE P.categoryId=7;
