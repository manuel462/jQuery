$(document).ready(function(){
//mover elemento por la pagina
$('.elemento').draggable();

//redimensionar
$('.elemento').resizable();

//selelcionar y ordenar elementos
//$('.lista-seleccionable ').selectable();
$('.lista-seleccionable ').sortable({
	update:function (event, ui) {
	console.log("ha cambiado la lista"); 
	}
});


//drop
$('#elemento-movido').draggable();
$('#area').droppable({
drop: function(){
	console.log("has soltado algo dentro del area");
}
});


//efectos
$('#mostrar').click(function () {
	$(".caja-efectos").toggle("shake",4000);
});


//tooltip
$(document).tooltip();


//dialogo
$("#lanzar-popup").click(function(){
$("#popup").dialog();
});


//datepicket
$("#calendario").datepicker();

//tabs
$("#pestanas").tabs();

});