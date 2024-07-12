PRIMERA PARTE

1. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Products
-productID, productName, QuantityPerUnit, UnitPrice
-aplica un alias a cada uno de ellos (Codigo, Descripcion, Presentacion, PrecioUnitario)


SELECT productID AS "Codigo", productName AS Descripcion , QuantityPerUnit AS Presentacion, UnitPrice AS "Precio Unitario" FROM northwind.products ;


2. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Products
-ProductID, ProductName, QuantityPerUnit, UnitPrice
-Aplica sobre el campo ProductName la función escalar que transforma el texto a mayúsculas

SELECT ProductID, UCASE(ProductName), QuantityPerUnit, UnitPrice FROM northwind.products ;

3. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Products
-ProductID, ProductName, QuantityPerUnit, UnitPrice
- aplica el mismo alias detallado en el punto uno (1)
-Aplica sobre el campo QuantityPerUnit la función escalar de reemplazo de texto, buscando
el texto ‘boxes’ y reemplazando el mismo por ‘cajas’
-la condición WHERE debe filtrar aquellos registros que posean en cualquier parte la palabra ‘boxes’
en cualquier parte del campo QuantityPerUni

SELECT productID AS Codigo, productName AS Descripcion, REPLACE(QuantityPerUnit, 'boxes', 'cajas') AS Presentacion, UnitPrice AS PrecioUnitario

FROM northwind.products

WHERE QuantityPerUnit LIKE '%boxes%';

PARTE DOS:

Necesitamos simplificar la visualización de datos de esta tabla, presentando en una consulta de 
selección, los siguientes campos:
● EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, BirthDate, HireDate

SELECT EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, BirthDate, HireDate FROM northwind.Employees;

Sobre esta consulta de selección base, realiza las siguientes consignas:
1. En una nueva consulta de selección con la base anterior, concatena los campos:
a. (TitleOfCourtesy, LastName, FirstName) con el alias NombreCompleto
b. respeta los espacios entre los diferentes campos mencionados

SELECT EmployeeID, concat(TitleOfCourtesy, LastName, FirstName) AS NombreCompleto, Title, BirthDate, HireDate FROM northwind.Employees;

2. En una nueva consulta de selección con la base inicial:
a. elimina el formato fecha y hora sobre el campo BirthDate, utilizando la función Date()
b. aplica un alias a dicho campo para llamarlo FechaNacimiento

SELECT EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, DATE(BirthDate) AS FechaNacimiento, HireDate FROM northwind.Employees;

3. Copia la consulta resultante del punto dos, y modifícala aplicando lo siguiente:
a. utiliza la función YEAR sobre campo HireDate, para mostrar sólo el año de contratación
b. aplica un alias a dicha campo, para llamarlo AnioContratacion

SELECT EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, DATE(BirthDate) AS FechaNacimiento, YEAR(HireDate) AS AnioContratacion FROM northwind.Employees;
