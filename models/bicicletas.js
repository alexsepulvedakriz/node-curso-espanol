var bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
};

bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + 'color bicicleta: ' + this.color;
};

bicicleta.allBicis = [];
bicicleta.add= function(Bici){
    this.allBicis.push(Bici);
};

bicicleta.removeById = function (aBiciId) {
    for(var i=0; i < bicicleta.allBicis.length; i++){
        if(bicicleta.allBicis[i].id == aBiciId){
            bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

bicicleta.findById = function (aBiciId) {
    var bici = bicicleta.allBicis.find(x => x.id == aBiciId);
    if(bici){
        return bici
    } else
        throw new Error('No existe bici');
}

var a = new bicicleta(1, 'verde', 'bkn', [-34.60666, -58.38610]);
var b = new bicicleta(2, 'verde', 'bkn2', [-34.59666, -58.38000]);
bicicleta.add(a);
bicicleta.add(b);

module.exports = bicicleta;
