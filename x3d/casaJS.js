function forward(){
	var speed = parseInt(document.getElementById("viewpoint").getAttribute("fieldofview"))+0.1
	document.getElementById("viewpoint").setAttribute("fieldofview", speed.toString()) ;
}