import { styled } from '@stitches/react';
import { WinnerText } from './WinnerMessage';

export const TurnMessage = styled('div', {
  display: 'flex',
  alignContent: 'center',
  justifyItems: 'center',
  marginBottom: '20px',
  marginTop: '20px',
  padding: '10px',
  width: 'fit-content',
  height: 'fit-content',
});

export const TurnText = styled(WinnerText, {});
