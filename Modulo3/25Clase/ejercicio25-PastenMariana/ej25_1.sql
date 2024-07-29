/* 1. Ejecuta una consulta de selección para obtener los campos ProductID, UnitPrice
a. cuenta el total de Productos con el alias TotalProductos
b. contabiliza solo aquellos que tengan un precio superior a 30
*/
USE northwind;
SELECT P.ProductID, P.UnitPrice, count(*) AS TotalProductos
FROM products P
group by P.ProductID, P.UnitPrice
having P.UnitPrice > 30
