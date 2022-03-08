function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__ProyDADAa = '<table id="_ProyDADAa_table">';
tableHTML__ProyDADAa += 	'<tr>';
tableHTML__ProyDADAa += 		'<th>Mapa</th>';
tableHTML__ProyDADAa += 		'<th>Autor_a</th>';
tableHTML__ProyDADAa += 		'<th>Director_a</th>';
tableHTML__ProyDADAa += 		'<th>Imagen</th>';
tableHTML__ProyDADAa += 		'<th>LGAC</th>';
tableHTML__ProyDADAa += 		'<th>Presentó</th>';
tableHTML__ProyDADAa += 		'<th>Programa</th>';
tableHTML__ProyDADAa += 		'<th>Proyecto</th>';
tableHTML__ProyDADAa += 		'<th>Repositori</th>';
tableHTML__ProyDADAa += 		'<th>Ubicación</th>';
tableHTML__ProyDADAa += 		'<th>id</th>';
tableHTML__ProyDADAa += 	'</tr>';
tableHTML__ProyDADAa += 	'<tr>';
tableHTML__ProyDADAa += 		'<td></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Autor_a"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Director_a"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar Imagen"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar LGAC"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar Presentó"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Programa"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar Proyecto"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Repositori"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar Ubicación"></td>';
tableHTML__ProyDADAa += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar id"></td>';
tableHTML__ProyDADAa += 	'</tr>';

var _ProyDADAa_IDs = Object.keys(_ProyDADAa._layers);
for (var i=0; i < _ProyDADAa_IDs.length; i++){
	var feature = _ProyDADAa._layers[_ProyDADAa_IDs[i]].feature;
	tableHTML__ProyDADAa += '<tr>';
	tableHTML__ProyDADAa += 	'<td onclick="goToMap(_ProyDADAa, ' + _ProyDADAa_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Autor_a'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Director_a'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Imagen'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['LGAC'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Presentó'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Programa'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Proyecto'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Repositori'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['Ubicación'] + '</td>';
	tableHTML__ProyDADAa += 	'<td>' + feature.properties['id'] + '</td>';
	tableHTML__ProyDADAa += '</tr>';
}

tableHTML__ProyDADAa += '</table>';
document.getElementById('_ProyDADAa_tab').innerHTML = tableHTML__ProyDADAa;

