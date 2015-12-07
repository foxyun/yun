function drawFox(){
	var textP=document.createElement("p");
	textP.id="foxP";
	textP.className="foxText";
	textP.innerHTML="make By fox";
	textP.style.top=parseInt(screen.availHeight/3)+'px';
	textP.style.left=parseInt(screen.availWidth-200)/2+'px';

	document.body.appendChild(textP);
}

function changeFox1(){
	var textFox=document.getElementById("foxP");
	textFox.style.opacity=0.5;
}

function changeFox2(){
	var textFox=document.getElementById("foxP");
	textFox.style.opacity=0;
}

setTimeout('drawFox()',1000);
setTimeout('changeFox1()',5000);
setTimeout('changeFox2()',10000);