-- Daniela Ramírez
-- Query 1
Select * FROM northwind.customers;

-- Query 2
Select CustomerID, CompanyName, ContactName, ContactTitle, City, Phone FROM northwind.customers ORDER BY CompanyName;

-- Query 3
Select CustomerID, CompanyName, ContactName, ContactTitle FROM northwind.customers ORDER BY CompanyName DESC;

-- Query 4
Select * FROM northwind.customers ORDER BY CustomerID LIMIT 20;

-- Query 5
Select * FROM northwind.customers ORDER BY ContactName LIMIT 10, 10;