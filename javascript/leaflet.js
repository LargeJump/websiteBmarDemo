var britmarCoord = [49.304132912228184, -123.00885722630613]
var map = L.map('map').setView(britmarCoord, 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var britmarMarker = L.marker(britmarCoord).addTo(map);
britmarMarker._icon.classList.add("britmar-marker");
