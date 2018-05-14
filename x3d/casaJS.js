function forward(){
	var speed = parseFloat(document.getElementById("viewpoint").getAttribute("fieldofview"))+0.1
	document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;
}

window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(e)
{
	document.getElementById("orientation_id").innerHTML = e.alpha.toFixed(1) + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);
	var viewpoint = document.getElementById("id_viewpoint");
	viewpoint.setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
}