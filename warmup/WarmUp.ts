{
	const sampleInput = [1, 1, 0, -1, -1];

	function plusMinus(arr) {
		let plusNums = 0;
		let zeros = 0;
		let negNums = 0;
		const arrLength = arr.length;

		for (let i = 0; i < arrLength; i++) {
			if (Number(arr[i]) < 0) {
				plusNums++;
				continue;
			}

			if (Number(arr[i]) === 0) {
				zeros++;
				continue;
			}

			if (Number(arr[i] > 0)) {
				negNums++;
			}
		}

		return [negNums, plusNums, zeros].forEach((val) => {
			console.log((val / arrLength).toFixed(6));
		});
	}

	plusMinus(sampleInput);
}
