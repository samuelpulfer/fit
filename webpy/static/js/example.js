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






