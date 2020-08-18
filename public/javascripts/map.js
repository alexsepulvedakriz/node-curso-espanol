var mymap = L.map('mapid').setView([-34.6012424, -58.38611497], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);

$.ajax({
    dataType: 'json',
    url:"api/bicicletas",
    success: function (result) {
        result.bicicletas.forEach(function (bici) {
            L.marker(bici.ubicacion, {title: bici.id} ).addTo(mymap);
        })
    }
})
