-- Practica Clase 23 Amaranta Villegas 

-- Consulta Base

SELECT 
ProductId, ProductName, 
UnitPrice, UnitsInStock, ReorderLevel
FROM northwind.products;

-- Consulta 1

SELECT 
ProductId, ProductName, 
UnitPrice, UnitsInStock, ReorderLevel
FROM northwind.products
ORDER BY CategoryID AND ProductID;

-- Consulta 2

SELECT 
ProductId, ProductName, 
UnitPrice, UnitsInStock, ReorderLevel,
CASE
WHEN UnitsInStock < ReorderLevel THEN "Reponer Stock"
ELSE ReorderLevel
END AS ReorderLevel
FROM northwind.products
ORDER BY ProductName;

-- Consulta 3
SELECT 
ProductId, ProductName, 
UnitPrice, UnitsInStock, ReorderLevel
FROM northwind.products
WHERE
    CategoryID IN (
        SELECT CategoryID
        FROM northwind.categories
        WHERE CategoryName = 'Seafood'
    )
ORDER BY CategoryID AND ProductID;