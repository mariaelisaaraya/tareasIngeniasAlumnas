USE northwind;

/*Necesitamos simplificar la visualización de datos de la tabla Products, presentando en una
consulta de selección, los siguientes campos:
● ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel*/

SELECT ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel
FROM products;

/*Sobre esta consulta de selección base, realiza las siguientes consignas:
1. Ejecuta una consulta de selección de todos estos datos, ordenando los mismos por:
a. CategoryID, ProductName*/
SELECT ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel
FROM products
ORDER BY CategoryID, ProductName;

/*
2. En una nueva consulta de selección con la base inicial:
a. Muestra una leyenda en el campo ReorderLevel, que diga ‘Reponer Stock’, en
aquellos productos donde el campo UnitsInStock esté por debajo de ReorderLevel
b. Ordena los productos por ProductName
*/
SELECT ProductID, ProductName, UnitPrice, UnitsInStock, 
	CASE 
		WHEN ReorderLevel<UnitsInStock THEN 'Reponer stock'
		ELSE ReorderLevel
	END 
	AS 'ReorderLevel'
FROM Products
ORDER BY ProductName;

/*
3. Ejecuta una consulta de selección igual al Punto 1, agregando la siguiente condición
a. CategoryID = (el id de la categoría llamada ‘Seafood’)
i. utiliza una subconsulta SQL en esta condición*/

SELECT ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel,CategoryID
FROM Products 
WHERE CategoryID = (SELECT CategoryID FROM Categories WHERE CategoryName='Seafood')
ORDER BY CategoryID, ProductName;