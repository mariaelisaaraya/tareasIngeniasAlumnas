## Práctica

Utilizando la aplicación Compass, realiza las siguientes consultas sobre la

Colección ‘frutas’:

1. Busca las frutas donde su nombre comienza con 'Manz' (recuerda /regex/)
2. Busca las frutas que tienen un precio menor a 200
3. Busca las frutas que tienen un precio mayor o igual a 500
4. Buscar las frutas que tienen los nombres 'Arándanos', 'Cerezas’, 'Frutillas’
5. Buscar las frutas que tienen un precio mayor o igual a 600 y su stock
superior a 50
6. Repite el punto 2, agregando un ordenamiento por el nombre, de forma
ascendente
7. Repite el punto 4, agregando un ordenamiento por el nombre de forma
descendente
8. repite el punto 5, agregando un ordenamiento por el id de forma ascendente


### Requisitos previos

-   Asegúrate de tener instalada la aplicación MongoDB Compass en tu sistema. Puedes descargarla desde [el sitio web oficial de MongoDB](https://www.mongodb.com/try/download/compass).
-   Asegúrate de tener acceso a la base de datos y la colección 'frutas' en tu servidor MongoDB.

### Instrucciones

1.  **Consulta 1: Frutas que comienzan con 'Manz'**
    
    -   Abre MongoDB Compass y conecta a tu servidor MongoDB.
    -   Selecciona la base de datos y la colección 'frutas'.
    -   Haz clic en la pestaña "Filtros" y selecciona "Nombre".
    -   Ingresa el filtro `{ "Nombre": { "$regex": "^Manz" } }`.
    -   Haz clic en "Aplicar" para ver los resultados.
2.  **Consulta 2: Frutas con precio menor a 200**
    
    -   Sigue los mismos pasos anteriores para seleccionar la colección y abrir la pestaña "Filtros".
    -   Ingresa el filtro `{ "Precio": { "$lt": 200 } }`.
    -   Haz clic en "Aplicar" para ver los resultados.
3.  **Consulta 3: Frutas con precio mayor o igual a 500**
    
    -   Repite los pasos anteriores y usa el filtro `{ "Precio": { "$gte": 500 } }`.
4.  **Consulta 4: Frutas con nombres específicos**
    
    -   Ingresa el filtro `{ "Nombre": { "$in": ["Arándanos", "Cerezas", "Frutillas"] } }`.
5.  **Consulta 5: Frutas con precio mayor o igual a 600 y stock superior a 50**
    
    -   Utiliza el filtro `{ "Precio": { "$gte": 600 }, "Stock": { "$gt": 50 } }`.
6.  **Consulta 6: Ordenamiento ascendente por nombre y precio menor a 200**
    
    -   Agrega el filtro anterior y luego haz clic en la pestaña "Orden".
    -   Selecciona "Nombre" y elige "Ascendente".
7.  **Consulta 7: Ordenamiento descendente por nombre y frutas específicas**
    
    -   Agrega el filtro de la consulta 4 y luego ve a la pestaña "Orden".
    -   Selecciona "Nombre" y elige "Descendente".
8.  **Consulta 8: Ordenamiento ascendente por ID y frutas con precio mayor o igual a 600 y stock superior a 50**
    
    -   Agrega el filtro de la consulta 5 y luego ve a la pestaña "Orden".
    -   Selecciona "ID" y elige "Ascendente".

¡Eso es todo! Sigue estas instrucciones paso a paso para realizar las consultas deseadas en la colección 'frutas' utilizando MongoDB Compass. Si tienes alguna pregunta o encuentras algún problema, no dudes en consultar la documentación de MongoDB Compass o buscar ayuda en la comunidad de MongoDB.
