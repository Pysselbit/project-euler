
var max = 0;

for (a = 100; a < 1000; a++) {
	for (b = 100; b < 1000; b++) {
		var ab = a * b;

		if (isPalindrome(ab) && ab > max)
			max = ab;
	}
}

console.log(max);

function isPalindrome(n) {
	var digits = ("" + n).split("");

	for (var i = 0; i < digits.length / 2; i++) {
		if (digits[i] != digits[digits.length - 1 - i])
			return false;
	}

	return true;
}