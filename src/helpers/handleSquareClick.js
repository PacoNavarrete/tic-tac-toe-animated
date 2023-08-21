import calculateWinner from './calculateWinner';

//paramenters to set an pass to this function -> [squareValues, winner, tie, isXTurn, setSquareValues, setHistory]

//sequance of the following fuction:
//1 we create a linkage with the nextSquares name and we asign a copy of the squareValues, using the .slice() array method.
//2 we compare if the position received in i into the nextSquares is available and if there's no winner and there's no tie, if conditions meet we create a linkage with the ticTacMark name and asign a taco or burger url icon depending on the isXTurn state, then we set the url icon into i position of the nextSquare array, then we update the squareValues using the setSquareValues and passing the nextSquareValues as argument. then we update the history array of objects, we spread the history current values and add a new object with following properties: indexId, data and isTurnOf(better to change it to wasTurnOf).

// setSquareValues() -> we pass the "nextSquares" argument, the argument is copy of the squrevalues array, we copy the array to modify it and then update the original squareValues.

export default function handleSquareClick(i) {
  const nextSquares = squareValues.slice();
  if (nextSquares[i] === null && winner === false && tie == null) {
    const tiTacMark = isXTurn ? '/icons/taco.svg' : '/icons/burger.svg';
    nextSquares[i] = tiTacMark;
    setSquareValues(nextSquares);
    setHistory([
      ...history,
      {
        indexId: indexId++,
        data: nextSquares,
        isTurOf: tiTacMark,
      },
    ]);

    calculateWinner(nextSquares, setWinner, setTie);
    setIsXTurn(!isXTurn);
  }
}
