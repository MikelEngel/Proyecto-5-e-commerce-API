const mongoose = require('mongoose');
const User = mongoose.model('User')

const registro = async (req, res) => {

    try {
        //Creamos usuario con lo que viene del body
        const user = new User(req.body);

        const resp = await user.save()

        return res.status(201).json({ mensaje: "Usuario Creado", detalles: resp });
        } catch (e) {
            return res.status(400).json({ mensaje: "Error", detalles: e.message });    
        }
    };
module.exports = {
    registro,
    verUsuarios,
};