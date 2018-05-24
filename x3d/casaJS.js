window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(e)
{
	//document.getElementBy("orientation_id").innerHTML = e.alpha.toFixed(1);/* + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);*/
	var viewpoint = document.getElementByClass("viewpoint");
	//var pos = viewpoint.getAttribute("orientation");
	viewpoint.setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
	
}

