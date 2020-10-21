$(document).ready(function(){
    $("#menu").click(function(){
        $(".menu").toggleClass("close");
        $(".n_c").toggleClass("close");
        $("#content_s_1").toggleClass("close");
        $("#content_s_2").toggleClass("close");
        $("#content_s_3").toggleClass("close");
    })
})

window.addEventListener("scroll", function(){
    var NavBar = document.getElementById("nav");
    NavBar.classList.toggle("sticky",scrollY > 0);
});

function c_d() {
    var d = new Date().getFullYear()
    document.getElementById("year").innerHTML = d
}

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
    document.getElementById("time").innerHTML = day + "." + month + "." + year + ' ' + hr + "." + min;
    var time = setTimeout(function () { startTime() }, 2000);
}

function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
