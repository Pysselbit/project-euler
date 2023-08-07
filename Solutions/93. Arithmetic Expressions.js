
const ADD = 0;
const SUBTRACT = 1;
const MULTIPLY = 2;
const DIVIDE = 3;

function calc(a, operation, b) {
	if (operation == ADD)
		return a + b;
	if (operation == SUBTRACT)
		return a - b;
	if (operation == MULTIPLY)
		return a * b;
	else
		return a / b;
}

function getPermutations(digits) {
	if (digits.length <= 1)
		return digits;

	var permutations = [];

	for (var i = 0; i < digits.length; i++) {
		var head = digits.slice(i, i + 1);
		var tail = digits.slice(0, i).concat(digits.slice(i + 1, digits.length));

		for (var permutation of getPermutations(tail))
			permutations.push(head.concat(permutation));
	}

	return permutations;
}

function getIntegerTargets(digits) {
	var integerTargets = [];

	// Test all permutations:
	for (var p of getPermutations(digits)) {
		var a = p[0];
		var b = p[1];
		var c = p[2];
		var d = p[3];

		for (var i = ADD; i <= DIVIDE; i++) {
			for (var j = ADD; j <= DIVIDE; j++) {
				for (var k = ADD; k <= DIVIDE; k++) {
					var targets = [
						// Test all operation orders: (0-1-2), (0-1-2), (1-0-2) ...
						calc(calc(calc(a, i, b), j, c), k, d),
						calc(calc(a, i, b), j, calc(c, k, d)),
						calc(calc(a, i, calc(b, j, c)), k, d),
						calc(a, i, calc(calc(b, j, c), k, d)),
						calc(calc(a, i, b), j, calc(c, k, d)),
						calc(a, i, calc(b, j, calc(c, k, d)))
					];

					for (var target of targets) {
						if (target > 0 && Number.isInteger(target)) {
							while (target >= integerTargets.length)
								integerTargets.push(false);

							integerTargets[target] = true;
						}
					}
				}
			}
		}
	}

	return integerTargets;
}

var maxConsecutive = 0;
var maxDigits = "";

// Test all values for 0 <= a < b < c < d <= 9:
for (var a = 0; a < 10; a++) {
	for (var b = 0; b < 10; b++) {
		for (var c = 0; c < 10; c++) {
			for (var d = 0; d < 10; d++) {
				var targets = getIntegerTargets([a, b, c, d]);

				var n = 0;

				for (var i = 1; targets[i]; i++)
					n = i;

				if (n > maxConsecutive) {
					maxConsecutive = n;
					maxDigits = "" + a + b + c + d;
				}
			}
		}
	}
}

console.log(maxDigits);