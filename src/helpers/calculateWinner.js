export default function calculateWinner(squareValues = []) {
  const rulesToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < rulesToWin.length; i++) {
    const [a, b, c] = rulesToWin[i];
    if (
      squareValues[a] &&
      squareValues[a] === squareValues[b] &&
      squareValues[a] === squareValues[c]
    ) {
      return squareValues[a];
    }
  }
  return false;
}
