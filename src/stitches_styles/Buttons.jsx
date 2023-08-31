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
  '@media Screen and (max-width: 700px)': {
    width: '90px',
    height: '90px',
  },
});

export const RestartButton = styled('button', {
  width: 'auto',
  height: 'auto',
  marginLeft: '20px',
  color: '#000',
  backgroundColor: '#fff',
  border: '2px solid #fff',
  marginBottom: '5px',
  padding: '5px',
  borderRadius: '50px',
  textAlign: 'center',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgb(255 0 105)',
    color: '#fff',
  },
});

export const HistoryOpenButton = styled('button', {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: 'auto',
  height: 'auto',
  color: '#000',
  backgroundColor: '#fff',
  border: '2px solid #fff',
  marginBottom: '5px',
  padding: '5px',
  borderRadius: '50px',
  textAlign: 'center',
  transform: 'rotate(-90deg)',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgb(255 0 105)',
    color: '#fff',
  },
});

export const HistoryCloseButton = styled(HistoryOpenButton, {
  left: '0',
});
