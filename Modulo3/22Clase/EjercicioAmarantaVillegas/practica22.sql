-- Tarea 22 Amaranta Villegas 

-- Consulta Select base
SELECT EmployeeID, TitleOfCourtesy, LastName, 
FirstName, BirthDate, HireDate FROM northwind.employees;

-- Consulta 1
SELECT EmployeeID, 
CONCAT(TitleOfCourtesy, ' ', LastName, ' ', FirstName) AS NombreCompleto, 
Title, BirthDate, HireDate FROM northwind.employees;

-- Consulta 2

SELECT EmployeeID, TitleOfCourtesy, LastName, 
FirstName, DATE(BirthDate) AS 'FechaNacimiento', HireDate FROM northwind.employees;

-- Consulta 3

SELECT EmployeeID, TitleOfCourtesy, LastName, 
FirstName, 
DATE(BirthDate) AS 'FechaNacimiento',
YEAR(HireDate) AS 'AnioContratacion'
FROM northwind.employees;