Necesitamos simplificar la visualización de datos de la tabla Products, presentando en una consulta de selección, los siguientes campos:
● ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel
Sobre esta consulta de selección base, realiza las siguientes consignas:

1. Ejecuta una consulta de selección de todos estos datos, ordenando los mismos por: USO =
a. CategoryID, ProductName

SELECT  ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel FROM northwind.products ORDER BY CategoryID, ProductName;

CategoryID no se muestra el la consulta.Deberia agregarlo al SELECT PARA VER SI LO ORDENA POR ESE CAMPO??


2. En una nueva consulta de selección con la base inicial: USO CASE WHEN
a. Muestra una leyenda en el campo ReorderLevel, que diga ‘Reponer Stock’, en 
aquellos productos donde el campo UnitsInStock esté por debajo de ReorderLevel

b. Ordena los productos por ProductName

SELECT  ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel, 
CASE 
  WHEN UnitsInStock < ReorderLevel  THEN 'Reponer Stock'
  ELSE ReorderLevel
 END
 AS ReordenarNivel
FROM northwind.products
ORDER BY ProductName;


3. Ejecuta una consulta de selección igual al Punto 1, agregando la siguiente condición USO SUBQERY
a. CategoryID = (el id de la categoría llamada ‘Seafood’)
i. utiliza una subconsulta SQL en esta condición


SELECT  ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel FROM northwind.products 
WHERE CategoryID= (SELECT CategoryID FROM northwind.categories WHERE CategoryName ="Seafood")
ORDER BY CategoryID, ProductName;

SELECT  ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel, CategoryID FROM northwind.products 
WHERE CategoryID = (SELECT CategoryID FROM northwind.categories WHERE CategoryName ="Seafood")
ORDER BY CategoryID, ProductName;