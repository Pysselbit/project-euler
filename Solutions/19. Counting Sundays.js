
var sundays = 0;

var date = new Date(1901, 1, 1);

while (date.getFullYear() < 2001) {
	if (date.getDay() == 0)
		sundays++;

	date.setMonth(date.getMonth() + 1);
}

console.log(sundays);