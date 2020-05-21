const clock = document.querySelector(".clock");
var wakeupTime = 7;
var noon = 12;
var lunchtime = 10;
var naptime = lunchtime+2;
var partytime;
var evening = 18;



function showTime(){
	let date = new Date;
let hour = date.getHours()
let min =  date.getMinutes()
let sec =  date.getSeconds()

var m = (hour>12?`PM`:`AM`);
var hour1 = (hour>12)?hour-12:hour
console.log(m)
console.log(hour1)
if(hour==0&&m==`AM`){
	if(min==0&&sec==0){
		hour=12;
		console.log(`night`)

	}else{
		hour=12;
		m = 'AM'
	}
}
if (hour==0&&m==`PM`) {
	if(min==0&&sec==0){
		hour=12;
		console.log(`NOON`)

	}else{
		hour=12;
		m = 'PM'
	}

}
clock.innerText = `${hour1}:${min}:${sec} ${m}!!!`

// setInterval(function(sec){
// 	clock.innerText = `${hour1}:${min}:${5}`
// 	console.log(1000)
	
// showTime()

// },1000)

}setInterval(showTime, 1000);


function updateTime(){
	let date = new Date;
	let time = date.getHours()
	
	
	if(time==partytime){
		console.log(`party`)
		document.querySelector(".image").src = "js/partyTime.jpg"
		document.querySelector("#timeEvent").innerText= "PARTY TIME!!!"

	}else if(time==wakeupTime){
		document.querySelector(".image").src = "js/cat2.jpg"
		document.querySelector("#timeEvent").innerText= "GOOD MORNING"
		console.log(`mng`)
	}else if(time==lunchtime){
		document.querySelector(".image").src = "js/cat1.jpg"
		document.querySelector("#timeEvent").innerText= "LUNCHTIME"
		console.log(`lunchtime`)
	}else if (time==naptime) {
		document.querySelector(".image").src = "js/dbe5f0727b69487016ffd67a6689e75a.jpeg"
		document.querySelector("#timeEvent").innerText= "NAPTIME"
		console.log(`naptime`)
	}else if(time>=evening){
		console.log(`evening`)
		document.querySelector(".image").src = "js/Cat_sleepevening.jpg"
		document.querySelector("#timeEvent").innerText= "GOOD EVENING"


	}


}
let party = document.querySelector("#partyTimeButton");



// party.addEventListener("click", partyEvent);
   var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
        document.querySelector(".image").src = "js/partyTime.jpg"
		document.querySelector("#timeEvent").innerText= "PARTY TIME!!!"
    }
    else
    { 
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
        updateTime()
    }
};



party.addEventListener("click", partyEvent);
   
   partyEvent()
  


   
function LUNCHTIME(){
	let date = new Date;
let hour = date.getHours()
	


let lunchTimeSelector = document.querySelector("#lunchTimeSelector").value

    
	
	if (lunchTimeSelector==hour) {
		document.querySelector(".image").src = "js/cat1.jpg"
		document.querySelector("#timeEvent").innerText= "ITS LUNCHTIME"
		// updateTime()


	}else{
	 	updateTime()
	 }
}
   lunchTimeSelector.addEventListener("change", LUNCHTIME);

var wakeupSelector = document.querySelector("#wakeup")
function wakeupTimef(){
	let date = new Date;
let hour = date.getHours()
	


// var wakeupSelector = document.querySelector("#wakeup").value
console.log(wakeupSelector.value)

    
	if (wakeupSelector.value==hour) {
		document.querySelector(".image").src = "js/cat2.jpg"
		document.querySelector("#timeEvent").innerText= "ITS MORNING"


	 }else{
	 	updateTime()
	 }
}
  wakeupSelector.addEventListener("change",wakeupTimef);


let napTimeSelector = document.querySelector("#napTimeSelector")

function NAPTIME(){
	let date = new Date;
let hour = date.getHours()
	
   
   	if(napTimeSelector.value==hour){
   	document.querySelector(".image").src = "js/dbe5f0727b69487016ffd67a6689e75a.jpeg"
		document.querySelector("#timeEvent").innerText= "NAPTIME"

   }else{
	 	updateTime()
	 }
}
     napTimeSelector.addEventListener("change",NAPTIME);



    // if (partytime < 0) 
    // {

    //     time = new Date().getHours();
    //     time==partytime;
    //     partyTimeButton.innerText = "Party Over!";
    //     partyTimeButton.style.backgroundColor = "#0A8DAB";
    // }
    // else
    // {
    //     partytime = -1;
    //     partyTimeButton.innerText = "Party TIME!";
    //     partyTimeButton.style.backgroundColor = "#222";
    // }
// };

// party.addEventListener("click", partyEvent);


// let party = document.querySelector("#partyTimeButton");
// party.addEventListener('click',function(){
// 	document.querySelector(".image").src = "js/partyTime.jpg"
// 	document.querySelector("#timeEvent").innerText= "PARTY TIME!!!"
//   party.style.backgroundColor = "#0A8DAB";
//   party.innerText = `PARTY OVER!!!`;
  

// })





