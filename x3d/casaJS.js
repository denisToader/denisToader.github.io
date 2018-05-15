function forward(){
	//var speed = parseFloat(document.getElementById("viewpoint").getAttribute("fieldofview"))-0.1;
	//document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;
	/*var pos = document.getElementById("viewpoint").getAttribute("position");
	var axes = pos.split(',');
	var z = parseFloat(axes[2])-0.2;
	document.getElementById("viewpoint").setAttribute("position", axes[0] + "," + axes[1] + "," + z.toString()) ;*/
	zoom(-0.1); //zoom in
}

function backwards(){
	//var speed = parseFloat(document.getElementById("viewpoint").getAttribute("fieldofview"))+0.1;
	//document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;	
	/*var pos = document.getElementById("viewpoint").getAttribute("position");
	var axes = pos.split(',');
	var z = parseFloat(axes[2])+0.2;
	document.getElementById("viewpoint").setAttribute("position", axes[0] + "," + axes[1] + "," + z.toString()) ;*/
	zoom(0.1); //zoom out
}

window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(e)
{
	document.getElementById("orientation_id").innerHTML = e.alpha.toFixed(1) + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);
	var viewpoint = document.getElementById("viewpoint");
	viewpoint.setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
}

function zoom (delta) {
	var x3d = document.getElementById("x3dElement");
	var vpt = x3d.getElementsByTagName("viewpoint")[0];
	vpt.fieldOfView = parseFloat(vpt.fieldOfView) + delta;
}
