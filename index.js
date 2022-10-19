require ("dotenv").config();

/* 
1. Importar express
2. Crear modelos
3. Crear controladores
4. Crear rutas
5. Hacer instancia de la aplicación
6. Importar rutas
7. Middlewares
8. Levantar servidor.
*/


//! 1
const express = require('express');

//! 5
const app = express();

//!5
app.use(express.json());


//!8
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});