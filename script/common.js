/*====================================
    Preloader
.   =================================== */

$('document').ready(function(){
    setTimeout(function(){
        $('#preloader').fadeOut(1000);
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


/*================================================
        Change nav-item active class on scroll
.   ================================================ */

var sections = $('.one-page-section'),
navList = $("#navigationbar").find("ul.navbar-nav");

changeNavItemActiveClass = function ChangeClass() {

    top = $(window).scrollTop();

    $.each(sections, function(i,val) {

      var section = $(this),
        section_top = section.offset().top - 10,
        bottom = section_top + section.height();

        if (top >= section_top) {
           var naItems = navList.find('li');
             $.each(naItems ,function(i,val) {
               var item = $(this);
               item.find("a").removeClass("active");
             });
             navList.find('li [href="#' + section.attr('id') + '"]').addClass('active');
        }

    });
}

$(document).scroll(function(){
    changeNavItemActiveClass();
    console.log("lkdfshg");
});