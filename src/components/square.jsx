import { useContext } from 'react';
import BoardContext from '../helpers/boardContex';
import handleSquareClick from '../helpers/handleSquareClick';
import { CrossButton } from '../stitches_styles/Buttons';
import { PlayerIcon } from '../stitches_styles/Images';

export function Square({ value, id }) {
  const { gameState, gameDispatch } = useContext(BoardContext);
  return (
    <CrossButton onClick={() => handleSquareClick(id, gameState, gameDispatch)}>
      {value ? <PlayerIcon src={value} /> : null}
    </CrossButton>
  );
}
