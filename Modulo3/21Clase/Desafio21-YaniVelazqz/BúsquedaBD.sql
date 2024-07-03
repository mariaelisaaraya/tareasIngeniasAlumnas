--DESAFIO 21

--Ejercicio 1
use northwind;
select * from products
order by ProductName

--Ejercicio 2
use northwind;
select * from products
where CategoryID IN (4, 6)
order by ProductName

--Ejercicio 3
use northwind;
select * from products
where SupplierID = 5 AND CategoryID = 4
order by ProductName;

--Ejercicio 4
use northwind;
select * from products
where UnitsInStock
between 25 and 40;

--Ejercicio 5
SELECT * FROM northwind.products
where Discontinued = 1

--Ejercicio 6
SELECT * FROM northwind.products
where UnitsInStock >= 400 OR Discontinued = true
order by ProductName