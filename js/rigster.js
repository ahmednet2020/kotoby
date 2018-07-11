function rig() {
    "use strict";
    var user_1 = document.getElementById("text_1").value,
        password_1 = document.getElementById("text_2").value,
        password_2 = document.getElementById("text_3").value,
        fname = document.getElementById("fname1").value,
        lname = document.getElementById("lname1").value,
        day = document.getElementById("day1").value,
        month = document.getElementById("mon1").value,
        year = document.getElementById("year1").value;
    if ((user_1.length !== 0) && (password_1.length !== 0) && (password_2.length !== 0) && (password_1 === password_2) && (fname.length !== 0) && (lname.length !== 0) && (day !== "اليوم") && (month !== "الشهر") && (year !== "السنه")) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("stat1", "false");
            localStorage.setItem("username", user_1);
            localStorage.setItem("password", password_1);
            window.alert("تم التسجيل بنجاح" + "\n" + "اسم المستخدم  " + user_1 + "\n" + "  كلمه المرور   " + password_1);
            window.location.assign("./index.html");
        } else {alert("Sorry, your browser does not support web storage..."); }
    } else { alert("try again"); }
}
