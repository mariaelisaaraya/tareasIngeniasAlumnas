PRIMERA PARTE:
1. Ejecuta una consulta de selección sobre todos los campos de la tabla Customers donde la ciudad sea igual a ‘Buenos Aires’

select * from Northwind.Customers where city= "Buenos Aires";

2. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Customers:customerID, CompanyName, ContactName, ContactTitle 
-donde el campo City sea igual a ‘London’

select ustomerID, CompanyName, ContactName, ContactTitle  from Northwind.Customers where City= "London";

3. Ejecuta una consulta de selección sobre todos los campos de la tabla Employees:
-donde el campo Title sea igual a ‘Sales Representative’
-Order por el campo City de forma descendente

select * from Northwind.Employees where Title = ‘Sales Representative’ order by City desc;

4. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Employees:
-LastName, FirstName, Title, City
-donde el campo Country sea igual a ‘USA’
-Ordena esta consulta por el campo LastName

select LastName, FirstName, Title, City from Northwind.Employees where Country =‘USA’ order by LastName;

5. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Suppliers:
-SupplierID, CompanyName, ContactName
-donde el campo ContactTitle sea igual a ‘Accounting Manager’

select SupplierID, CompanyName, ContactName from Suppliers where ContactTitle ="Accounting Manager";


SEGUNDA PARTE

1. Ejecuta una consulta de selección sobre todos los campos de la tabla Products
-ordena la consulta por el campo productName

select * from Northwind.Products order by productName;

2. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
-el campo CategoryID sea igual a 4 y 6
-mantén el ordenamiento indicado anteriormente

select * from Northwind.Products where  CategoryID  where CategoryID=4 and CategoryID=6 order by productName;
o 
select * from Northwind.Products where  CategoryID  where CategoryID IN (4, 6) order by productName;

3. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
-el campo SupplierID sea igual a 5 y el campo CategoryID sea igual a 4

select * from Northwind.Products where SupplierID =5 and CategoryID=4;

4. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
-el campo UnitsInStock tenga valores entre 25 y 40 unidades

select * from Northwind.Products where UnitsInStock BETWEEN 25 AND 40 order by productName;

5. Abre la tabla Products y modifica manualmente el campo discontinued = 1, en al menos 5 
registros al azar. Recuerda aplicar / guardar los cambios efectuados


6. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
-el campo UnitsInStock sea mayor a 400 o el campo discontinued sea verdadero
-ordena la consulta por el campo productName

select * from Northwind.Products where UnitsInStock > 400 OR discontinued= True order by productName;
o 
select * from Northwind.Products where UnitsInStock > 400 OR discontinued= 1 order by productName;