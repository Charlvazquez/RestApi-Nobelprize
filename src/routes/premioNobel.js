const express = require('express');
const router = express.Router();
const controladores = require('../controllers/premioNobelController');


/* A router. */
router.get('/categoria/Quimica',controladores.getCategoriaQuimica);
router.get('/categoria/Literatura',controladores.getCategoriaLiteratura);
router.get('/categoria/Paz',controladores.getCategoriaPaz);
router.get('/',controladores.getDatos);
router.get('/fechas/1901',controladores.getAño1901);
router.get('/premioCantidad/M500k',controladores.getPremioM500k);
router.get('/declaraciones',controladores.getDeclaraciones);



module.exports = router;