--DESAFIO 20

--Ejercicio 1
use northwind;
select * FROM customers

--Ejercicio 2
use northwind;
select CustomerID, CompanyName, ContactName, ContactTitle, City, Phone FROM customers
order by CompanyName;

--Ejercicio 3
use northwind;
select CustomerID, CompanyName, ContactName, ContactTitle FROM customers
order by ContactName desc;

--Ejercicio 4
use northwind;
select * FROM customers
order by ContactName
limit 10, 10;

--Ejercicio 5
use northwind;
select * FROM customers
order by ContactName
limit 10, 10;