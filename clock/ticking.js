function clock() {
    var now = new Date().toLocaleTimeString();
    var text = "Current time is: " + now;

    //document.getElementById("clock").innerHTML = text;

    var time = React.createElement("h1", null, text);
    ReactDOM.render(time, document.getElementById("clock") );
}

clock();
setInterval(clock, 1000);