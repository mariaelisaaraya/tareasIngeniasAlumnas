-- QUERY 1 
SELECT * FROM northwind.customers;

-- Query 2
SELECT CustomerID, CompanyName, ContactName, ContactTitle, City, Phone 
FROM northwind.customers
ORDER BY CompanyName;

-- Query 3
SELECT * 
FROM northwind.customers
ORDER BY CustomerID;

-- Query 4
SELECT * 
FROM northwind.customers
ORDER BY CustomerID
LIMIT 20;

-- Query 5
SELECT * 
FROM northwind.customers
ORDER BY ContactName
LIMIT 9, 10;
