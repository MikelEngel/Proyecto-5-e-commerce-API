/* 
1. Importar mongoose
2. Crear esquema 
3. Exportar modelo

*/


//! 1.

const mongoose = require('mongoose');

//! 2.
const UserSchema = new mongoose.Schema({
     modelo: {
        type: String,
        require: true,
     },
     descripcion: {
        type: String,
        require: true,
     },
     medidas: {
        type: String,
        require: true,
     },
     precio: {
        type: String,
        require: true,
     }
})

//! 3

mongoose.model('User', UserSchema, 'coleccionUser');
