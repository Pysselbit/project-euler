
const N = 100000000;

var palindromes = [];

for (var n = 2; n * n < N; n++) {
	var sum = n * n;

	for (var i = n - 1; i > 0; i--) {
		sum += i * i;

		if (sum < N && isPalindrome(sum) && !palindromes.includes(sum))
			palindromes.push(sum);
	}
}

var total = 0;

for (var palindrome of palindromes) {
	total += palindrome;
}

console.log(total);

function isPalindrome(n) {
	var s = "" + n;

	for (var i = 0; i < s.length / 2; i++) {
		if (s[i] != s[s.length - 1 - i])
			return false;
	}

	return true;
}