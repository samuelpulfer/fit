function editTable(){
	var targettime = document.getElementById("targettime")
	var currentDate = new Date();
	var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
	var localDate = new Date(currentDate.getTime() - timezoneOffset);
	var localDateISOString = localDate.toISOString().replace('Z', '');
	localDateISOString = localDateISOString.substring(0,localDateISOString.length-4);
	targettime.value = localDateISOString
}

