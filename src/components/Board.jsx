import { useState } from 'react';
import { BoardRow } from '../stitches_styles/BoardRow';
import { Square } from './square';
import calculateWinner from '../helpers/calculateWinner';
import { WinnerMessage } from '../stitches_styles/WinnerMessage';
import { TurnMessage } from '../stitches_styles/TurnMessage';
import { AsideBox } from '../stitches_styles/AsideBox';
import { GameBox } from '../stitches_styles/GameBox';
import { BoardWrapper } from '../stitches_styles/Wrappers';
import { AsideItem } from '../stitches_styles/AsideItem';

export default function Board() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [history, setHistory] = useState([]);

  function handleSquareClick(i) {
    const nextSquares = squareValues.slice();
    if (nextSquares[i] === null && winner === false) {
      const tiTacMark = isXTurn ? 'X' : 'O';
      nextSquares[i] = tiTacMark;
      setSquareValues(nextSquares);
      setHistory(...history, nextSquares);
      console.log(history);
      calculateWinner(nextSquares, setWinner);
      setIsXTurn(!isXTurn);
    }
  }

  function handleHistoryPrev() {}

  function handleHistoryNext() {}

  return (
    <GameBox>
      <AsideBox>
        {/* {history.map((item) => {
          return <AsideItem>Move of: </AsideItem>;
        })} */}
        <AsideItem>Turn of X</AsideItem>
        <AsideItem>Turn of O</AsideItem>
        <AsideItem>Turn of X</AsideItem>
        <AsideItem>Turn of O</AsideItem>
        <AsideItem>Turn of X</AsideItem>
      </AsideBox>
      <BoardWrapper>
        {winner ? (
          <WinnerMessage>El ganador es: {winner}</WinnerMessage>
        ) : (
          <TurnMessage>
            <p>El siguiente turno es de: {isXTurn ? 'X' : 'O'} </p>
          </TurnMessage>
        )}
        <div>
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
        </div>
      </BoardWrapper>
    </GameBox>
  );
}
