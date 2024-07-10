-- QUERY 1
SELECT * 
FROM northwind.products AS p
ORDER BY p.ProductName;

-- QUERY 2
SELECT * 
FROM northwind.products AS p
WHERE p.CategoryID = 4 
    OR p.CategoryID = 6
ORDER BY p.ProductName;

-- QUERY 3
SELECT * 
FROM northwind.products AS p
WHERE p.SupplierID = 5
    AND p.CategoryID = 4
ORDER BY p.ProductName;

-- QUERY 4
SELECT * 
FROM northwind.products AS p
WHERE p.UnitsInStock
	BETWEEN 25 AND 40
ORDER BY p.ProductName;

-- QUERY 6
SELECT * 
FROM northwind.products AS p
WHERE p.Discontinued > 400 
	OR p.Discontinued IS TRUE
ORDER BY p.ProductName;