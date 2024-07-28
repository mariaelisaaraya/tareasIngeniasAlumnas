/* 3- Replica la consulta anterior (punto 2), y agrega la siguiente condición:
b. muestra solo los resultados de aquellas categorías que tengan más de 7 productos
c. TIP: (deberás utilizar HAVING en este último punto
*/

USE northwind;
SELECT count(*) AS TotalProductos, CategoryID
FROM products 
group by CategoryID
having TotalProductos > 7;