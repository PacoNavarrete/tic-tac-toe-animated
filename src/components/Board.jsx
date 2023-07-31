import { useState } from 'react';
import { BoardRow } from '../stitches_styles/BoardRow';
import { Square } from './square';
import calculateWinner from '../helpers/calculateWinner';
import { WinnerMessage, WinnerText } from '../stitches_styles/WinnerMessage';
import { TurnMessage, TurnText } from '../stitches_styles/TurnMessage';
import { AsideBox } from '../stitches_styles/AsideBox';
import { GameBox } from '../stitches_styles/GameBox';
import { BoardWrapper } from '../stitches_styles/Wrappers';
import { AsideItem } from '../stitches_styles/AsideItem';
import { MedTitle, SmallTitle } from '../stitches_styles/Text';

let indexId = 1;

export default function Board() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(null);
  const [history, setHistory] = useState([
    { indexId: 0, data: Array(9).fill(null), isTurOf: 'starting point' },
  ]);

  function handleSquareClick(i) {
    const nextSquares = squareValues.slice();
    if (nextSquares[i] === null && winner === false) {
      const tiTacMark = isXTurn ? '/icons/bio-1.svg' : '/icons/bio-2.svg';
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

  function handleNavigateHistory(data) {
    setSquareValues(data);
  }

  return (
    <GameBox>
      {winner || tie ? (
        <AsideBox data-aos="fade-right">
          {/* TODO: REMOVE NOT NEEDED STRUCTURES FROM HISTORY STATE */}
          <MedTitle>Historial</MedTitle>
          <br />
          {history.map((item) => {
            return (
              <AsideItem
                key={item.indexId}
                onClick={() => handleNavigateHistory(item.data)}
                css={{
                  backgroundColor: item.indexId === 0 ? 'Yellow' : '',
                }}
              >
                <SmallTitle>Movimiento | {item.indexId}</SmallTitle>
              </AsideItem>
            );
          })}
        </AsideBox>
      ) : null}
      <BoardWrapper>
        {winner ? (
          <WinnerMessage>
            <WinnerText>El ganador es:</WinnerText>
            <img src={winner} width="50px" />
          </WinnerMessage>
        ) : !tie ? (
          <TurnMessage>
            <TurnText>El siguiente turno es de: </TurnText>
            {isXTurn ? (
              <img src={'/icons/bio-1.svg'} width="50px" data-aos="fade-down" />
            ) : (
              <img src={'/icons/bio-2.svg'} width="50px" data-aos="fade-down" />
            )}
          </TurnMessage>
        ) : null}
        {tie && !winner ? <WinnerMessage>Empate</WinnerMessage> : null}
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
