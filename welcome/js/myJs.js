var myBody=document.getElementById("myBody");
var i=0;

function drawSnow(){
	var snowDiv=document.createElement("div");
	snowDiv.id="snow"+i;
	snowDiv.className="snowClass";
	snowDiv.innerHTML="*";
	snowDiv.style.top=parseInt(screen.availHeight-100)*(Math.random()>0.3?Math.random():0)+'px';
	snowDiv.style.left=parseInt(screen.availWidth-40)*Math.random()+'px';

	myBody.appendChild(snowDiv);

	snowPlay(snowDiv.id,snowDiv.id,8*Math.random());

	i++;
	var time=100*Math.random()*Math.random();
	setTimeout('drawSnow()',time);
}

function drawText1(){
	var textDiv1=document.createElement("div");
	textDiv1.id="text1"+i;
	textDiv1.className="textClass";
	var textA1=document.createElement("a");
	textA1.id="a1"+i;
	textA1.href="http://littlelittlefox.sinaapp.com/mail/";
	textA1.target="_blank";
	textA1.innerHTML="邮箱&网盘";
	textDiv1.appendChild(textA1);
	textDiv1.style.top=parseInt(screen.availHeight-100)*(Math.random()>0.3?Math.random():0)+'px';
	textDiv1.style.left=parseInt(screen.availWidth-40)*Math.random()+'px';
	myBody.appendChild(textDiv1);

	textPlay(textDiv1.id,textDiv1.id,3);

	setTimeout('drawText1()',30000);
}

function drawText2(){
	var textDiv2=document.createElement("div");
	textDiv2.id="text2"+i;
	textDiv2.className="textClass";
	var textA2=document.createElement("a");
	textA2.id="a2"+i;
	textA2.href="http://littlelittlefox.sinaapp.com/hellCommunication/";
	textA2.target="_blank";
	textA2.innerHTML="地狱通信";
	textDiv2.appendChild(textA2);
	textDiv2.style.top=parseInt(screen.availHeight-100)*(Math.random()>0.3?Math.random():0)+'px';
	textDiv2.style.left=parseInt(screen.availWidth-40)*Math.random()+'px';
	myBody.appendChild(textDiv2);

	textPlay(textDiv2.id,textDiv2.id,3);

	setTimeout('drawText2()',30000);
}

function drawText3(){
	var textDiv3=document.createElement("div");
	textDiv3.id="text3"+i;
	textDiv3.className="textClass";
	var textA3=document.createElement("a");
	textA3.id="a3"+i;
	textA3.href="http://littlelittlefox.sinaapp.com/FoxPlayer/";
	textA3.target="_blank";
	textA3.innerHTML="FoxPlayer";
	textDiv3.appendChild(textA3);
	textDiv3.style.top=parseInt(screen.availHeight-100)*(Math.random()>0.3?Math.random():0)+'px';
	textDiv3.style.left=parseInt(screen.availWidth-40)*Math.random()+'px';
	myBody.appendChild(textDiv3);

	textPlay(textDiv3.id,textDiv3.id,3);

	setTimeout('drawText3()',30000);
}

function drawText4(){
	var textDiv4=document.createElement("div");
	textDiv4.id="text4"+i;
	textDiv4.className="textClass";
	var textA4=document.createElement("a");
	textA4.id="a4"+i;
	textA4.href="http://littlelittlefox.sinaapp.com/Time/";
	textA4.target="_blank";
	textA4.innerHTML="Time";
	textDiv4.appendChild(textA4);
	textDiv4.style.top=parseInt(screen.availHeight-100)*(Math.random()>0.3?Math.random():0)+'px';
	textDiv4.style.left=parseInt(screen.availWidth-40)*Math.random()+'px';
	myBody.appendChild(textDiv4);

	textPlay(textDiv4.id,textDiv4.id,3);

	setTimeout('drawText4()',30000);
}

function removeElement(element){
	var parentElement=element.parentNode;
	if(parentElement)
		parentElement.removeChild(element);
}

function snowPlay(sDiv,e,speed){
	if(speed<3)
		speed=3;

	var sDiv1=document.getElementById(sDiv);
	sDiv1.style.top=parseInt(sDiv1.style.top)+speed+'px';
	if(parseInt(sDiv1.style.top)<parseInt(screen.availHeight-100)){
		 e=setTimeout("snowPlay(\""+sDiv+"\",\""+e+"\","+speed+")",20);
	}else{
		// clearTimeout(e);
		// removeElement(sDiv1);
		// speed=null;
	}
}

function textPlay(tDiv,e,speed){
	var tDiv1=document.getElementById(tDiv);
	tDiv1.style.top=parseInt(tDiv1.style.top)+speed+'px';
	if(parseInt(tDiv1.style.top)<parseInt(screen.availHeight-100)){
		e=setTimeout("textPlay(\""+tDiv+"\",\""+e+"\","+speed+")",100);
	}else{
		clearTimeout(e);
		removeElement(tDiv1);
		speed=null;
	}
}

drawSnow();
drawText1();
drawText2();
drawText3();
drawText4();
