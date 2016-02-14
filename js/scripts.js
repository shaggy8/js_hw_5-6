var h = document.querySelector('.h');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var msec = document.querySelector('.msec');
var jumbotron = document.querySelector('.jumbotron');

var startStop = document.querySelector('.start-stop');
var split = document.querySelector('.split');
var reset = document.querySelector('.reset');

var clickClock;
var TOGGLE = false;
var savedTime = 0;
var time = 0;

startStop.addEventListener('click', startStopF);
split.addEventListener('click', splitTimeF);
reset.addEventListener('click', resetF);


function startStopF () {
	var start = new Date;

	if (TOGGLE) {

		clearInterval(clickClock);
		savedTime = time;
		toggleOff();
		var h3 = document.createElement('h3');
		h3.innerHTML = 'Stop ' + h.innerHTML + ':' + min.innerHTML + 
		':' + sec.innerHTML + '.' + msec.innerHTML;
		jumbotron.appendChild(h3);

	} else {
		toggleOn();

		clickClock = setInterval(function () {
			var now = new Date;
			time = savedTime + (now - start);

			var calcMin = time % 3600000;
			var calcSec = calcMin % 60000;
			
			var hours = Math.floor(time / 3600000);
			var minutes = Math.floor(calcMin / 60000);
			var seconds = Math.floor(calcSec / 1000);
			var milliseconds = calcSec % 1000;

			if (hours < 10) hours = '0' + hours;
			if (minutes < 10) minutes = '0' + minutes;
			if (seconds < 10) seconds = '0' + seconds;
			if (milliseconds < 10) {
				milliseconds = '00' + milliseconds;
			} else if (milliseconds < 100) {
				milliseconds = '0' + milliseconds;
			};

			h.innerHTML = hours;
			min.innerHTML = minutes;
			sec.innerHTML = seconds;
			msec.innerHTML = milliseconds;
		}, 1);
	}
}


function splitTimeF () {
	if (TOGGLE) {
		var h3 = document.createElement('h3');
		h3.innerHTML = 'Split ' + h.innerHTML + ':' + min.innerHTML + 
		':' + sec.innerHTML + '.' + msec.innerHTML;
		jumbotron.appendChild(h3);
	}
}


function resetF () {
	clearInterval(clickClock);

	h.innerHTML = '00';
	min.innerHTML = '00';
	sec.innerHTML = '00';
	msec.innerHTML = '000';
	time = 0;
	savedTime = 0;

	toggleOff();

	var splits = jumbotron.querySelectorAll('h3');
	for (var i = 0; i < splits.length; i++) {
		jumbotron.removeChild(splits[i]);
	}
}


function toggleOn () {
	TOGGLE = true;

	startStop.classList.remove('btn-success');
	startStop.classList.add('btn-warning');
	startStop.innerHTML = 'Stop';
}

function toggleOff () {
	TOGGLE = false;

	startStop.classList.remove('btn-warning');
	startStop.classList.add('btn-success');
	startStop.innerHTML = 'Start';
}