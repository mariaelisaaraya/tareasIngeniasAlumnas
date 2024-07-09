/*
PRACTICAS CLASE 22
Necesitamos simplificar la visualización de datos de esta tabla, presentando en una consulta de
selección, los siguientes campos:
● EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, BirthDate, HireDate
Sobre esta consulta de selección base, realiza las siguientes consignas:
1. En una nueva consulta de selección con la base anterior, concatena los campos:
a. (TitleOfCourtesy, LastName, FirstName) con el alias NombreCompleto
b. respeta los espacios entre los diferentes campos mencionados*/
use northwind;
select 
EmployeeID, 
concat(TitleOfCourtesy, ' ', LastName, ' ', FirstName) as NombreCompleto, 
Title, 
BirthDate, 
HireDate 
from employees;

/*2. En una nueva consulta de selección con la base inicial:
a. elimina el formato fecha y hora sobre el campo BirthDate, utilizando la función Date()
b. aplica un alias a dicho campo para llamarlo FechaNacimiento*/
select 
EmployeeID, 
concat(TitleOfCourtesy, ' ', LastName, ' ', FirstName) as NombreCompleto, 
Title, 
date(BirthDate) as FechaNacimiento, 
HireDate 
from employees;

/*3. Copia la consulta resultante del punto dos, y modifícala aplicando lo siguiente:
a. utiliza la función YEAR sobre campo HireDate, para mostrar sólo el año de contratación
b. aplica un alias a dicha campo, para llamarlo AnioContratacion*/
select 
EmployeeID, 
concat(TitleOfCourtesy, ' ', LastName, ' ', FirstName) as NombreCompleto, 
Title, 
date(BirthDate) as FechaNacimiento, 
year(HireDate) as AnioContratacion 
from employees;