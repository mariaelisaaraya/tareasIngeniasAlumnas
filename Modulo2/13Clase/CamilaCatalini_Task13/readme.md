## Desafío 13:

Define nuevas rutas como endpoint para retornar diferentes tipos de datos:

/frutas/nombre/:nombre
/frutas/precio/:precio

En la primera de las rutas, deberás buscar y retornar todas aquellas frutas que contengan el nombre o parte del nombre informado como parámetro. En el segundo endpoint definido, deberás buscar y retornar todas aquellas frutas que tengan el mismo precio informado o un precio superior a este. En estos endpoints, deberás utilizar el método .find().toArray(), para que devuelva más de un resultado.

## Rutas definidas

  1. “/frutas/nombre/:nombre” --> Ej: http://localhost:3000/frutas/nombre/manzana
  
  2. “/frutas/precio/:precio”  --> Ej: http://localhost:3000/frutas/precio/200