
var TARGET = 2000000;

var closestDiff = TARGET;
var closestArea = 0;

for (var width = 1; true; width++) {
	for (var height = 1; true; height++) {
		var count = countRectangles(width, height);
		var diff = Math.abs(TARGET - count);

		if (diff < closestDiff) {
			closestDiff = diff;
			closestArea = width * height;
		}

		if (count > TARGET)
			break;
	}

	if (countRectangles(width, 1) > TARGET)
		break;
}

console.log(closestArea)

function countRectangles(width, height) {
	var count = 0;

	for (var x = 1; x <= width; x++) {
		for (var y = 1; y <= height; y++) {
			var horizontalCount = 1 + width - x;
			var verticalCount = 1 + height - y;

			count += horizontalCount * verticalCount;
		}
	}

	return count;
}