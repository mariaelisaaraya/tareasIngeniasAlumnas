USE northwind;
/*Ejercicio 1
1. Ejecuta una consulta de selección sobre todos los campos de la tabla Products
○ ordena la consulta por el campo productName*/

SELECT *
FROM products
ORDER BY ProductName;

/*Ejercicio 2
. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo CategoryID sea igual a 4 y 6
○ mantén el ordenamiento indicado anteriormente*/

SELECT * FROM products
WHERE CategoryID IN (4,6)
ORDER BY ProductName;

/*Ejercicio 3
Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo SupplierID sea igual a 5 y el campo CategoryID sea igual a 4*/

SELECT * FROM products
WHERE SupplierID=5 AND CategoryID=4;

/*Ejercicio 4
Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo UnitsInStock tenga valores entre 25 y 40 unidades*/

SELECT *
FROM products
WHERE UnitsInStock BETWEEN 25 AND 40
ORDER BY ProductName;

/*Ejercicio 5
. Abre la tabla Products y modifica manualmente el campo discontinued = 1, en al menos 5
registros al azar. Recuerda aplicar / guardar los cambios efectuados*/

SELECT * FROM products;

UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE (`ProductID` = '44');
UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE (`ProductID` = '56');
UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE (`ProductID` = '75');
UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE (`ProductID` = '77');
UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE (`ProductID` = '48');

/*Ejercicio 6
Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo UnitsInStock sea mayor a 400 o el campo discontinued sea verdadero
○ ordena la consulta por el campo productName*/

SELECT *
FROM products
WHERE UnitsInStock >400 OR Discontinued=True
ORDER BY ProductName;
