function getXMLHttpRequest() {
	try {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e) {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
	}
	catch(e) {
		return new XMLHttpRequest();
	}
}

var myRequest = getXMLHttpRequest();

function callAjax() {
	// declare a variable to hold some information to pass to the server
	var lastname = ‘Smith’;
	// build the URL of the server script we wish to call
	var url = “myserverscript.php?surname=” + lastname;
	// generate a random number
	var myRandom=parseInt(Math.random()*99999999);
	// ask our XMLHttpRequest object to open a server connection
	myRequest. open("GET", url + "&rand=" + myRandom, true);
	// prepare a function responseAjax() to run when the response has arrived
	myRequest.onreadystatechange = responseAjax;
	// and finally send the request
	myRequest.send(null);
}
