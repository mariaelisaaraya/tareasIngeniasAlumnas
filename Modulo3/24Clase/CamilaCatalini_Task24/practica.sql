USE northwind;

/*1. Ejecuta una consulta de selección para obtener los campos ProductID,
ProductName, Quantity y UnitPrice, combinando la tabla Products y la
tabla OrderDetails.
a. Deberás visualizar los datos de la órden número: 10255*/
SELECT od.ProductID, p.ProductName, od.Quantity, od.UnitPrice
FROM Products p
JOIN OrderDetails od 
ON p.ProductID = od.ProductID
WHERE od.OrderID = 10255;

/*2. Ejecuta una consulta de selección para visualizar el campo
CustomerName, de la tabla Customers, y los campos FirstName y
LastName de la tabla Employees.
a) Concatena FistName y LastName como un único campo llamado
EjecutivoDeCuentas*/
SELECT c.CompanyName, 
	   concat(e.FirstName, ' ', e.LastName) AS EjecutivoDeCuentas
from orders O
join Customers C on O.CustomerID = C.CustomerID
join Employees E on E.EmployeeID = O.EmployeeID
where OrderID = 10255;

/*3. Ejecuta una consulta de selección para visualizar los datos ProductID,
ProductName de la tabla Products y los campos CompanyName y
ContactName de la tabla Suppliers.
a) Visualizar la información solo de los productos correspondientes a la
categoría 7*/
SELECT ProductID, 
	   ProductName,
       CompanyName,
       ContactName
FROM Northwind.products P
INNER JOIN Northwind.Suppliers S
ON P.SupplierID = S.SupplierID
WHERE P.CategoryID = 7;