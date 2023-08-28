import { useContext } from 'react';
import BoardContext from '../helpers/boardContex';
import { TieText, TurnText } from '../stitches_styles/Text';
import { StatusWrapper } from '../stitches_styles/StatusWrapper';
import Winner from './Winner';
import NextTurn from './NextTurn.JSX';

export default function GameStatus() {
  const { gameState } = useContext(BoardContext);

  return (
    <StatusWrapper>
      {gameState.winner && <Winner winnerUrl={gameState.winner} />}
      {gameState.tie && <TieText>Empate</TieText>}
      {!gameState.tie && !gameState.winner && <NextTurn />}
    </StatusWrapper>
  );
}
