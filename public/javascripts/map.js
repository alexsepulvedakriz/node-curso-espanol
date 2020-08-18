var mymap = L.map('mapid').setView([-34.6012424, -58.38611497], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);

L.marker([-34.6012424, -58.38611497]).addTo(mymap);
