import { useContext } from 'react';
import { BoardRow } from '../stitches_styles/BoardRow';
import { Square } from './square';
import { GameBox } from '../stitches_styles/GameBox';
import { BoardWrapper } from '../stitches_styles/Wrappers';
import BoardContext from '../helpers/boardContex';

import AsideHistory from './AsideHistory';
import GameStatus from './GameStatus';

export default function Board() {
  const { gameState } = useContext(BoardContext);
  const boardData = {
    firstRow: [0, 1, 2],
    secondRow: [3, 4, 5],
    thirdRow: [6, 7, 8],
  };
  return (
    <GameBox>
      <AsideHistory />
      <BoardWrapper>
        <GameStatus />
        <BoardRow>
          {boardData.firstRow.map((id) => {
            return (
              <Square key={id} value={gameState.squareValues[id]} id={id} />
            );
          })}
        </BoardRow>
        <BoardRow>
          {boardData.secondRow.map((id) => {
            return (
              <Square key={id} value={gameState.squareValues[id]} id={id} />
            );
          })}
        </BoardRow>
        <BoardRow>
          {boardData.thirdRow.map((id) => {
            return (
              <Square key={id} value={gameState.squareValues[id]} id={id} />
            );
          })}
        </BoardRow>
      </BoardWrapper>
    </GameBox>
  );
}
