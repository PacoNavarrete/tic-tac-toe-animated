import { CrossButton } from '../stitches_styles/Buttons';

export function Square({ value, onSquareClick }) {
  function handleClick() {
    onSquareClick();
  }

  return <CrossButton onClick={handleClick}>{value}</CrossButton>;
}
