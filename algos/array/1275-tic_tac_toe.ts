{
  const input1 = [
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ];

  const input2 = [
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ];

  const input3 = [
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ];

  const input4 = [
    [2, 0],
    [2, 1],
    [2, 2],
    [0, 0],
    [0, 1],
    [0, 2],
  ];

  function tictactoe(moves: number[][]): string {
    const len = moves.length;
    const cnt = new Array(8).fill(0);

    for (let k = len - 1; k >= 0; k -= 2) {
      const [row, col] = moves[k];

      cnt[row]++;

      cnt[col + 3]++;

      if (row == col) {
        cnt[6]++;
      }

      if (row + col == 2) {
        cnt[7]++;
      }

      // console.log(cnt[row]);

      if (cnt[row] == 3 || cnt[col + 3] == 3 || cnt[6] == 3 || cnt[7] == 3) {
        console.log("row", cnt[row], "column", cnt[col]);

        return k % 2 == 0 ? "A" : "B";
      }
      console.log("count", cnt);
    }

    return len == 9 ? "Draw" : "Pending";
  }

  console.log("result", tictactoe(input1));
}
