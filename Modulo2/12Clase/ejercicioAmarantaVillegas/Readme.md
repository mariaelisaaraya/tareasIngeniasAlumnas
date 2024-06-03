## Tarea 12: Queries en Compass

### Consulta 1
```{nombre: {$regex: "Manz"}}```

### Consulta 2
```{importe: {$lt: 200}}```

### Consulta 3
```{importe: {$gte: 500}}```

### Consulta 4
```{nombre: {$in: ['Arandanos', 'Cerezas', 'Frutillas']}}```

### Consulta 5
```{$and: [{importe: {$gte: 600}}, {stock: {$gt: 50}}]}```

ordenar de manera ascendente

### Consulta 6
```{importe: {$lt: 200}}```
buscamos sort en options en el compasss
```{nombre: 1}```

### Consulta 7
Lo mismo pero de manera descendente
```{nombre: {$in: ['Arandanos', 'Cerezas', 'Frutillas']}}```
buscamos sort en options en el compasss
```{nombre: -1}```

### Consulta 8
```{$and: [{importe: {$gte: 600}}, {stock: {$gt: 50}}]}``` 
buscamos sort en options en el compass
```{id: 1}```