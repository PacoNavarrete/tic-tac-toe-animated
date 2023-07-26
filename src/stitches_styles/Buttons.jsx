import { styled } from '@stitches/react';

export const CrossButton = styled('button', {
  backgroundColor: '#FFB900',
  border: '3px solid black',
  borderRadius: '10px',
  width: '120px',
  height: '120px',
  '&:hover': {
    cursor: 'pointer',
  },
});
