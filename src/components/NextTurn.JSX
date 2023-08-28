import { useContext } from 'react';
import BoardContext from '../helpers/boardContex';
import { TurnText } from '../stitches_styles/Text';

export default function NextTurn() {
  const { gameState } = useContext(BoardContext);
  return (
    <>
      {gameState.isXTurn && <TurnText> Mr. Taco</TurnText>}
      {!gameState.isXturn && <TurnText> Ms. Hamburguesa</TurnText>}
    </>
  );
}
