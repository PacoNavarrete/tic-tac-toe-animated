import { CrossButton } from '../stitches_styles/Buttons';

export function Square({ value, onSquareClick }) {
  return (
    <CrossButton onClick={onSquareClick}>
      {value ? <img src={value} width="60px" data-aos="fade-down" /> : null}
    </CrossButton>
  );
}
