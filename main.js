window.onload = function() {
	var img = document.createElement("img");
	img.src = "fist.png";
	img.className = "fist";
	img.style.left = img.style.top = "0px";
	document.body.appendChild(img);
	window.onmousemove = function(e) {
		img.style.left = Math.floor(e.clientX) - 0.5*img.width + "px";
		img.style.top = Math.floor(e.clientY) - 0.5*img.height + "px";
	}
}