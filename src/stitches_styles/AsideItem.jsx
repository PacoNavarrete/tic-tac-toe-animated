import { styled } from '@stitches/react';

export const AsideItem = styled('div', {
  width: 'auto',
  height: 'auto',
  color: '#000',
  backgroundColor: '#fff',
  border: '2px solid #fff',
  marginBottom: '5px',
  padding: '5px',
  borderRadius: '50px',
  textAlign: 'center',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgb(255, 185, 0)',
  },
});
