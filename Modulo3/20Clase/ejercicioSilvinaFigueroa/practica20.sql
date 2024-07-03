1. Ejecuta una consulta de selección sobre todos los campos de la tabla Customers
select * from Northwind.Customers;

2. Ejecuta una consulta de selección de los siguientes campos de la tabla Customers:
-CustomerID, CompanyName, ContactName, ContactTitle, City, Phone
-Ordena esta consulta por el campo CompanyName
select CustomerID, CompanyName, ContactName, ContactTitle, City, Phone from Northwind.Customers order by CompanyName;

3. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Customers:
-CustomerID, CompanyName, ContactName, ContactTitle
-Ordena esta consulta por el campo ContactName de forma descendente

select CustomerID, CompanyName, ContactName, ContactTitle from Northwind.Customers order by CompanyName desc;

4. Ejecuta una consulta de selección sobre todos los campos de la tabla Customers:
-Ordena esta consulta por el campo CustomerID
-Limita el total de registros a visualizar a 20

select * from Northwind.Customers order by CustomerID limit 20;

5. Ejecuta una consulta de selección sobre todos los campos de la tabla Customers:
-Ordena esta consulta por el campo ContactName
-Limita el total de registros a visualizar: muestra solo 10 registros a partir del cliente número 10 de esta consulta resultante

select * from Northwind.Customers order by ContactName limit 9, 10;
