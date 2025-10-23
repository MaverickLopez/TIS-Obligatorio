
let miLatitud= -34.905778; 
let miLongitud= -56.189444;
let map;

inicio()
function inicio(){
    armarMapa();
}

function armarMapa(){
   if(map){
    map.remove();
   }
   map = L.map('mapa').setView([miLatitud, miLongitud], 15);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19 ,
    attribution: '&copy; OpenStreetMap contributors'
   }).addTo(map);

   let marker = L.marker([miLatitud, miLongitud]).addTo(map);
   marker.bindPopup("<b>Estilo Clásico</b><br>Av. 18 de Julio 950, Montevideo<br>").openPopup();
}
