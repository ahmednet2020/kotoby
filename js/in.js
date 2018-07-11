var user1 = ["root"],
    pass1 = ["55555"],
    stat = localStorage.getItem("stat1");
//login
function loing() {
    "use strict";
    user1.push(localStorage.getItem("username"));
    pass1.push(localStorage.getItem("password"));
    var userlogin = document.getElementById("t1").value,
        passlogin = document.getElementById("t2").value,
        test1 = user1.indexOf(userlogin),
        test2 = pass1.indexOf(passlogin);
    if ((test1 !== -1) && (test2 !== -1)) {
        localStorage.setItem("stat1", "true");
        document.getElementById("out").style.visibility = ("hidden");
        document.getElementById("in").style.visibility = ("visible");
        document.getElementById("slidbutton").style.visibility = ("visible");
        document.getElementById("username1").innerHTML = (" : " + localStorage.getItem("username").toUpperCase());
   
    } else {
        localStorage.setItem("stat1", "false");
        alert("wrong");
    }

}
//out

function out() {
    "use strict";
    localStorage.setItem("stat1", "false");
    document.getElementById("in").style.visibility = ("hidden");
    document.getElementById("slidbutton").style.visibility = ("hidden");
    document.getElementById("out").style.visibility = ("visible");
    window.location.assign("./index.html");
}

