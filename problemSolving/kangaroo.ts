{
  function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    // Write your code here

    while (x1 < x2) {
      x1 += v1;
      x2 += v2;
    }

    if (x1 === x2) {
      return "YES";
    } else {
      return "NO";
    }
  }

  console.log(kangaroo(0, 3, 4, 2));
}
