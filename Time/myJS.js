var Year=document.getElementById("Year");
var Month=document.getElementById("Month");
var Day=document.getElementById("Day");
var Week=document.getElementById("Week");
var Hour=document.getElementById("Hour");
var Minute=document.getElementById("Minute");
var Second=document.getElementById("Second");
var WeekArray=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

function Go(){
	var myDate=new Date();
	var year=myDate.getFullYear();
	var month=myDate.getMonth()+1;
	var day=myDate.getDate();
	var week=myDate.getDay();
	var hour=myDate.getHours();
	var minute=myDate.getMinutes();
	var second=myDate.getSeconds();

	if(month<10)
		month="0"+month;
	if(day<10)
		day="0"+day;
	if(hour<10)
		hour="0"+hour;
	if(minute<10)
		minute="0"+minute;
	if(second<10)
		second="0"+second;

	Year.innerHTML=year;
	Month.innerHTML=month;
	Day.innerHTML=day;
	Week.innerHTML=WeekArray[week];
	Hour.innerHTML=hour;
	Minute.innerHTML=minute;
	Second.innerHTML=second;

	setTimeout('Go()',1000);
}

Go();