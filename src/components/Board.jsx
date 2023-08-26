import { useState, useContext } from 'react';
import { BoardRow } from '../stitches_styles/BoardRow';
import { Square } from './square';
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
import BoardContext from '../helpers/boardContex';
import { actionTypes } from '../store/actionTypes';
import { actionHandlers } from '../store/actionHandlers';
import calculateWinner from '../helpers/calculateWinner';

export default function Board() {
  const { gameState, gameDispatch } = useContext(BoardContext);
  const [itemClicked, setItemClicked] = useState(null);

  console.log(gameState);

  function handleSquareClick(i) {
    const nextSquares = gameState.squareValues.slice();
    if (
      nextSquares[i] === null &&
      gameState.winner === false &&
      gameState.tie == false
    ) {
      const tiTacMark = gameState.isXTurn
        ? '/icons/taco.svg'
        : '/icons/burger.svg';
      nextSquares[i] = tiTacMark;
      gameDispatch(actionHandlers.handleUpdateSquareValues(nextSquares));
      gameDispatch(actionHandlers.handleUpdateHistory(nextSquares));
      calculateWinner(nextSquares, setWinner, setTie);
      gameDispatch(actionHandlers.handleSwitchPlayer());
    }
  }

  function handleNavigateHistory(data, id) {
    gameDispatch(actionHandlers.handleUpdateSquareValues(data));
    setItemClicked(id);
  }

  return (
    <GameBox>
      {gameState.winner || gameState.tie ? (
        <AsideBox data-aos="fade-right">
          <MedTitle>Historial</MedTitle>
          <br />
          {gameState.history.map((item) => {
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
        {gameState.winner ? (
          <WinnerMessage>
            <WinnerText>!Ganador!</WinnerText>
            <img src={gameState.winner} width="50px" />
          </WinnerMessage>
        ) : !gameState.tie ? (
          <TurnMessage>
            {gameState.isXTurn ? (
              <TurnText> Mr. Taco</TurnText>
            ) : (
              <TurnText> Ms. Hamburguesa</TurnText>
            )}
          </TurnMessage>
        ) : null}
        {gameState.tie && !gameState.winner ? <TieText>Empate</TieText> : null}
        <div>
          <BoardRow>
            <Square
              value={gameState.squareValues[0]}
              onSquareClick={() => {
                handleSquareClick(0);
              }}
            />
            <Square
              value={gameState.squareValues[1]}
              onSquareClick={() => {
                handleSquareClick(1);
              }}
            />
            <Square
              value={gameState.squareValues[2]}
              onSquareClick={() => {
                handleSquareClick(2);
              }}
            />
          </BoardRow>
          <BoardRow>
            <Square
              value={gameState.squareValues[3]}
              onSquareClick={() => {
                handleSquareClick(3);
              }}
            />
            <Square
              value={gameState.squareValues[4]}
              onSquareClick={() => {
                handleSquareClick(4);
              }}
            />
            <Square
              value={gameState.squareValues[5]}
              onSquareClick={() => {
                handleSquareClick(5);
              }}
            />
          </BoardRow>
          <BoardRow>
            <Square
              value={gameState.squareValues[6]}
              onSquareClick={() => {
                handleSquareClick(6);
              }}
            />
            <Square
              value={gameState.squareValues[7]}
              onSquareClick={() => {
                handleSquareClick(7);
              }}
            />
            <Square
              value={gameState.squareValues[8]}
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
