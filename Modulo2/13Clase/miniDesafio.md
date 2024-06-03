## Prácticas

Define nuevas rutas como endpoint para retornar diferentes tipos de datos:
1. /frutas/nombre/:nombre
2. /frutas/precio/:precio

En la primera de las rutas, deberás buscar y retornar todas aquellas frutas
que contengan el nombre o parte del nombre informado como parámetro.
En el segundo endpoint definido, deberás buscar y retornar todas aquellas
frutas que tengan el mismo precio informado o un precio superior a este.
En estos endpoints, deberás utilizar el método .find().toArray(), para que
devuelva más de un resultado.

También deberás integrar Expresiones Regulares. JavaScript las trabaja de
forma nativa con el objeto RegExp(). Te compartimos documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp