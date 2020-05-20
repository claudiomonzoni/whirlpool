// JavaScript Document
 $(document).ready(function() {
	 
var wi = $(window).width();
var al = $(window).height();

$(window).resize(function () { //cada re ajuste	--------------------------------------------------------------------------
//alert(wi+"ancho"+al+"alto");

});

 $("html").niceScroll({cursorcolor:"#ffc000", cursorwidth :"13px", cursorborder:"0px", cursorborderradius:"0px", cursoropacitymin :"1", zindex:"999"});
//slide inicial

// selector de estufa abrir o cerrar



$("#video_p").on('play', function() {

  $('#texto_video').fadeOut(400);
});

$("#video_p").on('pause', function() {

  $('#texto_video').fadeIn(400);
});

$("#elplay").click(function() {
$("#video_p").get(0).play()
});


$("#cubeta, #cubeta2, #cubeta3").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  stopOnHover: true,
	  mouseDrag: true,
	  pagination: true
	  
  });
  
  $("#parrillas_gal").owlCarousel({
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  stopOnHover: true,
	  mouseDrag: true,
	  pagination: true
	  
  });
  
  $("#minis").owlCarousel({
	  autoPlay: 5000,
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
	  mouseDrag: true,
	  pagination: true
	  
  });
  
//carrusel de productos


$("#estufas1, #estufas2, #estufas3").owlCarousel({
    items : 4,
	pagination: false
	  
  });
  
  $("#estufas4").owlCarousel({
    items : 4,
	pagination: false,
	scrollPerPage: true,
	slideSpeed : 1000
	  
  });
  
  

// btns

$("#der_estufas1").click(function(e){ $("#estufas1").trigger('owl.next'); e.preventDefault()})
$("#izq_estufas1").click(function(e){ $("#estufas1").trigger('owl.prev'); e.preventDefault()})

$("#der_estufas2").click(function(e){ $("#estufas2").trigger('owl.next'); e.preventDefault()})
$("#izq_estufas2").click(function(e){ $("#estufas2").trigger('owl.prev'); e.preventDefault()})

$("#der_estufas4").click(function(e){ $("#estufas4").trigger('owl.next'); e.preventDefault()})
$("#izq_estufas4").click(function(e){ $("#estufas4").trigger('owl.prev'); e.preventDefault()})
//filtrar productos

 function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
	
	
} 

var cual = getUrlParameter('technology');


filtrar = function(cual){
var esto= $('ul.menu_pro a')

 if(cual == 'al-piso') {  
		 $('ul.menu_pro li').removeClass('cual_pro');  
		 $('ul.menu_pro a:eq(1)').parent().addClass('cual_pro'); 
		
		 $("div#estufas li").each(function() {  
                 if(!$(this).hasClass(cual)) {  
                     //$(this).animate({opacity:0.5}, 200); 
					  $(this).css("display","none")
					  
                 } else {  
                     //$(this).animate({opacity:1}, 200);  
					  $(this).css("display","block")
                 }  
				 
				 
             });
			 
           
         } else if (cual == 'empotrables'){  
		 $('ul.menu_pro li').removeClass('cual_pro');  
		 $('ul.menu_pro a:eq(2)').parent().addClass('cual_pro');
		 
		 $("div#estufas li").each(function() {  
                 if(!$(this).hasClass(cual)) {  
                     //$(this).animate({opacity:0.5}, 200); 
					  $(this).css("display","none")
					  
                 } else {  
                     //$(this).animate({opacity:1}, 200);  
					  $(this).css("display","block")
                 }  
				 
				 
             });
			 
             
			 }
}

filtrar(cual)
	


 $('ul.menu_pro a').click(function(e) {  
 


        $('ul.menu_pro li').removeClass('cual_pro');  
		$(this).parent().addClass('cual_pro'); 
		e.preventDefault()
		 
         var filterVal = $(this).text().toLowerCase().replace(' ','-'); 
                   
         if(filterVal == 'todas') {  
             //$('div#estufas li').animate({opacity:1}, 200);  
			 $('div#estufas li').css("display","block")
         } else {  
		 
             $("div#estufas li").each(function() {  
                 if(!$(this).hasClass(filterVal)) {  
                     //$(this).animate({opacity:0.5}, 200); 
					  $(this).css("display","none")
					  
                 } else {  
                     //$(this).animate({opacity:1}, 200);  
					  $(this).css("display","block")
                 }  
				 
				 
             });  
         }  
           
     });  
	 
	 



$(".cerrar_abrir").click(function(){
	$("#two").toggleClass( "up" );
	
	$("#twoE").toggleClass("estaabierto", "estacerrado")
	
	 if($("#twoE").hasClass("estaabierto")){
	
	
        $('#oneE').animate({opacity:1}, 00);
		$("#twoE").animate({opacity:0}, 00);
		
    }else{
		 
		
        $('#oneE').animate({opacity:0}, 00);
		$("#twoE").animate({opacity:1}, 00);
		
    }
    
})

