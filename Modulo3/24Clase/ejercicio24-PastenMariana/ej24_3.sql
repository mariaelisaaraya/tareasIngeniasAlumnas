/* 3. Ejecuta una consulta de selección para visualizar los datos ProductID, 
ProductName de la tabla Products y los campos CompanyName y 
ContactName de la tabla Suppliers.
a) Visualizar la información solo de los productos correspondientes a 
la categoría 7
*/
USE northwind;
SELECT P.ProductID, P.ProductName, S.CompanyName, S.ContactName
FROM products P
JOIN suppliers S
ON P.SupplierID =  S.SupplierID
where P.CategoryID = 7;

