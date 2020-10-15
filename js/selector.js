$(document).ready(function(){

	
var rojo =$("#rojo").css("background","red")
                    .css("color","white");

 var amarillo =$("#amarillo").css("background","yellow")
                    .css("color","green");  
  var verde =$("#verde").css("background","green")
                    .css("color","white");
console.log("rojo"); 


//selectores de clases
 
 var mi_clase =$('.zebra').css("pading","5px")




$('.sin_borde').click(function(){
$(this).addClass('zebra	');
});

//selectores de etiquetas
var parrafos=$('p').css("cursor","pointer");

parrafos.click(function (){
	 var that=$(this);
	if (that.hasClass('zebra')) {
		that.addClass('grande');
	}
});

//SELECTORES DE ATRIBUTO

$('[title="google"]').css('background','#ccc');
$('[title="facebook"]').css('background','#red');


//otros

 var busqueda = $("#elemento2").parent().parent().find('.resaltado');

	console.log(busqueda);
});