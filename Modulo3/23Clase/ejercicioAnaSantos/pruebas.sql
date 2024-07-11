-- QUERY BASE
SELECT 
	p.ProductID,
    p.ProductName,
    p.UnitPrice,
    p.UnitsInStock,
    p.ReorderLevel
FROM northwind.products AS p;

-- QUERY 1
SELECT 
	p.ProductID,
    p.ProductName,
    p.UnitPrice,
    p.UnitsInStock,
    p.ReorderLevel
FROM northwind.products AS p
ORDER BY p.CategoryID AND ProductName;

-- QUERY 2
SELECT 
	p.ProductID,
    p.ProductName,
    p.UnitPrice,
    p.UnitsInStock,
	CASE
		WHEN p.ReorderLevel > p.UnitsInStock THEN "Reponer Stock"
		ELSE p.ReorderLevel
	END AS ReorderLevel
FROM northwind.products AS p
ORDER BY ProductName;

-- QUERY 3
SELECT
    p.ProductID,
    p.ProductName,
    p.UnitPrice,
    p.UnitsInStock,
    p.ReorderLevel
FROM northwind.products AS p
WHERE
    p.CategoryID IN (
        SELECT CategoryID
        FROM northwind.categories
        WHERE CategoryName = 'Seafood'
    )
ORDER BY p.CategoryID AND p.ProductName;