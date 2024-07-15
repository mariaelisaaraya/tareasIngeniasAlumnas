Necesitamos simplificar la visualización de datos de la tabla Products, Customers, Categories y Employees, a través de diferentes consultas de 
selección:
Realiza para ello, las siguientes consignas:
1. Ejecuta una consulta de selección para obtener los campos ProductID, ProductName, Quantity y UnitPrice, combinando la tabla Products y la tabla OrderDetails.
a. Deberás visualizar los datos de la órden número: 10255

SELECT 
    p.ProductID,
    p.ProductName,
    od.Quantity,
    od.UnitPrice
FROM 
    northwind.products p
JOIN 
    northwind.orderDetails od ON p.ProductID = od.ProductID
WHERE 
    od.OrderID = 10255;


2. Ejecuta una consulta de selección para visualizar el campo CustomerName, de la tabla Customers, y los campos FirstName y LastName de la tabla Employees.
a) Concatena FistName y LastName como un único campo llamado EjecutivoDeCuentas

No me funciona esta consulta y no la pude resolver de otra forma porque no encontre el campo CustomerName ni en la tabla Customers ni Employees ni en otra tabla de la BD northwind
SELECT 
    c.CustomerName,
    CONCAT(e.FirstName, ' ', e.LastName) AS EjecutivoDeCuentas
FROM 
    northwind.customers c
JOIN 
    northwind.employees e ON c.EmployeeID = e.EmployeeID;

3. Ejecuta una consulta de selección para visualizar los datos ProductID, ProductName de la tabla Products y los campos CompanyName y ContactName de la tabla Suppliers.
a) Visualizar la información solo de los productos correspondientes a la categoría 7

SELECT 
    p.ProductID,
    p.ProductName,
    s.CompanyName,
    s.ContactName
FROM 
    northwind.products p
JOIN 
    northwind.suppliers s ON p.SupplierID = s.SupplierID
WHERE 
    p.CategoryID = 7;
