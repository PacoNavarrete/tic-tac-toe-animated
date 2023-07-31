import { styled } from '@stitches/react';
import '@fontsource-variable/open-sans';

export const TextBase = styled('p', {
  fontFamily: 'Open Sans Variable',
});

export const BigTitle = styled(TextBase, {
  fontSize: '48px',
  fontWeight: '800',
});

export const MedTitle = styled(TextBase, {
  fontSize: '32px',
  fontWeight: '800',
  color: '#fff',
});

export const SmallTitle = styled(TextBase, {
  fontSize: '14px',
  fontWeight: '600',
  color: '#000',
});
