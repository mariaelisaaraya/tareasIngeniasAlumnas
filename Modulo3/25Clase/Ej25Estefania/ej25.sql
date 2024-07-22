/*Trabajemos sobre la tabla Products, aplicando algunas funciones de agregación.
Realiza para ello, las siguientes consignas:
1. Ejecuta una consulta de selección para obtener los campos ProductID, UnitPrice
a. cuenta el total de Productos con el alias TotalProductos
b. contabiliza solo aquellos que tengan un precio superior a 30
*/
USE northwind;

SELECT count(productid) AS 'TotalProductos'
FROM Products;

SELECT ProductID, UnitPrice, count(productid) AS 'TotalProductos'
FROM Products
group by ProductID, UnitPrice
HAVING UnitPrice>30;

/*
2. Ejecuta una consulta de selección para visualizar el campo ProductID, y CategoryID
a. cuenta los productos de la tabla y muestra el resultado con el alias TotalProductos
b. agrupa por CategoryID
*/

SELECT CategoryID, count(ProductID) AS 'TotalProductos'
FROM Products
GROUP BY CategoryID;

/*
3. Replica la consulta anterior (punto 2), y agrega la siguiente condición:
a. muestra solo los resultados de aquellas categorías que tengan más de 7 productos
b. TIP: (deberás utilizar HAVING en este último punto)
*/

SELECT CategoryID, count(ProductID) AS 'TotalProductos'
FROM Products
GROUP BY CategoryID
HAVING TotalProductos>7;
