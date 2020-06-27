let x = $(document);
x.ready(inicio);

function inicio() {
	/* Añadir clases al navbar al hacer scroll  */
	$(window).scroll(function () {
		var pos;
		if ($(window).scrollTop() >= 450) {
			$(".navbar-menu").addClass("navbar-sticky animate__fadeInDown");
		}
		if ($(window).scrollTop() < 450) {
			$(".navbar-menu").removeClass("navbar-sticky animate__fadeInDown");
		}
	});

	/* Esta función hace que el video modal se silencie al salir de él 
	y permite que siga funcionando al reingresar */
	$("#exampleModal").on("hidden.bs.modal", function (e) {
		$("#exampleModal iframe").attr(
			"src",
			$("#exampleModal iframe").attr("src")
		);
	});


	/* Efectos sobre el owl carousel, selecciona cada item del owlcarousel */
	let item = $(".item");
	item.hover(
		ingreso,
		salida
	); 
	
	/* Función para agregar estilos al entrar al owl carousel */
	function ingreso() {
		$(this).find("h3").removeClass("titulo-hoverOut");
		$("img", this).removeClass("img-out");
		$(this).find("h3").addClass("titulo-hoverIn");
		$("img", this).addClass("img-in");
	}
	
	/* Función para remover estilos al salir al owl carousel */
	function salida() {
		$("h3", this).removeClass("titulo-hoverIn");
		$("img", this).removeClass("img-in");
		$(this).children("h3").addClass("titulo-hoverOut");
		$("img", this).addClass("img-out");
	}
	
	/* Funciones para añadir efectos sobre las imágenes del área elígenos */
	let img = $(".img-proyecto");
	img.hover(ingresoImg, salidaImg);
	/* Funciones para la barra de navegación de la sección elígenos */
	$("#todos").click(verTodos);
	$("#filtros").click(filtros);
	$("#sistemas").click(sistemas);
	$("#trampas").click(trampas);
}

/* Estilos al hacer hover sobre una imágen del área elígenos */
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

/* Estilos al salir del hover sobre una imágen del área elígenos */
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

/* ? Muestra todas las imágenes de elígenos */
function verTodos() {
	$(".img-proyecto")
		.removeClass("ocultar-img-proyecto animate__animated animate__fadeOut")
		.addClass("animate__animated animate__fadeIn");
}

/* ? Muestra solo las imágenes con la clase filtros y oculta las demás */
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

/* ? Muestra solo las imágenes con la clase trampas y oculta las demás */
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

/* ? Muestra solo las imágenes con la clase sistemas y oculta las demás */
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
