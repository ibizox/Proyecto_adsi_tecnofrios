const Cliente = require('../models/Cliente');



const listarClientes = async (req, res) => {
   
    const clientes = await Cliente.findAll();

    res.json(clientes);


}


const addCliente = async (req, res) => {

    const { nombre, apellido, email, fecha_nacimiento, telefono } = req.body;

    const findClient = await Cliente.findOne({ where: {email: email}});
    
    if(!findClient){

        await Cliente.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            fecha_nacimiento: fecha_nacimiento,
            telefono: telefono
        });

        res.json({msg:'¡Cliente añadido correctamente!'});
    } else {
        res.json({msg: 'El cliente con ese correo, ya existe.'})
    }


}


const actualizarCliente = async(req, res) => {

    const { nombre, apellido, email, fecha_nacimiento, telefono } = req.body;

    const findClient = await Cliente.findOne({ where: {email: email}});

    const idClient = findClient.id;

    await Cliente.update({ 
        nombre: nombre, 
        apellido: apellido,
        email: email,
        fecha_nacimiento: fecha_nacimiento,
        telefono: telefono
    },
    { where: { id:idClient } });

    res.json({msg:'¡Cliente actualizado correctamente!'});
}





const eliminarCliente = async (req, res) => {

    const idClient = req.params.idClient;

    await Cliente.destroy({
        where : {
            id: idClient
        }
    });


    res.json({msg:'¡Cliente eliminado correctamente!'});
}

module.exports = {
    listarClientes,
    addCliente,
    actualizarCliente,
    eliminarCliente
} ;