function send_form(obj) {

	
	// check values
	var value1 = document.getElementById("targettime").value
	var value2 = document.getElementById("calories").value
	var value3 = document.getElementById("description").value
	
	
	if (isNaN(value2) || value2 == "") {
		alert("«calories» is not a number");
		return false;
	
	}
	
	if (value1 == "") {
		alert("date not set");
		return false;
	}
	
	// create a json request object
	var params = {
		targetdate: value1,
		calories: value2,
		description: value3
	}
	
	var r = new XMLHttpRequest();
	r.open("POST", "/example", true);
	r.setRequestHeader("Content-Type","application/json; charset=utf-8");
	r.onreadystatechange = function () {
		switch (r.readyState) {
			case 0:
				document.getElementById('info').innerHTML = 'request not initialized. Status: ' + r.statusText;
				break;
			case 1:
				document.getElementById('info').innerHTML = 'server connection established. Status: ' + r.statusText;
				break;
			case 2:
				document.getElementById('info').innerHTML = 'request received. Status: ' + r.statusText;
				break;
			case 3:
				document.getElementById('info').innerHTML = 'processing request. Status: ' + r.statusText;
				break;
			case 4:
				document.getElementById('info').innerHTML = 'request finished and response is ready. Status: ' + r.statusText;
				break;
		}
		if (r.readyState==4 && r.status==200) {
			//console.log(data)
			data = JSON.parse(r.responseText);
			if (data.error.code == 1) {
				document.getElementById('info').innerHTML = 'Response contains an error.'
			}
			else {
				//createtable(data);
				document.getElementById('info').innerHTML = 'Jibbbbyyyyyyy.'
				reset_form(obj)
			}
			return
		};
	};
	r.send(JSON.stringify(params));
}

function send_form2(obj) {

	
	// check values
	var value1 = document.getElementById("targettime").value
	var value2 = "-" + document.getElementById("calories").value
	var value3 = document.getElementById("description").value
	
	
	if (isNaN(value2) || value2 == "") {
		alert("«calories» is not a number");
		return false;
	
	}
	
	if (value1 == "") {
		alert("date not set");
		return false;
	}
	
	// create a json request object
	var params = {
		targetdate: value1,
		calories: value2,
		description: value3
	}
	
	var r = new XMLHttpRequest();
	r.open("POST", "/example", true);
	r.setRequestHeader("Content-Type","application/json; charset=utf-8");
	r.onreadystatechange = function () {
		switch (r.readyState) {
			case 0:
				document.getElementById('info').innerHTML = 'request not initialized. Status: ' + r.statusText;
				break;
			case 1:
				document.getElementById('info').innerHTML = 'server connection established. Status: ' + r.statusText;
				break;
			case 2:
				document.getElementById('info').innerHTML = 'request received. Status: ' + r.statusText;
				break;
			case 3:
				document.getElementById('info').innerHTML = 'processing request. Status: ' + r.statusText;
				break;
			case 4:
				document.getElementById('info').innerHTML = 'request finished and response is ready. Status: ' + r.statusText;
				break;
		}
		if (r.readyState==4 && r.status==200) {
			//console.log(data)
			data = JSON.parse(r.responseText);
			if (data.error.code == 1) {
				document.getElementById('info').innerHTML = 'Response contains an error.'
			}
			else {
				//createtable(data);
				document.getElementById('info').innerHTML = 'Jibbbbyyyyyyy.'
				reset_form(obj)
			}
			return
		};
	};
	r.send(JSON.stringify(params));
}

