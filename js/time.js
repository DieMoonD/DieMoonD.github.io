function startTime() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("time").innerHTML = day + "/" + month + "/" + year + ' ' + hr + "." + min;
    var time = setTimeout(function () { startTime() }, 500);
}

function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}