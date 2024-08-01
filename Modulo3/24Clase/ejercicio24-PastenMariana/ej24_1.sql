/* 1. Ejecuta una consulta de selección para obtener los campos ProductID, 
ProductName, Quantity y UnitPrice, combinando la tabla Products y la 
tabla OrderDetails.
a. Deberás visualizar los datos de la órden número: 10255
*/

USE northwind;
SELECT Od.ProductID, P.ProductName, Od.Quantity, Od.UnitPrice 
FROM orderdetails Od
JOIN products P
ON Od.ProductID =  P.ProductID
WHERE OrderId=10255;