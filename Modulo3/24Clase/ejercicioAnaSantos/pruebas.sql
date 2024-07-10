-- QUERY 1
SELECT
    p.ProductID,
    p.ProductName,
    o.Quantity,
    p.UnitPrice
FROM northwind.products AS p
JOIN northwind.orderdetails AS o ON p.ProductID = o.ProductID
WHERE o.OrderID = 10255;

-- QUERY 2
SELECT
	o.OrderID,
    c.ContactName,
    CONCAT(e.FirstName,' ',e.LastName) AS 'EjecutivoDeCuentas'
FROM northwind.customers c
JOIN northwind.orders o ON o.CustomerID = c.CustomerID
JOIN northwind.employees e ON e.EmployeeID = o.EmployeeID;

-- QUERY 3
SELECT
    p.ProductID,
    p.ProductName,
    s.CompanyName,
    s.ContactName
FROM northwind.products AS p
JOIN northwind.suppliers s ON p.SupplierID = s.SupplierID
WHERE p.CategoryID = 7;