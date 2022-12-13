const User = require('../models/Usuario');




const consultarUsuario = async(req, res) => {

    const { email, password } = req.body;

    const users = await User.findOne({ where: { email: email}});
    if( !users ){
        res.json({msg: "El email ingresado no existe.", ok: false})
    } else {
        password != users.password ? res.json({msg: "La contraseña es incorrecta.", ok:false}) : res.json({msg:`Bienvenido, ${users.nombre}`, ok: true});
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



module.exports = { 
    consultarUsuario, registrarUsuario 
};