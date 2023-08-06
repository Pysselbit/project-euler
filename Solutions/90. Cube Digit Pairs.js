
const SQUARES = ["01", "04", "09", "16", "25", "36", "49", "64", "81"];

// Return true if all squares can be shown with the specified face arrangement.
function isValidArrangement(left, right) {
	if (left.length != 6 || right.length != 6)
		return false;

	for (var square of SQUARES) {
		var s0 = square[0];
		var s1 = square[1];

		if (left.includes(s0) || (s0 == 6 && left.includes(9)) || (s0 == 9 && left.includes(6))) {
			if (right.includes(s1) || (s1 == 6 && right.includes(9)) || (s1 == 9 && right.includes(6)))
				continue;
		}

		if (left.includes(s1) || (s1 == 6 && left.includes(9)) || (s1 == 9 && left.includes(6))) {
			if (right.includes(s0) || (s0 == 6 && right.includes(9)) || (s0 == 9 && right.includes(6)))
				continue;
		}

		return false;
	}

	return true;
}

// Generate all possible dice face arrangements and count the valid ones.
function countValidArrangements(left = "", right = "") {
	var count = 0;

	if (left.length < 6) {
		var min = left.length == 0 ? 0 : parseInt(left[left.length - 1]) + 1;

		for (var i = min; i < 10; i++)
			count += countValidArrangements(left + i, right);
	}

	else if (right.length < 6) {
		var min = right.length == 0 ? 0 : parseInt(right[right.length - 1]) + 1;

		for (var i = min; i < 10; i++)
			count += countValidArrangements(left, right + i);
	}

	// Arrangement is done. Check validity:
	else {
		if (isValidArrangement(left, right))
			return 1;
		else
			return 0;
	}

	// By the end, divide by 2 since all arrangements have been counted twice (left-right/right-left):
	if (left == "")
		return count / 2;

	return count;
}

console.log(countValidArrangements())