# Aplicación con express

Servidor con mongoDB + nodejs + express

## Dependencias instaladas
- Express, Dotenv, MongoDB -->  npm install express dotenv mongodb

## Ejecución del programa

En el package.json ver qué scripts existen para ejecutar:
-npm install

```
"scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

Se podrá ejecutar el proyecto con:
- npm start

## Capturas de Pantalla

Endpoint para obtener todas las frutas por un nombre **"/frutas/nombre/:nombre"**:

![Endpoint GET NAME](assets/name.png)

Endpoint para obtener todas las frutas mayores o iguales a un precio **“frutas/precio/:precio”**:

![Endpoint por GET PRICE](assets/price.png)

E