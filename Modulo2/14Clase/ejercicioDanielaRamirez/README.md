# Aplicación con express

Servidor con Nodejs + Express + MongoDB

## Dependencias instaladas
- Express --> npm i express || npm install express
- MongoDB --> npm i mongodb || npm install mongodb
- Dotenv  --> npm i dotenv  || npm install dotenv
- Nodemon --> npm i nodemon || npm install nodemon
- Body-Parser --> npm i body-parser || npm install body-parser

Para instalar todas las dependencias solo hace falta ejecutar:

```
npm install
```

## Ejecución del programa

```
npm start
```

## Capturas de Pantalla

Endpoint de las frutas por nombre **"/frutas/nombre/:nombre"**:

![Endpoint las frutas por nombre](images/frutaNombre.png)

Endpoint de las frutas por precio **“/frutas/precio/:precio”**:

![Endpoint de las frutas por precio](images/frutaPrecio.png)

Endpoint para agregar una nueva fruta **"/frutas"**:

![Enpoint POST](images/POST.png)

Endpoint para actualizar la info de una fruta **“/frutas/:id”**:

![Endpoint PUT](images/PUT.png)

Luego, al obtener la fruta se ve la información actualizada:

![Endpoint PUT](images/PUT2.png)

Endpoint para eliminar una fruta **"/frutas/:id"**

![Endpoint DELETE](images/DELETE.png)

Luego, al obtener la fruta se ve que la fruta ya no sale:

![Endpoint DELETE](images/DELETE2.png)