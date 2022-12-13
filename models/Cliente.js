const { dbData } = require('../config/db');
const DataTypes = require('sequelize');

const Cliente = dbData.define('clientes_tecnofrios', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Cliente;