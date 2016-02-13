var h = document.querySelector('.h');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var msec = document.querySelector('.msec');

var st = document.querySelector('.st');
var sp = document.querySelector('.sp');
var rs = document.querySelector('.rs');
var clickClock;

st.addEventListener('click', startStop);
// sp.addEventListener('click', splitTime);
rs.addEventListener('click', reset);


function startStop () {
	var start = new Date;
	var startHr = start.getHours();
	var startMin = start.getMinutes();
	var startSec = start.getSeconds();
	var startMs = start.getMilliseconds();

	clickClock = setInterval(function () {
		var now = new Date;
		var nowHr = now.getHours();
		var nowMin = now.getMinutes();
		var nowSec = now.getSeconds();
		var nowMs = now.getMilliseconds();

		var hours = nowHr - startHr;
		var minutes = nowMin - startMin;
		var seconds = nowSec - startSec;
		var milliseconds = nowMs - startMs;

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


function reset () {
	clearInterval(clickClock);
	h.innerHTML = '00';
	min.innerHTML = '00';
	sec.innerHTML = '00';
	msec.innerHTML = '000';
}