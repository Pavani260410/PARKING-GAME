var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var background;
var car;
var carx = 10;
var cary = 78;
var keyDown;
var rp;
var error;
var enterr = "do";
function add() {
	
    background = new Image();
    background.onload = function() {
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	};
	
    background.src = 'parkingLot.jpg';

	car = new Image();
    car.onload = function() {
		ctx.drawImage(car, carx, cary, 30, 50);
	};
    car.src = 'car2.png';

	rp = new Image();
    rp.onload = function() {
		ctx.drawImage(rp, 256, 33, 40, 30);
	};
    rp.src = 'https://www.pngplay.com/wp-content/uploads/7/Handicapped-Reserved-Parking-Sign-PNG-HD-Quality.png';	
	

}



window.addEventListener('keydown', my_keydown);
 function my_keydown(e) {
	 keyDown = e.keyCode;
	 if (enterr == 'do') {
	 if (keyDown == 37 && carx >= 2) {
		 carx -= 3;
		 add();
	 }

	 if (keyDown == 39 && carx <= 268) {
		carx += 3;
		add();
	}

	if (keyDown == 38 && cary >= 2) {
		cary -= 3;
		add();
	}

	if (keyDown == 40  && cary <= 96) {
	   cary += 3;
	   add();
   }
}

 }

 function rules() {
window.location = 'rules.html';
 }
 setInterval(position, 200);
 function position() {
if (carx <= 145 && cary <= 70 || cary <= 21 || carx >= 178 && cary <= 70 || cary > 78){
	error = true;
}else if(carx >= 151 && carx <= 172 && cary == 30 || cary == 27){
	error = false;
}else{
error = 'no';
}
if (error === false) {
document.getElementById('Rating').innerHTML ="&#128522;" ;
}else if (error === true) {
	document.getElementById('Rating').innerHTML ="&#128542;" ;
}else {
	document.getElementById('Rating').innerHTML ="&#128528;" ;
}
 }
 function enter() {
	if (enterr === "do"){
	 document.getElementById('Rating').style.visibility = "visible";
	 document.getElementById('btn').innerHTML = "Try again!";
	 enterr = "dont";
	}else if (enterr === "dont") {
		document.getElementById('Rating').style.visibility = "hidden";
	 document.getElementById('btn').innerHTML = "Enter";
	 enterr = "do";
	}
	}