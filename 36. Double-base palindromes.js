
var sum = 0;

for (var i = 0; i < 1000000; i++) {
	if (isPalindrome(i) && isPalindrome(Number(i).toString(2)))
		sum += i;
}

console.log(sum);

function isPalindrome(n) {
	var digits = ("" + n).split("");

	for (var i = 0; i < digits.length / 2; i++) {
		if (digits[i] != digits[digits.length - 1 - i])
			return false;
	}

	return true;
}