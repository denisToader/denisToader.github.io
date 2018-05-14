function forward(){
	var speed = parseFloat(document.getElementById("viewpoint").getAttribute("fieldofview"))+0.1
	document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;
}