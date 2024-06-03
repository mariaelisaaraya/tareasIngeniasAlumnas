# Aplicación con express

Servidor con nodejs + express

## Dependencias instaladas
- Express --> npm i express || npm install express

## Ejecución del programa

En el package.json ver qué scripts existen para ejecutar:

```
"scripts": {
    "start": "node index.js",
    "dev": "node index.js",
}
```

Se podrá ejecutar el proyecto con:
- npm start
- npm run dev

## Pruebas

![● /productos](assets/productos.png)

Endpoint por id **“/productos/:id”**:

![● /productos/:id](assets/productos_id.png)

Endpoint por nombre **“/productos/nombre/:nombre”**:

![● /productos/:nombre](assets/productos_nombre.png)