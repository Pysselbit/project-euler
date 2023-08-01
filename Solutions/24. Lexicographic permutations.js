
var permutations = getPermutations("0123456789").sort();

console.log(permutations[1000000 - 1]);

// Get all permutations of strings of non-repeating characters:
function getPermutations(string) {
	if (string.length <= 1)
		return [string];

	var permutations = [];

	for (var i = 0; i < string.length; i++) {
		var head = string.substring(i, i + 1);
		var tail = string.substring(0, i) + string.substring(i + 1, string.length);

		for (var permutation of getPermutations(tail))
			permutations.push(head + permutation);
	}

	return permutations;
}