 const express = require('express');
 const app = express();
 const PORT = 3000;


 const clientes = require("./clientes.js")
app.get('/clientes/paises/:id',(req,res)=>{
    let id= parseInt(req.params.id)
  

    if ( clientes.some(cliente=>cliente.id=== id)){
        res.json(clientes.filter(cliente =>cliente.id===id))
    }else{
        res.status(404).json({
            id:'Error',
            description :'No se encontraron coincidencias'
            })
    }
 

})

app.get('/clientes/nombres/:nombre',(req,res)=>{
    // si le pongo el trim para que quite los espacios no lo hace
    // el programa funciona como debe solo me genera la duda con el trim
    let nombrePorBuscar = req.params.nombre.toLowerCase();
    //console.log(nombrePorBuscar.trim())

    if ( nombrePorBuscar !== '' ){ 
        let clientesResult= clientes.filter(cli => {
            // cli.nombre.trim().toLowerCase().search(nombre) !=-1 ? true: false
            if( cli.nombre.trim().toLowerCase().search(nombrePorBuscar) !=-1 ){
                return true;
            }
        } )
        
        if (clientesResult.length>0) {
            res.json(clientesResult);
        }else {
            res.status(404).json({
                id:'Error',
                description :'No se encontraron coincidencias'
                })
        }
    }
})

 app.listen(PORT,()=>{
    console.log(`server andando`);
 })
