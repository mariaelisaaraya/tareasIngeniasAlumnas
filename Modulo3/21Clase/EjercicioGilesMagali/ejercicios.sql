1. Ejecuta una consulta de selección sobre todos los campos de la tabla Customers
○ donde la ciudad sea igual a ‘Buenos Aires’

select ContactName from customers where City="Buenos Aires";
select * FROM northwind.customers WHERE City= 'Buenos Aires';

//////////////////////////////////////////////////////////////////////////
2. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Customers:
○ customerID, CompanyName, ContactName, ContactTitle
○ donde el campo City sea igual a ‘London’

select customerID, CompanyName, ContactName, ContactTitle
FROM northwind.customers
 WHERE City= 'London';
//////////////////////////////////////////////////////////////////////////

3. Ejecuta una consulta de selección sobre todos los campos de la tabla Employees:
○ donde el campo Title sea igual a ‘Sales Representative’
○ Order por el campo City de forma descendente

select * FROM Employees
 WHERE title= 'Sales Representative'
 order by city desc;

//////////////////////////////////////////////////////////////////////////
4. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Employees:
○ LastName, FirstName, Title, City
○ donde el campo Country sea igual a ‘USA’
○ Ordena esta consulta por el campo LastName

 select LastName, FirstName, Title, City
 from Employees
 where Country = 'USA'
 order by LastName

//////////////////////////////////////////////////////////////////////////
5. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Suppliers:
○ SupplierID, CompanyName, ContactName
○ donde el campo ContactTitle sea igual a ‘Accounting Manager’

 select SupplierID, CompanyName, ContactName
 from northwind.suppliers
 where ContactTitle = 'Accounting Manager';

*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////// PRÁCTICA N°2 /////////////////

1. Ejecuta una consulta de selección sobre todos los campos de la tabla Products
○ ordena la consulta por el campo productName

use northwind;
select * FROM Products
 order by productName;
//////////////////////////////////////////////////////////////////////////

2. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo CategoryID sea igual a 4 y 6
○ mantén el ordenamiento indicado anteriormente

select * FROM Products
where CategoryID = 4 or CategoryID= 6
 order by productName;

//////////////////////////////////////////////////////////////////////////
3. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo SupplierID sea igual a 5 y el campo CategoryID sea igual a 4

select * FROM Products
where SupplierID = 5 and CategoryID= 4
//////////////////////////////////////////////////////////////////////////

4. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo UnitsInStock tenga valores entre 25 y 40 unidades
select * FROM Products
where UnitsInStock Between 25 and 40
order by productName;

//////////////////////////////////////////////////////////////////////////
5. Abre la tabla Products y modifica manualmente el campo discontinued = 1, en al menos 5
registros al azar. Recuerda aplicar / guardar los cambios efectuados

//////////////////////////////////////////////////////////////////////////
6. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo UnitsInStock sea mayor a 400 o el campo discontinued sea verdadero
○ ordena la consulta por el campo 

SELECT * FROM northwind.products
WHERE UnitsInStock < 400 or Discontinued= true
order by productName