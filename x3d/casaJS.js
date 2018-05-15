function forward(){
	//var speed = parseFloat(document.getElementById("viewpoint").getAttribute("fieldofview"))-0.1;
	//document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;
	var pos = document.getElementById("viewpoint").getAttribute("position");
	var z = pos.split(',');
	var speed = parseFloat(z[2])-0.05;
	document.getElementById("viewpoint").setAttribute("position", "0,2," + speed.toString()) ;
}

function backwards(){
	//var speed = parseFloat(document.getElementById("viewpoint").getAttribute("fieldofview"))+0.1;
	//document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;	
	var pos = document.getElementById("viewpoint").getAttribute("position");
	var z = pos.split(',');
	var speed = parseFloat(z[2])+0.05;
	document.getElementById("viewpoint").setAttribute("position", "0,2," + speed.toString()) ;
}

window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(e)
{
	document.getElementById("orientation_id").innerHTML = e.alpha.toFixed(1) + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);
	var viewpoint = document.getElementById("viewpoint");
	viewpoint.setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
}
