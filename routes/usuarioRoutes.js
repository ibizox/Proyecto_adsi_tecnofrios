const router = require('express').Router();

const { consultarUsuario, registrarUsuario } = require('../controllers/usuarioController');

router.post("/login", consultarUsuario);
router.post("/registro", registrarUsuario);



module.exports = router;