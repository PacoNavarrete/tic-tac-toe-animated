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
import {
  MedTitle,
  SmallTitle,
  TieText,
  TurnText,
  WinnerText,
} from '../stitches_styles/Text';

let indexId = 1;

export default function Board() {
  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(null);
  const [history, setHistory] = useState([
    { indexId: 0, data: Array(9).fill(null), isTurOf: 'starting point' },
  ]);
  const [itemClicked, setItemClicked] = useState(null);

  function handleSquareClick(i) {
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

  function handleNavigateHistory(data, id) {
    setSquareValues(data);
    setItemClicked(id);
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
                onClick={() => handleNavigateHistory(item.data, item.indexId)}
                css={{
                  backgroundColor:
                    itemClicked == item.indexId ? 'rgb(255 0 105)' : '',
                }}
              >
                <SmallTitle>Movimiento {item.indexId}</SmallTitle>
              </AsideItem>
            );
          })}
        </AsideBox>
      ) : null}
      <BoardWrapper>
        {winner ? (
          <WinnerMessage>
            <WinnerText>!Ganador!</WinnerText>
            <img src={winner} width="50px" />
          </WinnerMessage>
        ) : !tie ? (
          <TurnMessage>
            {isXTurn ? (
              <TurnText> Mr. Taco</TurnText>
            ) : (
              <TurnText> Ms. Hamburguesa</TurnText>
            )}
          </TurnMessage>
        ) : null}
        {tie && !winner ? <TieText>Empate</TieText> : null}
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
