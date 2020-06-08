function responseAjax() {
    // we are only interested in readyState of 4, i.e. “loaded”
    if(myRequest.readyState == 4) {
        // if server HTTP response is “OK”
        if(myRequest.status == 200) {
             alert(“The server said: “ + myRequest.responseText);
        } else {
            // issue an error message for any other HTTP response
            alert(“An error has occurred: “ + myRequest.statusText);
        }
    }
}
