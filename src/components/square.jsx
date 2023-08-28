import { useContext } from 'react';
import BoardContext from '../helpers/boardContex';
import handleSquareClick from '../helpers/handleSquareClick';
import { CrossButton } from '../stitches_styles/Buttons';

export function Square({ value, id }) {
  const { gameState, gameDispatch } = useContext(BoardContext);
  return (
    <CrossButton onClick={() => handleSquareClick(id, gameState, gameDispatch)}>
      {value ? <img src={value} width="60px" data-aos="fade-down" /> : null}
    </CrossButton>
  );
}
