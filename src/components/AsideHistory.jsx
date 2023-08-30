import { useState, useContext } from 'react';
import handleNavigateHistory from '../helpers/handleNavigateHistory';

import BoardContext from '../helpers/boardContex';

import { AsideBox } from '../stitches_styles/AsideBox';
import { AsideItem } from '../stitches_styles/AsideItem';
import { MedTitle, SmallTitle } from '../stitches_styles/Text';

export default function AsideHistory() {
  const [itemClicked, setItemClicked] = useState(null);
  const { gameState, gameDispatch } = useContext(BoardContext);

  const deepPinkColor = 'rgb(255 0 105)';

  return (
    <>
      {gameState.winner || gameState.tie ? (
        <>
          <AsideBox data-aos="fade-right">
            <MedTitle>Historial</MedTitle>
            <br />
            {gameState.history.map((item) => {
              return (
                <AsideItem
                  key={item.indexId}
                  onClick={() => {
                    handleNavigateHistory(item.historyData, gameDispatch);
                    setItemClicked(item.indexId);
                  }}
                  css={{
                    backgroundColor:
                      itemClicked == item.indexId ? deepPinkColor : '',
                  }}
                >
                  <SmallTitle>Movimiento {item.indexId}</SmallTitle>
                </AsideItem>
              );
            })}
          </AsideBox>
        </>
      ) : null}
    </>
  );
}
