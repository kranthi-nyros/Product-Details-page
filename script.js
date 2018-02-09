function openNav() {
	document.getElementById("mySidenav").style.width = "70%";
	// document.getElementById("flipkart-navbar").style.width = "50%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "rgba(0,0,0,0)";
}


//tooltip//
$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});


//zoom//

function zoomIn(event) {
	var element = document.getElementById("overlay");
	element.style.display = "inline-block";
	var img = document.getElementById("imgZoom");
	var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
	var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;

	element.style.backgroundPosition = (-posX * 2) + "px " + (-posY * 4) + "px";

}

function zoomOut() {
	var element = document.getElementById("overlay");
	element.style.display = "none";
}