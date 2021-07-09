var time, today, date, currentHour, mo, day, yr, timeElement, dataElement;
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

today = new Date();
mo = mS[today.getMonth()];
day = today.getDate();
yr = today.getFullYear();
currentHour = today.getHours();

date = `${mo}.${day}.${yr}`;

min = (today.getMinutes() < 10) ? '0' : '';
min += today.getMinutes();

if (currentHour > 12) {
	currentHour -= 12;
	time = `${currentHour}:${min} PM`;
}
else
	time = `${currentHour}:${min} AM`;

dataElement = document.getElementById('date');
dataElement.innerHTML = date + " //";

timeElement = document.getElementById('time');
timeElement.innerHTML = time;

