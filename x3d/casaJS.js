window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(e)
{
	//document.getElementBy("orientation_id").innerHTML = e.alpha.toFixed(1);/* + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);*/
	//var pos = viewpoint.getAttribute("orientation");
	var viewpoint = document.getElementsByClass("viewpoint");
	
	
	var i;
	for (i = 0; i < viewpoint.length; i++) {
		if(viewpoint[i].getAttribute("set_bind") == "true")
			viewpoint.setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
	}
}

