/*Consultas Amaranta Villegas
Consulta1*/
SELECT *
FROM northwind.customers;


/*Consulta2*/
SELECT CustomerID, CompanyName, ContactName, ContactTitle, City, Phone 
FROM northwind.customers
ORDER BY CompanyName;

/*Consulta3*/

SELECT *
FROM northwind.customers
ORDER BY ContactName DESC;

/*Consulta4*/
SELECT *
FROM northwind.customers
ORDER BY CustomerID
LIMIT 20;

/*Consulta5*/
SELECT *
FROM northwind.customers
ORDER BY ContactName
LIMIT 9, 10;
