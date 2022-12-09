const User = require('../models/Usuario');
const { use } = require('../routes/usuarioRoutes');



const consultarUsuario = async(req, res) => {

    const { email, password } = req.body;

    const users = await User.findOne({ where: { email: email}});
    if( !users ){
        res.json({msg: "El email ingresado no existe."})
    } else {
        password != users.password ? res.json({msg: "La contraseña es incorrecta."}) : res.json(users);
    }

    

    
    
};

const registrarUsuario = async(req, res) => {
    const { nombre, email, password } = req.body;
    const newUser = await User.create({
        nombre: nombre, 
        email: email,
        password: password
    });

    res.json(newUser);
};

module.exports = { consultarUsuario, registrarUsuario };