const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;

const {getAll,getFruitbyname,getFruitsbyPrice} = require('./controller/controles')

//middleware
app.use((req,res,next)=>{
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})

app.get("/",async(req,res)=>{
    const result = await getAll();
    res.json(result); 
    
})

app.get("/nombre/:nombre",async(req,res)=>{
    const nombre=req.params.nombre;
    const result = await getFruitbyname(nombre);
    res.json(result);  
})

app.get("/precio/:precio",async(req,res)=>{
    const precio=parseInt(req.params.precio);  
    const result = await getFruitsbyPrice(precio);
    res.json(result);

})

app.listen(PORT,()=>console.log("puerto okk"))