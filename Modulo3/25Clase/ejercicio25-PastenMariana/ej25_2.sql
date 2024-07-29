/* 2- Ejecuta una consulta de selección para visualizar el campo ProductID, y CategoryID
b. cuenta los productos de la tabla y muestra el resultado con el alias TotalProductos
c. agrupa por CategoryID
*/
USE northwind;
SELECT count(*) AS TotalProductos, CategoryID
FROM products 
group by CategoryID;