function send_formbody(obj) {

	
	// check values
	var value1 = document.getElementById("targettime").value
	var value2 = document.getElementById("lowerleg").value
	var value3 = document.getElementById("thigh").value
	var value4 = document.getElementById("butt").value
	var value5 = document.getElementById("belly").value
	var value6 = document.getElementById("chest").value
	var value7 = document.getElementById("shoulder").value
	var value8 = document.getElementById("neck").value
	var value9 = document.getElementById("upperarm").value
	var value10 = document.getElementById("forearm").value
	
	
	if (value1 == "") {
		alert("date not set");
		return false;
	}
	
	if (isNaN(value2) || value2 == "") {
		alert("«Lower leg» is not a number");
		return false;
	
	}
	
	if (isNaN(value3) || value3 == "") {
		alert("«Thigh» is not a number");
		return false;
	
	}
	if (isNaN(value4) || value4 == "") {
		alert("«butt» is not a number");
		return false;
	
	}
	
	if (isNaN(value5) || value5 == "") {
		alert("«Belly» is not a number");
		return false;
	
	}
	
	if (isNaN(value6) || value6 == "") {
		alert("«Chest» is not a number");
		return false;
	
	}
	
	if (isNaN(value7) || value7 == "") {
		alert("«Shoulder» is not a number");
		return false;
	
	}
	
	if (isNaN(value8) || value8 == "") {
		alert("«Neck» is not a number");
		return false;
	
	}
	
	if (isNaN(value9) || value9 == "") {
		alert("«Upper arm» is not a number");
		return false;
	
	}
	
	if (isNaN(value10) || value10 == "") {
		alert("«Forearm» is not a number");
		return false;
	
	}
	
	// create a json request object
	var params = {
		targetdate: value1,
		lowerleg: value2,
		thigh: value3,
		butt: value4,
		belly: value5,
		chest: value6,
		shoulder: value7,
		neck: value8,
		upperarm: value9,
		forearm: value10
	}
	
	var r = new XMLHttpRequest();
	r.open("POST", "/body", true);
	r.setRequestHeader("Content-Type","application/json; charset=utf-8");
	r.onreadystatechange = function () {
		switch (r.readyState) {
			case 0:
				document.getElementById('info').innerHTML = 'request not initialized. Status: ' + r.statusText;
				break;
			case 1:
				document.getElementById('info').innerHTML = 'server connection established. Status: ' + r.statusText;
				break;
			case 2:
				document.getElementById('info').innerHTML = 'request received. Status: ' + r.statusText;
				break;
			case 3:
				document.getElementById('info').innerHTML = 'processing request. Status: ' + r.statusText;
				break;
			case 4:
				document.getElementById('info').innerHTML = 'request finished and response is ready. Status: ' + r.statusText;
				break;
		}
		if (r.readyState==4 && r.status==200) {
			//console.log(data)
			data = JSON.parse(r.responseText);
			if (data.error.code == 1) {
				document.getElementById('info').innerHTML = 'Response contains an error.'
			}
			else {
				//createtable(data);
				document.getElementById('info').innerHTML = 'Jibbbbyyyyyyy.'
				reset_formbody(obj)
			}
			return
		};
	};
	r.send(JSON.stringify(params));
}

function reset_form() {
	var targettime = document.getElementById("targettime")
	var currentDate = new Date();
	var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
	var localDate = new Date(currentDate.getTime() - timezoneOffset);
	var localDateISOString = localDate.toISOString().replace('Z', '');
	localDateISOString = localDateISOString.substring(0,localDateISOString.length-4);
	targettime.value = localDateISOString
	document.getElementById("calories").value = ""
	document.getElementById("description").value = ""
}

function reset_formbody() {
	var targettime = document.getElementById("targettime")
	var currentDate = new Date();
	var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
	var localDate = new Date(currentDate.getTime() - timezoneOffset);
	var localDateISOString = localDate.toISOString().replace('Z', '');
	localDateISOString = localDateISOString.substring(0,localDateISOString.length-4);
	targettime.value = localDateISOString
	document.getElementById("lowerleg").value = ""
	document.getElementById("thigh").value = ""
	document.getElementById("butt").value = ""
	document.getElementById("belly").value = ""
	document.getElementById("chest").value = ""
	document.getElementById("shoulder").value = ""
	document.getElementById("neck").value = ""
	document.getElementById("upperarm").value = ""
	document.getElementById("forearm").value = ""
}



