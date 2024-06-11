# **API RESTful de Frutas**

Esta es una API RESTful para gestionar una colección de frutas utilizando Node.js, Express y MongoDB.



## Tabla de Contenidos
- [**API RESTful de Frutas**](#api-restful-de-frutas)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Diagrama que resume el funcionamiento de la API](#diagrama-que-resume-el-funcionamiento-de-la-api)
  - [Configuraciones iniciales](#configuraciones-iniciales)
  - [Uso](#uso)
  - [Endpoints](#endpoints)
  - [Ejemplos de uso](#ejemplos-de-uso)
    - [Obtener todas las frutas](#obtener-todas-las-frutas)
    - [Obtener la fruta con el id 4](#obtener-la-fruta-con-el-id-4)
    - [Agregar una nueva fruta](#agregar-una-nueva-fruta)
    - [Eliminar la fruta con el id 26](#eliminar-la-fruta-con-el-id-26)
  - [Manejo de Errores](#manejo-de-errores)

## Diagrama que resume el funcionamiento de la API
```mermaid
graph TD;
    A[Solicitud HTTP] --> B{Ruta solicitada}
    B --> |GET /frutas| C[Consulta todas las frutas]
    B --> |GET /frutas/:id| D[Consulta una fruta por ID]
    B --> |GET /frutas/nombre/:nombre| E[Consulta frutas por nombre]
    B --> |GET /frutas/precio/:precio| F[Consulta frutas por precio]
    B --> |POST /frutas| G[Crea una nueva fruta]
    B --> |PUT /frutas/:id| H[Actualiza una fruta por ID]
    B --> |DELETE /frutas/:id| I[Elimina una fruta por ID]
    C -->|Respuesta HTTP| Z
    D -->|Respuesta HTTP| Z
    E -->|Respuesta HTTP| Z
    F -->|Respuesta HTTP| Z
    G -->|Respuesta HTTP| Z
    H -->|Respuesta HTTP| Z
    I -->|Respuesta HTTP| Z
    Z[Respuesta HTTP] --> A


```
## Configuraciones iniciales
- Detalle de las variables de entorno del archivo .env:
```
PORT=3008
MONGODB_URLSTRING=mongodb+srv://caroserrano297:0TgrcvOwO5gnzk14@cluster0.unnrajh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
- Instalación de dependencias:
```bash
npm install
```

## Uso
1. Iniciar el servidor con alguno de los siguientes comandos:
   ```bash
   npm start
   npm run dev
   ```
2. Acceder a la url del servidor de la forma que creas más conveniente. Recomendamos el uso de Thunder Client.
   
   http://localhost:3008

## Endpoints

| Método | URL                      | Descripción                                                | Parámetros                      | Cuerpo de la Solicitud               | Respuesta Exitosa                     |
|--------|--------------------------|------------------------------------------------------------|---------------------------------|--------------------------------------|---------------------------------------|
| GET    | `/`                      | Retorna un mensaje de bienvenida                           | N/A                             | N/A                                  | `200 Bienvenid@ a la API de frutas`   |
| GET    | `/frutas`                | Retorna todas las frutas                                    | N/A                             | N/A                                  | `200` Lista de frutas en formato JSON |
| GET    | `/frutas/:id`            | Retorna una fruta específica por su ID                      | `id`: ID de la fruta            | N/A                                  | `200` Fruta en formato JSON           |
| GET    | `/frutas/nombre/:nombre` | Retorna frutas cuyo nombre coincide o contiene el nombre especificado | `nombre`: Nombre de la fruta   | N/A                                  | `200` Lista de frutas en formato JSON |
| GET    | `/frutas/precio/:precio` | Retorna frutas cuyo precio es igual o mayor al precio especificado | `precio`: Precio de la fruta   | N/A                                  | `200` Lista de frutas en formato JSON |
| POST   | `/frutas`                | Crea una nueva fruta                                        | N/A                             | Fruta en formato JSON                | `201` Fruta creada en formato JSON    |
| PUT    | `/frutas/:id`            | Actualiza una fruta existente por su ID                     | `id`: ID de la fruta            | Datos de la fruta en formato JSON    | `200` Fruta actualizada en formato JSON |
| DELETE | `/frutas/:id`            | Elimina una fruta existente por su ID                       | `id`: ID de la fruta            | N/A                                  | `200` Fruta eliminada                 |

## Ejemplos de uso
### Obtener todas las frutas
GET -> http://localhost:3008/frutas

![Obtener todas las frutas](./img/GET_frutas.png)

### Obtener la fruta con el id 4
GET -> http://localhost:3008/frutas/4
![Obtener la fruta con el id 4](./img/GET_frutas_id4.png)

### Agregar una nueva fruta
POST -> http://localhost:3008/frutas
![Agregar una nueva fruta](./img/POST_fruta.png)
Ejemplo de código para el body:
   ```json
{
  "id": 26,
  "imagen": "🍈",
  "nombre": "Melón",
  "importe": 1500,
  "stock": 5
}
   ```

### Eliminar la fruta con el id 26
DELETE -> http://localhost:3008/frutas/26
![Eliminar una fruta](./img/DELETE_fruta_id26.png)

## Manejo de Errores
- 500: Error al conectarse a MongoDB
- 404: Recurso no encontrado
- 400: Error en el formato de los datos (ID o precio no válidos)


