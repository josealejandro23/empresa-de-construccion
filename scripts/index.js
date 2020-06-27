let x = $(document);
x.ready(inicio);

function inicio() {
	/* Añadir clases al navbar al hacer scroll  */
	$(window).scroll(function () {
		var pos;
		if ($(window).scrollTop() >= 450) {
			$(".navbar-menu").addClass("navbar-sticky animate__fadeInDown");
			pos = 1;
		}
		if ($(window).scrollTop() < 450) {
			$(".navbar-menu").removeClass("navbar-sticky animate__fadeInDown");
			pos = 0;
		}
	});

	let item = $(".item");
	item.hover(
		ingreso,
		salida
	); /* ? añade estilos al hacer hover sobre el owl carousel */
	let img = $(".img-proyecto");
	img.hover(ingresoImg, salidaImg);
	let x = $("#todos");
	x.click(verTodos);
	$("#filtros").click(filtros);
	$("#sistemas").click(sistemas);
	$("#trampas").click(trampas);
}

function ingreso() {
	$(this).find("h3").removeClass("titulo-hoverOut");
	$("img", this).removeClass("img-out");
	$(this).find("h3").addClass("titulo-hoverIn");
	$("img", this).addClass("img-in");
}

function salida() {
	$("h3", this).removeClass("titulo-hoverIn");
	$("img", this).removeClass("img-in");
	$(this).children("h3").addClass("titulo-hoverOut");
	$("img", this).addClass("img-out");
}

function ingresoImg() {
	$("img", this).removeClass("imgPro-out");
	$("img", this).addClass("imgPro-in");
	$(".mensaje-proyecto", this).removeClass(
		"animate__animated animate__fadeOutDown hide-mensaje-proyecto"
	);
	$(".mensaje-proyecto", this).addClass(
		"animate__animated animate__fadeInUp show-mensaje-proyecto"
	);
}

function salidaImg() {
	$("img", this).removeClass("imgPro-in");
	$("img", this).addClass("imgPro-out");
	$(".mensaje-proyecto", this).removeClass(
		"animate__animated animate__fadeInUp show-mensaje-proyecto"
	);
	$(".mensaje-proyecto", this).addClass(
		"animate__animated animate__fadeOutDown hide-mensaje-proyecto"
	);
}

function verTodos() {
	$(".img-proyecto")
		.removeClass("ocultar-img-proyecto animate__animated animate__fadeOut")
		.addClass("animate__animated animate__fadeIn");
}

function filtros() {
	$(".sistemas").addClass(
		"animate__animated animate__fadeOut ocultar-img-proyecto"
	);
	$(".trampas").addClass(
		"animate__animated animate__fadeOut ocultar-img-proyecto"
	);
	$(".filtros")
		.removeClass("ocultar-img-proyecto animate__animated animate__fadeOut")
		.addClass("animate__animated animate__fadeIn");
}

function trampas() {
	$(".sistemas").addClass(
		"animate__animated animate__fadeOut ocultar-img-proyecto"
	);
	$(".filtros").addClass(
		"animate__animated animate__fadeOut ocultar-img-proyecto"
	);
	$(".trampas")
		.removeClass("ocultar-img-proyecto animate__animated animate__fadeOut")
		.addClass("animate__animated animate__fadeIn");
}

function sistemas() {
	$(".filtros").addClass(
		"animate__animated animate__fadeOut ocultar-img-proyecto"
	);
	$(".trampas").addClass(
		"animate__animated animate__fadeOut ocultar-img-proyecto"
	);
	$(".sistemas")
		.removeClass("ocultar-img-proyecto animate__animated animate__fadeOut")
		.addClass("animate__animated animate__fadeIn");
}
