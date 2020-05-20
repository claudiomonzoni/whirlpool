// JavaScript Document
 $(document).ready(function() {
	
var wi = $(window).width();
var al = $(window).height(); 

var ruta = window.location.pathname; // returns path only
var laurl = window.location.href;     // returns full url
var laurlsinmovil = ruta.replace('/movil/','/');


 $('#lista').prop('selectedIndex',0);
  $('#lista2').prop('selectedIndex',0);
$("div#productos .producto").prop('selectedIndex', 0);
  
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
{

}else{
    //window.location = laurlsinmovil
}
	

$(window).resize(function () { //cada re ajuste	--------------------------------------------------------------------------
//alert(wi+"ancho"+al+"alto");

});

 
 
 //----------------------------------------------------------------menu movil
 $('#menu').slicknav({
	label: '',
	duration: 500,
	duplicate: false,
	//closeOnClick: true,
	easingOpen: "easeOutCubic",
	closedSymbol: "&#9660;"
 });
 
 $(".slicknav_btn").click(function(){

$(".slicknav_menu, .slicknav_btn").toggleClass("fondo_gris")
$("#logo_menu_color").fadeToggle("fast")
$(".slicknav_menu .slicknav_icon-bar ").toggleClass("blanco_iconomenu")

var altu = $(".slicknav_menu").height()
if( altu !== 70){
	$(".slicknav_menu").animate({height: 70}, 'slow')

}else{
	$(".slicknav_menu").animate({height: al}, 'slow')

}

/*$('.menu').slicknav('close');*/
	 
	 })
	  //----------------------------------------------------------------fin menu movil
	  
	  //carrusel
$("#principal").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  stopOnHover: true,
	  mouseDrag: true,
	  pagination: true
	  
  });
  
  $("#gal").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  stopOnHover: true,
	  mouseDrag: true,
	  pagination: true
	  
  });
  
    $("#recetas").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  stopOnHover: true,
	  mouseDrag: true,
	  pagination: true
	  
  });
  
      $("#bene").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  mouseDrag: true,
	  pagination: true,
	  autoPlay: 5000
	  
  });
  
  
  //video
  $("#video_p").click(function() {
$("#video_p").get(0).play()
});

/*-------------------------------------------------------------------acordeon*/

$('#toggle-view li h3').click(function () {
$(".tip").css("display","none");
		var text = $(this).parent().children('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('200');
			$(this).parent().children('span').html('-');	
			$("h3",this).css("opacity","0.5")	
			//$(".ojo").css("display","block");
		} else {
			text.slideUp('200');
			$(this).parent().children('span').html('+');	
			$("h3",this).css("opacity","1")	
			//$(".ojo").css("display","none");
		}
		
	});
	/*------------------------------ojos tips*/
	
	$(".ojo").click(function(){
		var actual = $(".tip", this)
		$(".tip").addClass("nel")
		$(actual).addClass("yep").removeClass("nel")
		
		
		$(".tip").each(function(){
			if($(this).hasClass("nel")){
				$(this).fadeOut()
			}else{
			
				$(actual).fadeToggle('200');
			}
			})

		})
	
	
	/*-----------------------------------------acordeon soporte*/
	/* acordeon*/
	$('div.acoBtn').click(function() {
		$('div.acoConte').slideUp('slow');	
		$(this).next().slideDown('slow');
	});
 
	//esconder resto
	$("div.acoConte").hide();
	
	/*----------------------------------------- productos*/
	



    /*smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
			$('#menu').slicknav('close');
        });
    });


	
// cambiar el estado del menu segun scroll
$(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top -80 <= scrollPos && refElement.position().top-80 + refElement.height() > scrollPos) {
            $('#menu ul li a').removeClass("resalta");
            currLink.addClass("resalta");
        }
        else{
            currLink.removeClass("resalta");
        }
    });
}

*/
// formulario http://teachingyou.net/php/simple-php-contact-form-using-ajax/


$('#submit').click(function(){
$.post("../send2.php", $("#mycontactform").serialize(),  function(response) {
	$('#success').css("display","block");
$('#success').html(response);
//$('#success').hide('slow');
});
return false;
 
});

$("#footer li:eq(0)").css("z-index","100")
$("#footer li:eq(1)").css("z-index","100")

  
   });