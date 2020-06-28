$(document).ready(function(){
	$("#menu").click( function() {
        $(".menu").toggleClass("close");
        $(".nav-links_m").toggleClass("close");
        $(".main-content").toggleClass("close");
  });
});