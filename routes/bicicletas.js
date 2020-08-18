var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicletas');


router.get('/', bicicletaController.renderBicicletasList);
router.get('/create', bicicletaController.renderBicicletaCreateGet);
router.post('/create', bicicletaController.renderBicicletaCreatePost);
router.get('/:id/update', bicicletaController.renderBicicletaUpdateByIdGet);
router.post('/:id/update', bicicletaController.renderBicicletaUpdateByIdPost);
router.post('/:id/delete', bicicletaController.renderBicicletaRemoveByIdPost);

module.exports = router;
