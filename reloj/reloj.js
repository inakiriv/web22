setInterval(showTime,1000)
function showTime() {
var time = new Date() ;
var hour = time.getHours() ; // horas
var minute = time.getMinutes() ; // minutos
var seconds = time.getSeconds() ; // segundos 
var am_pm = "AM"

if (hour>12) {
	hour = hour-12
	am_pm  = "PM"
}
if (hour==0) {
	hour = hour=12
	am_pm = "AM"
}
hour = (hour < 10) ? "0"+ hour: hour;
minute = (minute < 10) ? "0"+ minute: minute;
seconds = (seconds < 10) ? "0"+ seconds: seconds;

var tiempo = hour+":"+minute+":"+seconds+":"+am_pm

document.getElementById("clock").innerHTML=tiempo;
}
showTime();