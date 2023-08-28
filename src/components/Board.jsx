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

import handleSquareClick from '../helpers/handleSquareClick';
import { actionHandlers } from '../store/actionHandlers';

export default function Board() {
  const { gameState, gameDispatch } = useContext(BoardContext);
  const [itemClicked, setItemClicked] = useState(null);

  function handleNavigateHistory(data, id) {
    gameDispatch(actionHandlers.handleUpdateSquareValues(data));
    setItemClicked(id);
  }

  const squaresFirstRow = [0, 1, 2];
  const squaresSecondRow = [3, 4, 5];
  const squareThirdRow = [6, 7, 8];

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
                onClick={() =>
                  handleNavigateHistory(item.historyData, item.indexId)
                }
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
            {squaresFirstRow.map((id) => {
              return (
                <Square
                  key={id}
                  value={gameState.squareValues[id]}
                  onSquareClick={() => {
                    handleSquareClick(id, gameState, gameDispatch);
                  }}
                />
              );
            })}
          </BoardRow>
          <BoardRow>
            {squaresSecondRow.map((id) => {
              return (
                <Square
                  key={id}
                  value={gameState.squareValues[id]}
                  onSquareClick={() => {
                    handleSquareClick(id, gameState, gameDispatch);
                  }}
                />
              );
            })}
          </BoardRow>
          <BoardRow>
            {squareThirdRow.map((id) => {
              return (
                <Square
                  key={id}
                  value={gameState.squareValues[id]}
                  onSquareClick={() => {
                    handleSquareClick(id, gameState, gameDispatch);
                  }}
                />
              );
            })}
          </BoardRow>
        </div>
      </BoardWrapper>
    </GameBox>
  );
}
