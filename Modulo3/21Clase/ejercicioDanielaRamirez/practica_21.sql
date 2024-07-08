-- Daniela Ramirez
-- Query 1
Select * FROM northwind.products ORDER BY productName;

-- Query 2
Select * FROM northwind.products WHERE CategoryID in (4,6) ORDER BY productName;

-- Query 3
Select * FROM northwind.products WHERE SupplierID = 5 and CategoryID = 4 ORDER BY productName;

-- Query 4
Select * FROM northwind.products WHERE UnitsInStock between 25 and 40 ORDER BY productName;

-- Query 6
Select * FROM northwind.products WHERE UnitsInStock >= 400 or Discontinued ORDER BY productName;