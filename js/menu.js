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
