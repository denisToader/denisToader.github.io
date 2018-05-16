window.addEventListener("deviceorientation", on_device_orientation)

function on_device_orientation(e)
{
	document.getElementById("orientation_id").innerHTML = e.alpha.toFixed(1) + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);
	var viewpoint = document.getElementById("viewpoint");
	var pos = viewpoint.getAttribute("orientation");
	viewpoint.setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
	
	document.getElementById("viewpp").innerHTML = pos;
}

function forward() {
	/*var viewpoint = document.getElementById("viewpoint");
	var pos = viewpoint.getAttribute("orientation");
	document.getElementById("viewpp").innerHTML = pos;*/
	
	var x3dElem  = document.getElementById('x3dElement);
	var vMatInv  = x3dElem.runtime.viewMatrix().inverse();

	var viewDir  = vMatInv.multMatrixVec(new x3dom.fields.SFVec3f(0.0, 0.0, -1.0));
	var upVec    = vMatInv.multMatrixVec(new x3dom.fields.SFVec3f(0.0, 1.0,  0.0));
	var rightVec = viewDir.cross(upVec);
	
	var viewpoint = document.getElementById("viewpoint");
	var pos = viewpoint.getAttribute("position");
	var posArray = pos.split(',');
	viewpoint.setAttribute("position", parseFloat(posArray[0])-pos.x + "," + 2 + "," + parseFloat(posArray[2])-pos.z);
}
