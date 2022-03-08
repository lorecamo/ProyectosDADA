var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;
map.createPane('pane_1').style.zIndex = 498;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleHybrid.addTo(map);
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _ProyDADAa = L.geoJSON(_ProyDADAa_data, {
			pane: 'pane_0',
			style: function (feature) {
				if ( feature.properties["id"] == '1001') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(37, 129, 111, 1.00)',
						fillColor: 'rgba(61, 213, 185, 1.00)'
					}
				} else if ( feature.properties["id"] == '1002') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(33, 99, 139, 1.00)',
						fillColor: 'rgba(51, 148, 209, 1.00)'
					}
				} else if ( feature.properties["id"] == '1003') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(103, 157, 78, 1.00)'
					}
				} else if ( feature.properties["id"] == '1005') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(148, 79, 47, 1.00)',
						fillColor: 'rgba(205, 112, 66, 1.00)'
					}
				} else if ( feature.properties["id"] == '1006') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(103, 71, 140, 1.00)',
						fillColor: 'rgba(162, 112, 219, 1.00)'
					}
				} else if ( feature.properties["id"] == '1007') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(44, 44, 130, 1.00)',
						fillColor: 'rgba(76, 74, 220, 1.00)'
					}
				} else if ( feature.properties["id"] == '1008') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(181, 151, 0, 1.00)',
						fillColor: 'rgba(255, 213, 1, 1.00)'
					}
				} else if ( feature.properties["id"] == '1009') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(141, 25, 99, 1.00)',
						fillColor: 'rgba(221, 40, 152, 1.00)'
					}
				} else if ( feature.properties["id"] == '1010') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(100, 122, 30, 1.00)',
						fillColor: 'rgba(165, 203, 50, 1.00)'
					}
				} else if ( feature.properties["id"] == '1011') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(128, 42, 134, 1.00)',
						fillColor: 'rgba(211, 70, 221, 1.00)'
					}
				} else if ( feature.properties["id"] == '1012') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(31, 124, 131, 1.00)',
						fillColor: 'rgba(51, 196, 209, 1.00)'
					}
				} else if ( feature.properties["id"] == '1014') {
					return {
						opacity: 0.5,
						fillOpacity: 0.5,
						weight: 2.3000000000000003,
						color: 'rgba(136, 115, 45, 1.00)',
						fillColor: 'rgba(213, 182, 71, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: ProyDADAa</h4><br/>'  +
							'<b>PROGRAMA:</b>&ensp;' + feature.properties['Programa'] + '<br/>' +
							'<b>AUTOR_A:</b>&ensp;' + feature.properties['Autor_a'] + '<br/>' +
							'<b>DIRECTOR_A:</b>&ensp;' + feature.properties['Director_a'] + '<br/>' +
							'<b>LGAC:</b>&ensp;' + feature.properties['LGAC'] + '<br/>' +
							'<b>REPOSITORI:</b>&ensp;' + feature.properties['Repositori'] + '<br/>' +
							'<b>UBICACIÓN:</b>&ensp;' + feature.properties['Ubicación'] + '<br/>' +
							'<b>IMAGEN:</b>&ensp;' + feature.properties['Imagen'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['ProyDADAa'] = _ProyDADAa;

var _ProyDADA = L.geoJSON(_ProyDADA_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_1'})},
			style: function (feature) {
				if ( feature.properties["id"] == '1001') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(63, 213, 186, 1.00)'
					}
				} else if ( feature.properties["id"] == '1002') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(53, 149, 209, 1.00)'
					}
				} else if ( feature.properties["id"] == '1003') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(104, 158, 79, 1.00)'
					}
				} else if ( feature.properties["id"] == '1004') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(236, 59, 0, 1.00)'
					}
				} else if ( feature.properties["id"] == '1005') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(205, 113, 67, 1.00)'
					}
				} else if ( feature.properties["id"] == '1006') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(163, 113, 219, 1.00)'
					}
				} else if ( feature.properties["id"] == '1007') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(77, 75, 220, 1.00)'
					}
				} else if ( feature.properties["id"] == '1008') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 213, 1, 1.00)'
					}
				} else if ( feature.properties["id"] == '1009') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(221, 42, 153, 1.00)'
					}
				} else if ( feature.properties["id"] == '1010') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(166, 203, 52, 1.00)'
					}
				} else if ( feature.properties["id"] == '1011') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(53, 196, 209, 1.00)'
					}
				} else if ( feature.properties["id"] == '1012') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(211, 71, 221, 1.00)'
					}
				} else if ( feature.properties["id"] == '1014') {
					return {
						opacity: 0.8,
						fillOpacity: 0.8,
						radius: 5.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(212, 182, 71, 1.00)'
					}
				} 
			}
}).addTo(map);
overlayMaps['ProyDADA'] = _ProyDADA;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_ProyDADAa_lgd">ProyDADAa</dt>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(37, 129, 111, 1.00)" stroke-width="3" fill="rgba(61, 213, 185, 1.00)"></svg>1001</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(33, 99, 139, 1.00)" stroke-width="3" fill="rgba(51, 148, 209, 1.00)"></svg>1002</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(103, 157, 78, 1.00)"></svg>1003</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(148, 79, 47, 1.00)" stroke-width="3" fill="rgba(205, 112, 66, 1.00)"></svg>1005</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(103, 71, 140, 1.00)" stroke-width="3" fill="rgba(162, 112, 219, 1.00)"></svg>1006</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(44, 44, 130, 1.00)" stroke-width="3" fill="rgba(76, 74, 220, 1.00)"></svg>1007</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(181, 151, 0, 1.00)" stroke-width="3" fill="rgba(255, 213, 1, 1.00)"></svg>1008</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(141, 25, 99, 1.00)" stroke-width="3" fill="rgba(221, 40, 152, 1.00)"></svg>1009</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(100, 122, 30, 1.00)" stroke-width="3" fill="rgba(165, 203, 50, 1.00)"></svg>1010</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(128, 42, 134, 1.00)" stroke-width="3" fill="rgba(211, 70, 221, 1.00)"></svg>1011</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(31, 124, 131, 1.00)" stroke-width="3" fill="rgba(51, 196, 209, 1.00)"></svg>1012</dd>';
	div.innerHTML += 		'<dd class="_ProyDADAa_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(136, 115, 45, 1.00)" stroke-width="3" fill="rgba(213, 182, 71, 1.00)"></svg>1014</dd>';
	div.innerHTML += 	'<dt class="_ProyDADA_lgd">ProyDADA</dt>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(63, 213, 186, 1.00)"></svg>1001</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(53, 149, 209, 1.00)"></svg>1002</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(104, 158, 79, 1.00)"></svg>1003</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(236, 59, 0, 1.00)"></svg>1004</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(205, 113, 67, 1.00)"></svg>1005</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(163, 113, 219, 1.00)"></svg>1006</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(77, 75, 220, 1.00)"></svg>1007</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(255, 213, 1, 1.00)"></svg>1008</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(221, 42, 153, 1.00)"></svg>1009</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(166, 203, 52, 1.00)"></svg>1010</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(53, 196, 209, 1.00)"></svg>1011</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(211, 71, 221, 1.00)"></svg>1012</dd>';
	div.innerHTML += 		'<dd class="_ProyDADA_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(212, 182, 71, 1.00)"></svg>1014</dd>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
