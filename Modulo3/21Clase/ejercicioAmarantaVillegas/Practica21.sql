-- Tarea 21 Amaranta Villegas 

-- Consulta 1
SELECT * 
FROM northwind.products
ORDER BY ProductName;

-- Consulta 2
SELECT * 
FROM northwind.products
WHERE CategoryID IN (4,6)
ORDER BY ProductName;

-- Consulta 3
SELECT * 
FROM northwind.products
WHERE SupplierID = 5 AND CategoryID = 4;

-- Consulta 4
SELECT * 
FROM northwind.products
WHERE UnitsInStock BETWEEN 25 AND 40;

-- Consulta 6
SELECT * 
FROM northwind.products
WHERE UnitsInStock >= 400 OR Discontinued
ORDER BY ProductName;