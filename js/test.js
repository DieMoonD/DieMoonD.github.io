window.addEventListener("scroll", function(){
    var NavBar = document.getElementById("nav");
    NavBar.classList.toggle("sticky",scrollY > 0);
});
    