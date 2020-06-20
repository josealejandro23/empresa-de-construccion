let x = $(document);
x.ready(inicio);

function inicio() {
	let item = $(".item"); 
	item.hover(ingreso, salida); /* ? añade estilos al hacer hover sobre el owl carousel */
}

function ingreso() {
	$(this).find("h3").removeClass("titulo-hoverOut");
	$('img',this).removeClass('img-out');
	$(this).find("h3").addClass("titulo-hoverIn");
	$('img',this).addClass('img-in');
}

function salida() {
	$("h3", this).removeClass("titulo-hoverIn");
	$('img',this).removeClass('img-in');
	$(this).children("h3").addClass("titulo-hoverOut");
	$('img',this).addClass('img-out');
}
