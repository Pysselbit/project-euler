
const UNITS = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const SMALL_TENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const BIG_TENS = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var sum = 0;

for (var i = 1; i <= 1000; i++) {
	sum += getNumberString(i).length;
}

console.log(sum);

function getNumberString(n) {
	if (n == 1000)
		return "onethousand";

	var string = "";

	var nHundreds = Math.floor(n / 100);
	var nTens = Math.floor((n - nHundreds * 100) / 10);
	var nUnits = Math.floor((n - nHundreds * 100 - nTens * 10))

	if (nHundreds > 0)
		string += UNITS[nHundreds] + "hundred";

	if (nHundreds > 0 && (nTens > 0 || nUnits > 0))
		string += "and";

	if (nTens < 1)
		string += UNITS[nUnits];
	else if (nTens == 1)
		string += SMALL_TENS[nUnits];
	else
		string += BIG_TENS[nTens] + UNITS[nUnits];

	return string;
}