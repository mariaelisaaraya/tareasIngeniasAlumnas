SELECT * FROM northwind.products ORDER BY ProductName;

SELECT * FROM northwind.products WHERE CategoryID IN (4,6) ORDER BY ProductName;

SELECT * FROM northwind.products WHERE SupplierID = 5 AND CategoryID = 4;

SELECT * FROM northwind.products WHERE UnitsInStock BETWEEN 25 AND 40;

SELECT * FROM northwind.products WHERE UnitsInStock >= 400 OR Discontinued ORDER BY ProductName;