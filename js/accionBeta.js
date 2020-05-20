// JavaScript Document
 $(document).ready(function() {
	 
var wi = $(window).width();
var al = $(window).height();

$(window).resize(function () { //cada re ajuste	--------------------------------------------------------------------------
//alert(wi+"ancho"+al+"alto");

});

 $("html").niceScroll();
//slide inicial

// selector de estufa abrir o cerrar
$("#carrusel_inicio").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  stopOnHover: true,
	  mouseDrag: true,
	  pagination: true,
	  afterMove: cambiar
	  
	 
 
  });

$(".cerrar_abrir").click(function(){
	$("#two").toggleClass( "up" )
	$("#twoE").toggleClass( "up" )
})
// funcion cambiar menu de selector

 function cambiar(){
var owl = $(".owl-carousel").data('owlCarousel');
var actual = owl.currentItem;

if(actual=="0"){
	$("#menu_selector li").removeClass( "activo" );
	$("#menu_selector li").eq(0).addClass( "activo" );
}
if(actual=="1"){
	$("#menu_selector li").removeClass( "activo" );
	$("#menu_selector li").eq(1).addClass( "activo" );
}
if(actual=="2"){
	$("#menu_selector li").removeClass( "activo" );
	$("#menu_selector li").eq(2).addClass( "activo" );
}

}// fin cambiar


//slider
$('#frame').sly({
    horizontal: 1,
    scrollBy: 1,
    mouseDragging: 0,
    swingSpeed: 0.2,
    scrollBar: $('.scrollbar'),
    dragHandle: 1,
	clickBar: 1,
    speed: 600,
    startAt: 1
  });

  $("#frame").bind("mousewheel", function() {
         return false;
     });
	 
var setSkrollr = function($el, data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var d = data[i],
            px = d[0];
            css = d[1];
        $el.attr('data-' + px, css);
    }
	
	
}

new WOW().init();

jQuery(function($) {
    //setSkrollr($('#secTitulo1'), [[0, 'transform:translateX(150%)'], [500, 'transform:translateX(0%)']]);
	//setSkrollr($('#diagonal'), [[0, 'top:30%'], [800, 'top:0%']]);
	//setSkrollr($('#sub-menu'), [[0, 'left:-100%'], [600, 'left:0']]);
	//seccio 3
	
	  if (screen.width <= 800) {

    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
{
window.location ="/movil.html";
}

  }
    
	if(wi > 1200){
		
		    if(/Android/i.test(navigator.userAgent))
{

}else{
    skrollr.init({
	 smoothScrolling: true,
	 smoothScrollingDuration:500,
		forceHeight: false,
		
		
		});
}
	}
});




/*
$("video")[0].onplay = function () {
  $("#video").css("background","url(imas/video-tran.png)");
};

//links easing
$('#home').scrollTo({ easing: 'easeInOutCubic', speed: 1000 , offset: -80 });
$('#up').scrollTo({ easing: 'easeInOutCubic', speed: 1000 , offset: -80 });
$('#link1').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -100 });
$('#link2').scrollTo({ easing: 'easeInOutCubic', speed: 1000});
$('#link3').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -60 });
$('#link4').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -78 });
$('.agente').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -78 });

*/

$('.ojo').hover(function(){
	$( ".tip", this).toggle("slow")
})

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


// formulario http://teachingyou.net/php/simple-php-contact-form-using-ajax/


$('#submit').click(function(){
$.post("send.php", $("#mycontactform").serialize(),  function(response) {
$('#success').html(response);
//$('#success').hide('slow');
});
return false;
 
});




  
   });