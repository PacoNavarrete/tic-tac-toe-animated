import { styled } from '@stitches/react';

export const CrossButton = styled('button', {
  backgroundColor: 'rgb(255 0 105)',
  border: '2px solid black',
  borderRadius: '0px',
  width: '120px',
  height: '120px',
  '&:hover': {
    cursor: 'pointer',
  },
});
