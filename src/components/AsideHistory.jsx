import { useContext } from 'react';
import BoardContext from '../helpers/boardContex';

import { AsideBox } from '../stitches_styles/AsideBox';
import { MedTitle } from '../stitches_styles/Text';
import {
  HistoryCloseButton,
  HistoryOpenButton,
} from '../stitches_styles/Buttons';
import { HistoryWrapper } from '../stitches_styles/Wrappers';
import { actionHandlers } from '../store/actionHandlers';
import HistoryList from './HistoryList';

export default function AsideHistory() {
  const { gameState, gameDispatch } = useContext(BoardContext);

  console.log(gameState.showHistory);
  return (
    <>
      {gameState.winner || gameState.tie ? (
        <>
          {gameState.showHistory ? (
            <HistoryWrapper>
              <AsideBox data-aos="fade-right">
                <MedTitle>Historial</MedTitle>
                <br />
                <HistoryList />
              </AsideBox>
              <HistoryCloseButton
                onClick={() =>
                  gameDispatch(actionHandlers.handleToggleShowHistory())
                }
              >
                Cerrar Historial
              </HistoryCloseButton>
            </HistoryWrapper>
          ) : (
            <HistoryOpenButton
              onClick={() =>
                gameDispatch(actionHandlers.handleToggleShowHistory())
              }
            >
              Abrir Historial
            </HistoryOpenButton>
          )}
        </>
      ) : null}
    </>
  );
}
