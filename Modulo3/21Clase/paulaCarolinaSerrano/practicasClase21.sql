/* 1. Ejecuta una consulta de selección sobre todos los campos de la tabla Products
○ ordena la consulta por el campo productName */
SELECT * FROM northwind.products 
order by ProductName;
/* 2. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo CategoryID sea igual a 4 y 6
○ mantén el ordenamiento indicado anteriormente */
SELECT * FROM northwind.products 
where CategoryID = 4 or CategoryID = 6 
order by ProductName;
/* 3. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo SupplierID sea igual a 5 y el campo CategoryID sea igual a 4 */
SELECT * FROM northwind.products 
where SupplierID = 5 and CategoryID = 4; 
/* 4. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo UnitsInStock tenga valores entre 25 y 40 unidades */
SELECT * FROM northwind.products 
where UnitsInStock between 25 and 40; 
/* 5. Abre la tabla Products y modifica manualmente el campo discontinued = 1, en al menos 5 registros al azar. Recuerda aplicar / guardar los cambios efectuados
6. Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición
○ el campo UnitsInStock sea mayor a 400 o el campo discontinued sea verdadero
○ ordena la consulta por el campo productName */
SELECT * FROM northwind.products 
where UnitsInStock > 400 or Discontinued = 1
order by ProductName; 