$(".cerrar_abrir2").click(function(){
	
		$("#two2").toggleClass( "up" );
	
	$("#twoE2").toggleClass("estaabierto", "estacerrado")
	
	 if($("#twoE2").hasClass("estaabierto")){
	
	
        $('#oneE2').animate({opacity:1}, 00);
		$("#twoE2").animate({opacity:0}, 00);
		
    }else{
		 
		
        $('#oneE2').animate({opacity:0}, 00);
		$("#twoE2").animate({opacity:1}, 00);
		
    }
    
})

$(".cerrar_abrir3").click(function(){
	$("#two3").toggleClass( "up" );
	
	$("#twoE3").toggleClass("estaabierto", "estacerrado")
	
	 if($("#twoE3").hasClass("estaabierto")){
	
	
        $('#oneE3').animate({opacity:1}, 00);
		$("#twoE3").animate({opacity:0}, 00);
		
    }else{
		 
		
        $('#oneE3').animate({opacity:0}, 00);
		$("#twoE3").animate({opacity:1}, 00);
		
    }
    
})



//slider
$('#frame').sly({
    horizontal: 1,
    scrollBy: 1,
    mouseDragging: 0,
    swingSpeed: 0.2,
    scrollBar: $('.scrollbar'),
    dragHandle: 4,
	scrollBy:     20,
	clickBar: 1,
    speed: 600,
    startAt: 1
  });

  $("#frame").bind("mousewheel", function() {
         return false;
     });

	 
$(".slidee li").hover(function(){
	$("img", this).addClass("elzoom")
	  $('.elroll', this).animate({opacity:0.9}, 200);
   
		  }, function(){
			 $("img", this).removeClass("elzoom")
			 $('.elroll', this).animate({opacity:0}, 200);
			 
	
		 });
		 
		 




	  if (screen.width <= 800) {

    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
{
window.location ="/movil.html";
}

  }
    
	if(wi > 1000){
		
		    if(/Android/i.test(navigator.userAgent))
{

}else{
	
	$(window).load(function() {
   //s.refresh()
   
 skrollr.init({
	 smoothScrolling: true,
	 smoothScrollingDuration:500,
		forceHeight: false,
		});
   
});
	
	
	/*
   var s= skrollr.init({
	 smoothScrolling: true,
	 smoothScrollingDuration:500,
		forceHeight: false,
		
		});
		*/
}
	}




new WOW().init();
    	


/*
$("video")[0].onplay = function () {
  $("#video").css("background","url(imas/video-tran.png)");
};

*/
//links easing
$('#detalles1').scrollTo({ easing: 'easeInOutCubic', speed: 1000 , offset: -160 });
$('#detalles2').scrollTo({ easing: 'easeInOutCubic', speed: 1000 , offset: -160 });
$('#detalles3').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -160 });
$('#escroll').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -160 });
$('#bloqueflamma').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -100 });
$('#bloqueglass').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -100 });
$('#bloquetorch').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -100 });
$('#parrillas').scrollTo({ easing: 'easeInOutCubic', speed: 1000, offset: -100 });


//galeria detalles

$('div.ojo').hover(function(){

	$( ".tip", this).fadeToggle("slow")
	$( ".flecha", this).fadeToggle("slow")
	

})

/*
$('div.ojo').hover(function(){
	$( ".tip", this).css("display","block")
	$( ".tip", this).animate({ 'zoom': 1.1, "opacity": "1"});
	$( ".flecha", this).animate({ 'zoom': 1.1, "opacity": "1"});
	

}, function(){
	var esto = $(this)
	$( ".tip", this).animate({ 'zoom': 1, "opacity": "0"}, function(){$( ".tip", esto).css("display","none");});
	$( ".flecha", this).animate({ 'zoom': 1, "opacity": "0"});
	
	})

*/
$(document).on("scroll", onScroll);

function onScroll(event){
  var $this = $(this),
        $head = $('#head');
    if ($this.scrollTop() > 2000) {
      $("#video_p").get(0).pause()
    } 
}



// formulario http://teachingyou.net/php/simple-php-contact-form-using-ajax/
$("#soporte li a").click(function(){ 
var cualsoy = $(this).attr("href")
// tab de soporte
$("#soporte li").each(function(){
var cualvoy = $("a",this).attr("href")
if(cualsoy==cualvoy){
	$("img:nth-child(2)", this).fadeIn("slow")
}else{
	$("img:nth-child(2)", this).fadeOut("slow")
}
})

})

/* acordeon*/
	$('div.acoBtn').click(function() {
		$('div.acoConte').slideUp('slow');	
		$(this).next().slideDown('slow');
	});
 
	//esconder resto
	$("div.acoConte").hide();
	

$('#submit').click(function(){
$.post("send2.php", $("#mycontactform").serialize(),  function(response) {
$('#success').html(response);
//$('#success').hide('slow');
});
return false;
 
});



 $('#menu_productos').waypoint('sticky', {
  offset: 100
});


	
	
	
	

	
$('#mostrarAqui').gallery({source: "#minis img", animate: false, selectClass: "cual"});

	
  
   });