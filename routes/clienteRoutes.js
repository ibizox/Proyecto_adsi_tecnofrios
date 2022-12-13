const router = require('express').Router();

const { 
    listarClientes,
    addCliente, 
    actualizarCliente, 
    eliminarCliente } = require('../controllers/clienteController');

router.get("/listar-clientes", listarClientes);
router.post("/add-cliente", addCliente);
router.put("/act-cliente", actualizarCliente);
router.delete("/elim-cliente/:idClient", eliminarCliente);

module.exports = router;