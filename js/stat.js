var stat = localStorage.getItem("stat1");
//stat
window.onload =
    function () {
        "use strict";
        if (stat === "true") {
            document.getElementById("out").style.visibility = ("hidden");
            document.getElementById("in").style.visibility = ("visible");
            document.getElementById("slidbutton").style.visibility = ("visible");
            document.getElementById("username1").innerHTML = (" : " + localStorage.getItem("username").toUpperCase());
        } else {
            document.getElementById("in").style.visibility = ("hidden");
            document.getElementById("slidbutton").style.visibility = ("hidden");
            document.getElementById("out").style.visibility = ("visible");
        }
    };


