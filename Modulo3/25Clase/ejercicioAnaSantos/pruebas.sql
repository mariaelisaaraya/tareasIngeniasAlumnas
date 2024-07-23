--QUERY 1
SELECT
    p.ProductID,
    p.UnitPrice,
    (SELECT COUNT(*)
     FROM northwind.products) AS TotalProductos,
    (SELECT COUNT(*)
     FROM northwind.products AS p1
     WHERE p1.UnitPrice > 30) AS TotalProductosMayoresA30
FROM northwind.products AS p;

--QUERY 2
SELECT
    p.CategoryID,
    COUNT(p.ProductID) AS TotalProductos
FROM northwind.products AS p
GROUP BY p.CategoryID;

--QUERY 3
SELECT
    p.CategoryID,
    COUNT(p.ProductID) AS TotalProductos
FROM northwind.products AS p
GROUP BY p.CategoryID
	HAVING COUNT(p.ProductID) > 7;