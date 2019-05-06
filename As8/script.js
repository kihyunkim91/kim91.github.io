var img = document.getElementById('decoration');
var dogimg = document.getElementById('dog');
img.style.left = "100px";
dogimg.addEventListener("click", function(event) {
	var x = event.clientX;
	var y = event.clientY;
	var img = document.getElementById('decoration')
	img.style.left = x + "px";
	img.style.top = y + "px";
});