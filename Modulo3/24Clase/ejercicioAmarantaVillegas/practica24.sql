-- Practica 24 Amaranta Villegas 

-- Consulta 1

SELECT 
p.ProductName, o.Quantity, p.UnitPrice
FROM northwind.products AS p JOIN northwind.orderdetails AS o
ON p.ProductID = o.ProductID
WHERE o.OrderID = 10255;

-- Consulta 2

SELECT o.OrderID, c.ContactName, CONCAT(e.FirstName,' ',e.LastName) AS 'EjecutivoDeCuentas'
FROM northwind.customers AS c
JOIN northwind.orders AS o ON o.CustomerID = c.CustomerID
JOIN northwind.employees AS e ON e.EmployeeID = o.EmployeeID;

-- Consulta 3
SELECT 
p.ProductId, p.ProductName, s.CompanyName, s.ContactName
FROM northwind.products AS p JOIN northwind.suppliers AS s
ON p.SupplierID = s.SupplierID
WHERE p.CategoryID = 7;
