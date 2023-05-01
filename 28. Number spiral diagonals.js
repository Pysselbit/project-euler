
const N = 1001;

// Create NxN grid:
var grid = [new Array(N)];
for (var i = 0; i < N; i++)
	grid[i] = new Array(N);

// Position:
var x = Math.floor(N / 2) + 1;
var y = Math.floor(N / 2);

// Direction:
var dx = 0;
var dy = -1;

// Place spiral in grid:
for (var i = 1; i <= N * N; i++) {
	// Try to turn right:
	turnRight();
	move(1);

	// If cell is occupied, reverse and go straight:
	if (grid[x][y] != undefined) {
		move(-1);
		turnRight();
		turnRight();
		turnRight();
		move(1);
	}

	grid[x][y] = i;
}

// Calculate sum of diagonals:
var sum = 0;
for (var i = 0; i < N; i++) {
	sum += grid[i][i];

	if (i != Math.floor(N / 2))
		sum += grid[grid.length - 1 - i][i];
}

console.log(sum);

function move(steps) {
	x += steps * dx;
	y += steps * dy;
}

function turnRight() {
	var newDX = dy;
	var newDY = -dx;

	dx = newDX;
	dy = newDY;
}