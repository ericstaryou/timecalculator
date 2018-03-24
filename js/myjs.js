function sum(a,b) {
        var n1 = parseInt(document.getElementById(a).value);
        var n2 = parseInt(document.getElementById(b).value);
        	
        var sum = n1 + n2;

  		var s= document.getElementById("s1");
  		s.innerHTML = sum;
		
}

function calcTotalSleep(a,b,c) {

		//input
        var sleep_pd = parseInt(document.getElementById(a).value);
        var death = parseInt(document.getElementById(b).value);
        var current = parseInt(document.getElementById(c).value);	

        //totol hour of sleep formula
        var total_sleep = ((sleep_pd*365)*(death-current))/(365*24);

  		var s = document.getElementById("s1");
  		s.innerHTML = total_sleep;
}

function storeSleep(key, value){
	localStorage.setItem(key, document.getElementById(value).value);
}

function retrieveSleep(){
	document.getElementById("r1").innerHTML = localStorage.getItem("sleepPerDay");
}

function navi(filename){
	window.location.href = filename + ".html";
}