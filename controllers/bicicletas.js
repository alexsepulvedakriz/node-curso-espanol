var bicicletas = require('../models/bicicletas');

exports.renderBicicletasList = function(req, res){
    res.render('bicicletas/index', {bicicletas: bicicletas.allBicis});
}

exports.renderBicicletaCreateGet = function (req, res) {
    res.render('bicicletas/create')
}

exports.renderBicicletaCreatePost = function (req, res) {
    var bicicleta = new bicicletas(req.body.id, req.body.color, req.body.modelo, [req.body.lat,req.body.lng])
    bicicletas.add(bicicleta);
    res.redirect('/bicicletas')
}

exports.renderBicicletaRemoveByIdPost = function (req, res) {
    bicicletas.removeById(req.body.id);
    var bicicleta = new bicicletas(req.body.id, req.body.color, req.body.modelo, [req.body.lat,req.body.lng])
    bicicletas.add(bicicleta);
    res.redirect('/bicicletas');
}

exports.renderBicicletaUpdateByIdGet = function (req, res) {
    var bici = bicicletas.findById(req.params.id);
    res.render('bicicletas/update', {bici});
}

exports.renderBicicletaUpdateByIdPost = function (req, res) {
    var bicicleta = bicicletas.findById(req.params.id);
    bicicleta.id = req.body.id;
    bicicleta.color =  req.body.color;
    bicicleta.modelo = req.body.modelo;
    bicicleta.ubicacion= [req.body.lat,req.body.lng]
    res.redirect('/bicicletas')
}
