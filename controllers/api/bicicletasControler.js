var bicicletas = require('../../models/bicicletas');

exports.bicicletasList = function(req, res){
    res.status(200).json({
        bicicletas: bicicletas.allBicis
    });
};

exports.bicicletaCreate = function (req, res) {
    var bici = new bicicletas(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion =  [req.body.lat, req.body.lng];
    bicicletas.add(bici);
    res.status(200).json({
        bicicleta: bicicletas.allBicis
    })
}

exports.bicicletaDelete = function (req, res) {
    bicicletas.removeById(req.body.id);
    res.status(200).json({
        bicicleta: bicicletas.allBicis
    })
}
