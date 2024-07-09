-- BASE QUERY
SELECT 
	EmployeeID, 
	TitleOfCourtesy,
    LastName,
    FirstName,
    Title, 
    BirthDate,
    HireDate
FROM northwind.employees AS e;

-- QUERY 1
SELECT 
    EmployeeID, 
    CONCAT(TitleOfCourtesy, ' ', LastName, ' ', FirstName) AS NombreCompleto, 
    Title, 
    BirthDate, 
    HireDate
FROM northwind.employees AS e;

-- QUERY 2
SELECT 
	EmployeeID, 
	TitleOfCourtesy,
    LastName,
    FirstName,
    Title, 
    DATE(BirthDate) AS 'FechaNacimiento',
    HireDate
FROM northwind.employees AS e;

-- QUERY 3
SELECT 
	EmployeeID, 
	TitleOfCourtesy,
    LastName,
    FirstName,
    Title, 
    DATE(BirthDate) AS 'FechaNacimiento',
    YEAR(HireDate) AS 'AnioContratacion'
FROM northwind.employees AS e;