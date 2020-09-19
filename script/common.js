/*====================================
    Preloader
.   =================================== */

$('document').ready(function(){
    setTimeout(function(){
        $('#preloader').fadeOut(500);
    }, 500);
});

/*=======================================
    Load Navbar
.   ===================================== */

$.get("navbar.html", function(data){
    $("#loadNavbar").after(data);
    $("#loadNavbar").remove();
});

//Navbar scroll effect
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    
    if(scroll > 10){
        $('#navigationbar').addClass("nav-after-scroll");
    }
    else{
        $('#navigationbar').removeClass("nav-after-scroll");
    }
});

/*=======================================
    Load Footer
.   ===================================== */

$.get("footer.html", function(data){
    $("#loadFooter").after(data);
    $("#loadFooter").remove();
});

