const sampleInput = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

function diagonalDifference(arr) {
	const n = arr.length;
	let sum1 = 0;
	let sum2 = 0;

	console.log(n);

	for (let i = 0; i < n; i++) {
		console.log(n - i - 1);

		sum1 += arr[i][i];
		sum2 += arr[i][n - i - 1];
	}

	return Math.abs(sum1 - sum2);
}

diagonalDifference(sampleInput);
