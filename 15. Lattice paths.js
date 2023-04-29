
// When going right (R) 20 times and down (D) 20 times a sequence could look like this:
// RRRRRRRRRRRRRRRRRRRRDDDDDDDDDDDDDDDDDDDD

// Find all unique permutations of a string by calculating l! / (! * j! * k! ...),
// where l is the length of the string and i, j, k ... are the letter frequences.

// For the string above l = 40 and the two letter frequncies are 20 (R) and 20 (L).

console.log(factorial(40n) / (factorial(20n) * factorial(20n)));

function factorial(n) {
	var factorial = 1n;

	for (var i = n; i > 1n; i--)
		factorial *= i;

	return factorial;
}