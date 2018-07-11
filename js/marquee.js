var contant1,
    comentint,
    butstr;
butstr = document.getElementById("marq");
comentint = " اهلا وسهلا فى موقع كتبى "  + "<br/>" + " لدينا افضل الكتب ";
function marquee1() {
    "use strict";
    contant1 = window.prompt("ادخل تعليق", "");
    comentint +=  "<br/>" + contant1;
    butstr.innerHTML = comentint;
}

function open1() {
    "use strict";
    window.location.assign("./registration.html");
}