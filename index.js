require ("dotenv").config();

/* 
1. Importar express y sus funciones
2. Hacer instancia de la aplicación
3. Middlewares
4. Declarar las rutas
5. Levantar servidor.
*/


//! 1
const express = require('express');

//! 2
const app = express();

//!3
app.use(express.json());


//!4
app.get("/", (req, res)=> {
    res.json({ mensaje: "Bienvenido" });
});

//!5
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});