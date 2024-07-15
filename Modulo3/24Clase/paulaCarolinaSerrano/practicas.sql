/* ---1-----*/
use northwind;
select o.ProductID, p.ProductName, o.Quantity, o.UnitPrice
from orderdetails o join products p on o.ProductID = p.ProductID
where OrderID = 10255;

/* ---2-----*/
select c.CompanyName, concat(e.FirstName," ", e.LastName) as EjecutivoDeCuentas
from orders o 
join customers c on o.CustomerID = c.CustomerID
join employees e on o.EmployeeID = e.EmployeeID;

/* ---3-----*/
select p.ProductID, p.ProductName, s.CompanyName, s.ContactName
from products p join suppliers s on p.SupplierID = s.SupplierID
where p.CategoryID = 7;