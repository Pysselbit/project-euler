
var sumOfSums = 0;

for (var i = 2; i < 10000000; i++) {
	var s = "" + i;

	var sumOfDigitPowers = 0;

	for (var j = 0; j < s.length; j++)
		sumOfDigitPowers += Math.pow(Number(s.substring(j, j + 1)), 5);

	if (sumOfDigitPowers == i)
		sumOfSums += i;
}

console.log(sumOfSums);