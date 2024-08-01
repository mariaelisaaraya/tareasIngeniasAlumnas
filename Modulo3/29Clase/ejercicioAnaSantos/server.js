const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");
const PORT = config.PORT

const app = express();

const corsOptions = {
  origin: "http://localhost:"+ config.PORT
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "This is de landing page for the moment" })
})

//AQUI SE DEBERIA LLAMAR A LOS ENDPOINTS EN LA CARPETA ROUTE


//Llamada al servidor
app.listen(PORT, () => {
    console.log(`Server is running on port: ${corsOptions.origin}`)
})