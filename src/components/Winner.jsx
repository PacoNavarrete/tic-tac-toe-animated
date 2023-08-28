import { WinnerText } from '../stitches_styles/Text';

export default function Winner({ winnerUrl }) {
  return (
    <>
      <WinnerText>!Ganador!</WinnerText>
      <img src={winnerUrl} width="50px" />
    </>
  );
}
