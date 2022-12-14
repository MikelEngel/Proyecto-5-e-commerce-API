//! 1. Importar variables de entorno
require ("dotenv").config();


//! 2. Importar modelos
require('/models')


//! 3. Importar express, mongoose & Router
const express = require('express');
const mongoose = require("mongoose");
const routes = require('/routes');

//CORS

//! 4. Hacer instancia de la aplicación
const app = express();

//! 5. Configurar Middelwares
app.use(express.json());

//! 6. Conexión a mongo
mongoose.connect(process.env.URI_MONGO);

//! 7. Definir rutas
app.use("/v1", routes);


//! 7. Levantar servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});