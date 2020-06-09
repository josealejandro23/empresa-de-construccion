let x = $(document);
x.ready(inicio);

function inicio() {
	let x = $("#left");
	x.click(retroceder);
	x = $("#right");
	x.click(avanzar);
	var p = 1;

	function retroceder() {
		let x = $("#imagen");
		if (p == 1) {
			x.html('<img src="images/agua3.jpg" class="imagen" alt="" />');
			p = 3;
			return;
		}
		if (p == 2) {
			x.html('<img src="images/agua1.jpg" class="imagen" alt="" />');
			p = 1;
			return;
		}
		if (p == 3) {
			x.html('<img src="images/agua2.jpg" class="imagen" alt="" />');
			p = 2;
			return;
		}
	}

	function avanzar() {
		let x = $("#imagen");
		if (p == 1) {
			x.html('<img src="images/agua2.jpg" class="imagen" alt="" />');
			p = 2;
			return;
		}
		if (p == 2) {
			x.html('<img src="images/agua3.jpg" class="imagen" alt="" />');
			p = 3;
			return;
		}
		if (p == 3) {
			x.html('<img src="images/agua1.jpg" class="imagen" alt="" />');
			p = 1;
			return;
		}
	}
}
