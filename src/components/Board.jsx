import { useState } from 'react';
import { BoardRow } from '../stitches_styles/BoardRow';
import { Square } from './square';
import calculateWinner from '../helpers/calculateWinner';
import { WinnerMessage } from '../stitches_styles/WinnerMessage';
import { TurnMessage } from '../stitches_styles/TurnMessage';

export default function Board() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(false);

  function handleSquareClick(i) {
    const nextSquares = squareValues.slice();
    if (nextSquares[i] === null && !winner) {
      const tiTacMark = isXTurn ? 'X' : 'O';
      nextSquares[i] = tiTacMark;
      setSquareValues(nextSquares);
      calculateWinner(nextSquares, setWinner);
      setIsXTurn(!isXTurn);
    }
  }

  return (
    <>
      {winner ? (
        <WinnerMessage>El ganador es: {winner}</WinnerMessage>
      ) : (
        <TurnMessage>
          <p>El siguiente turno es de: {isXTurn ? 'X' : 'O'} </p>
        </TurnMessage>
      )}

      <BoardRow>
        <Square
          value={squareValues[0]}
          onSquareClick={() => {
            handleSquareClick(0);
          }}
        />
        <Square
          value={squareValues[1]}
          onSquareClick={() => {
            handleSquareClick(1);
          }}
        />
        <Square
          value={squareValues[2]}
          onSquareClick={() => {
            handleSquareClick(2);
          }}
        />
      </BoardRow>
      <BoardRow>
        <Square
          value={squareValues[3]}
          onSquareClick={() => {
            handleSquareClick(3);
          }}
        />
        <Square
          value={squareValues[4]}
          onSquareClick={() => {
            handleSquareClick(4);
          }}
        />
        <Square
          value={squareValues[5]}
          onSquareClick={() => {
            handleSquareClick(5);
          }}
        />
      </BoardRow>
      <BoardRow>
        <Square
          value={squareValues[6]}
          onSquareClick={() => {
            handleSquareClick(6);
          }}
        />
        <Square
          value={squareValues[7]}
          onSquareClick={() => {
            handleSquareClick(7);
          }}
        />
        <Square
          value={squareValues[8]}
          onSquareClick={() => {
            handleSquareClick(8);
          }}
        />
      </BoardRow>
    </>
  );
}
