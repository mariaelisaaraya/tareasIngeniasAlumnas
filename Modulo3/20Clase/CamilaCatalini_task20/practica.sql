
SELECT * FROM Customers;

SELECT CustomerID, CompanyName, ContactName, ContactTitle, City, Phone FROM Customers ORDER BY CompanyName;

SELECT CustomerID, CompanyName, ContactName, ContactTitle FROM Customers ORDER BY ContactName DESC;

SELECT * FROM Customers ORDER BY CustomerID LIMIT 20;

SELECT * FROM Customers ORDER BY ContactName LIMIT 9, 10;