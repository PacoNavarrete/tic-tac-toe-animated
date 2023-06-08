import { useState } from 'react';
import { CrossButton } from '../stitches_styles/Buttons';

export function Square({ value, onSquareClick }) {
  function handleClick() {
    console.log('clicked button' + value);
    onSquareClick();
  }

  return <CrossButton onClick={handleClick}>{value}</CrossButton>;
}
