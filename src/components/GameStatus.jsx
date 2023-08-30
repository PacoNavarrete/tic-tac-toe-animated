import { useContext } from 'react';
import BoardContext from '../helpers/boardContex';
import { TieText } from '../stitches_styles/Text';
import { StatusWrapper } from '../stitches_styles/StatusWrapper';
import Winner from './Winner';
import NextTurn from './NextTurn.jsx';
import NewGame from './NewGame';

export default function GameStatus() {
  const { gameState } = useContext(BoardContext);

  return (
    <StatusWrapper>
      {!gameState.tie && !gameState.winner && <NextTurn />}
      {gameState.winner && <Winner winnerUrl={gameState.winner} />}
      {gameState.tie && <TieText>Empate</TieText>}
      {(gameState.tie && <NewGame />) || (gameState.winner && <NewGame />)}
    </StatusWrapper>
  );
}
