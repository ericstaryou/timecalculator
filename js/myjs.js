function sum(a,b) {
        var n1 = parseInt(document.getElementById(a).value);
        var n2 = parseInt(document.getElementById(b).value);
        	
        var sum = n1 + n2;

  		var s= document.getElementById("s1");
  		s.innerHTML = sum;
		
}

//obsolete
function calcTotalSleep(a,b,c) {

		//input
        var current = parseInt(a);
        var death = parseInt(b);
        var sleep_pd = parseInt(c);

        //total hour of sleep formula
        var total_sleep = ((sleep_pd*365)*(death-current))/(365*24);

  		return Math.round(total_sleep);
}

function calcTotalJobHours(a,b,c) {

		//input
        var current = parseInt(a);
        var retire = parseInt(b);	
        var jobhours_pd = parseInt(c);

        //total hour of career formula
        var total_jobhours = ((jobhours_pd*220)*(retire-current))/(365*24);

  		return Math.round(total_jobhours);
}

function storeToLocal(key, value){
	localStorage.setItem(key, document.getElementById(value).value);
}

function retrieveFromLocal(key){
	document.getElementById("r1").innerHTML = localStorage.getItem("sleepPerDay");
}

function navi(filename){
	window.location.href = filename + ".html";
}

function nextStore(key, value, filename){
    storeToLocal(key, value);
    navi(filename);
}