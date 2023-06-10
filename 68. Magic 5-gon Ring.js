
const N = 5; // Number of arms.

var numbers = generateNumbers(N); // Numbers 1 through 2 * N.
var paths = generatePaths(N); // All line paths in an N-gon ring.

var maxSolution = 0; // Maximum 16-digit solution.

// Check all possible number placements looking for magic ring solutions:
for (var permutation of getPermutations(numbers)) {
	var solution = getMagicRingSolution(permutation, paths);

	if (solution == undefined)
		continue;

	// Require 16-digit solutions:
	if (solution.length != 16)
		continue;

	// Store maximum valid solution:
	solution = BigInt(solution);
	if (solution > maxSolution)
		maxSolution = solution;
}

console.log(maxSolution)

// Return concatenated solution if ring is magic (all path sums are equal), otherwise undefined.
function getMagicRingSolution(numbers, paths) {
	// Verify that first external node is the lowest:
	var firstExternalNode = numbers[paths[0][0]];
	for (var i = 1; i < paths.length; i++) {
		if (numbers[paths[i][0]] < firstExternalNode)
			return undefined;
	}

	// Verify that all path sums are the same:
	var pathSum = getPathSum(numbers, paths[0]);
	for (var i = 1; i < paths.length; i++) {
		if (getPathSum(numbers, paths[i]) != pathSum)
			return undefined;
	}

	// Concatenate solution:
	var solution = "";
	for (var path of paths) {
		for (var index of path)
			solution += numbers[index];
	}

	return solution;
}

// Get sum of the numbers at the indices of the specified path.
function getPathSum(numbers, path) {
	var sum = 0;

	for (var index of path)
		sum += numbers[index];

	return sum;
}

// Generate an array containg the numbers 1 through 2 * N.
function generateNumbers(n) {
	var numbers = [];

	for (var i = 1; i <= n * 2; i++)
		numbers.push(i);

	return numbers;
}

// Generate all line paths in an N-gon ring.
function generatePaths(n) {
	var outerRing = [];
	var innerRing = [];

	for (var i = 0; i < n; i++) {
		outerRing.push(i);
		innerRing.push(i + n);
	}

	var paths = [];

	for (var i = 0; i < n; i++)
		paths.push([outerRing[i], innerRing[i], innerRing[(i + 1) % n]]);

	return paths;
}

// Get all permutations of an array of unique elements:
function getPermutations(elements) {
	if (elements.length <= 1)
		return [elements];

	var permutations = [];

	for (var i = 0; i < elements.length; i++) {
		var head = elements.slice(i, i + 1);
		var tail = elements.slice(0, i).concat(elements.slice(i + 1, elements.length));

		for (var permutation of getPermutations(tail))
			permutations.push(head.concat(permutation));
	}

	return permutations;
}