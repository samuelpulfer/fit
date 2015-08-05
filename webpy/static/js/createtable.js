// global variables
var lastedited

function tblCell(txt, tag) {
	if (tag == null)
		tag = "td"
	td = document.createElement(tag);
	td.appendChild(document.createElement('DIV')).appendChild(document.createTextNode(txt));
	input = td.appendChild(document.createElement('INPUT'));
	input.style.display='none';
	input.type='text';
	input.value= txt;
	return td;
}

// wenn nichts verändert wurde cancel und save butten verbergen.
function checkLine(mytext) {
	var editedfields = 0;
	for (i=3; i < mytext.parentNode.childNodes.length; i++) {
		if (mytext.parentNode.childNodes[i].childNodes[0].innerHTML == mytext.parentNode.childNodes[i].getAttribute('oldValue')) {
		
		} else {
		editedfields++
		}
	}
	console.log(editedfields)
	if (editedfields != 0) {
		mytext.parentNode.childNodes[0].style.visibility = "hidden";
	}
}
// text editieren. textnode wird übergeben
function editText(mytext) {
	// verberge text
	mytext.childNodes[0].style.display='none';
	// zeige input
	mytext.childNodes[1].style.display='';
	// Onclick event deaktivieren
	mytext.ondblchlick=''
	// Save und Cancel Button einblenden
	mytext.parentNode.childNodes[0].style.visibility = "visible"
	// wenn als letztes ein anderes Feld editiert wurde Input in textnode schreiben. input verbergen und textnode anzeigen
	if (lastedited) {
		console.log(lastedited.childNodes[1])
		lastedited.childNodes[0].innerHTML = lastedited.childNodes[1].value
		lastedited.childNodes[1].style.display = "none";
		lastedited.childNodes[0].style.display = "";
		console.log(lastedited.childNodes[0].innerHTML)
		console.log(lastedited.getAttribute('oldvalue'))
		// wenn wert nich dem während des ladens entspricht dann textnode rot färben
		if (lastedited.childNodes[0].innerHTML == lastedited.getAttribute('oldvalue')){
			lastedited.childNodes[0].style.backgroundColor='';
	    checkLine(mytext);
		} else {
			lastedited.childNodes[0].style.backgroundColor='#FAEBD7'
		}
	}
	lastedited = mytext
}

function cancelText(cancelButton) {
	console.log(cancelButton)

}
function buildHtmlTable(data) {
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tfoot = document.createElement("tfoot");
	var tbody = document.createElement("tbody");
	var btn = document.createElement("BUTTON")
	btn.type = "button"
	btn.className = btn.className + "btn btn-lg btn-default"
	var tmp = document.createElement("TD")
	tmp.appendChild(btn.cloneNode(true)).innerHTML = "Cancel"
	tmp.appendChild(btn.cloneNode(true)).innerHTML = "Save"
	tmp.style.visibility = "hidden";
	tmp.childNodes[0].onclick = function () {console.log('auuuu')};
	
	table.appendChild(thead);
	table.appendChild(tfoot);
	table.appendChild(tbody);
	
	// header
	var tr = document.createElement("tr");
	tr.appendChild(document.createElement("TH")).style.visibility = "hidden";
	//console.log(data)
	for (i=0; i < data.colums.length; i++) {
		tr.appendChild(tblCell(data.colums[i], "th"));
		if (i == 0) {
			tr.childNodes[1].style.visibility = "hidden";
		}
		//console.log(td)
	}
	thead.appendChild(tr);
	

	// body
	for (i=0; i < data.data.length; i++) {
		var current = data.data[i];
		var tr = document.createElement("tr");
		tr.appendChild(tmp.cloneNode(true))
		for (e in current) {
			c = tblCell(current[e])
			c.tblId = {row: i, col: parseInt(e)};
			c.ondblclick = function () {
		          editText(this);
		      };
			c.setAttribute("oldValue", current[e])
			tr.appendChild(c);
			//console.log(td)
		}
		tbody.appendChild(tr);
		
		tr.childNodes[1].style.visibility = "hidden";
	}
	//document.getElementById("container").appendChild(table)
	return table;
}
