import { RestartButton } from '../stitches_styles/Buttons';
import { TurnText } from '../stitches_styles/Text';

export default function NewGame() {
  return (
    <RestartButton onClick={() => location.reload()}>
      Reiniciar el juego
    </RestartButton>
  );
}
