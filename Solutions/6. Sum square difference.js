
const N = 100;

var sum = sumOfSquares = squareOfSums = 0;

for (var i = 0; i <= N; i++) {
	sum += i;
	sumOfSquares += i * i;
}

squareOfSums = sum * sum;

console.log(squareOfSums - sumOfSquares);