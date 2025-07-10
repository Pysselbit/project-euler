
const N = 51;

console.log(sumSquareFreePascalNumbers(N));

function sumSquareFreePascalNumbers(rowCount) {
	let pascals = getDistinctPascalNumbers(N);
	let pascalMax = pascals[pascals.length - 1];
	let primeSquares = getSquarePrimes(pascalMax);
	let squareFreeSum = 0;
	
	for (number of pascals) {
		let isSquareFree = true;

		for (primeSquare of primeSquares) {
			if (number % primeSquare == 0) {
				isSquareFree = false;
				break;
			}
		}

		if (isSquareFree)
			squareFreeSum += number;
	}

	return squareFreeSum;
}

function getDistinctPascalNumbers(rowCount) {
	let distinctNumbers = []

	for (row of getPascalTriangle(rowCount)) {
		for (number of row) {
			if (!distinctNumbers.includes(number))
				distinctNumbers.push(number);
		}
	}

	return distinctNumbers.sort(function(a, b){return a - b});
}

function getPascalTriangle(rowCount) {
	let triangle = [[1]];

	for (let i = 1; i < rowCount; i++) {
		let previousRow = triangle[i - 1];
		let row = [];

		for (let j = 0; j <= i; j++) {
			if (j == 0 || j == i)
				row.push(1);
			else
				row.push(previousRow[j - 1] + previousRow[j]);
		}

		triangle.push(row);
	}

	return triangle;
}

function getSquarePrimes(limit) {
	limit = Math.ceil(Math.sqrt(limit));

	let isPrime = new Array(limit + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= limit; i++) {
		if (!isPrime[i])
			continue;

		for (let j = i * i; j <= limit; j += i)
			isPrime[j] = false;
	}

	let primes = [];
	for (let i = 2; i <= limit; i++) {
		if (isPrime[i])
			primes.push(i);
	}

	for (let i = 0; i < primes.length; i++)
		primes[i] = primes[i] * primes[i];

	return primes;
}