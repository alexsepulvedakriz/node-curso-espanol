var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controllers/api/bicicletasControler');

router.get('/', bicicletaController.bicicletasList);
router.post('/create', bicicletaController.bicicletaCreate);
router.post('/delete', bicicletaController.bicicletaDelete);

module.exports = router;
