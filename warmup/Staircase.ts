{
	const size = 4;

	function staircase(n: number) {
		// biome-ignore lint/style/useConst: <explanation>
		for (let i = 0; i < n; i++) {
      let string = ""
			for (let j = 0; j < n - i - 1; j++) {
				// loop to add spaces
				string += " "
			}
			for (let k = 0; k < i + 1; k++) {
				// loop to add hash tags
				string += "#"
			}
		console.log(string)
    }
	}

	staircase(size);
}

// SSS# i=0, S=3, #=1
// SS## i=1, S=2, #=2
// S### i=2, S=1, #=3
// #### i=3, S=0, #=4
