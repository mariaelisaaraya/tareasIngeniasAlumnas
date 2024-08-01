/* 1. Ejecuta una consulta de selección para obtener los campos ProductID, UnitPrice
a. cuenta el total de Productos con el alias TotalProductos
b. contabiliza solo aquellos que tengan un precio superior a 30
*/
USE northwind;
SELECT P.ProductID, P.UnitPrice, count(*) AS TotalProductos
FROM products P
group by P.ProductID, P.UnitPrice
having P.UnitPrice > 30

/* 2- Ejecuta una consulta de selección para visualizar el campo ProductID, y CategoryID
b. cuenta los productos de la tabla y muestra el resultado con el alias TotalProductos
c. agrupa por CategoryID
*/
USE northwind;
SELECT count(*) AS TotalProductos, CategoryID
FROM products 
group by CategoryID;

/* 3- Replica la consulta anterior (punto 2), y agrega la siguiente condición:
b. muestra solo los resultados de aquellas categorías que tengan más de 7 productos
c. TIP: (deberás utilizar HAVING en este último punto
*/

USE northwind;
SELECT count(*) AS TotalProductos, CategoryID
FROM products 
group by CategoryID
having TotalProductos > 7;