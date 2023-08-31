import { useState, useContext } from 'react';
import handleNavigateHistory from '../helpers/handleNavigateHistory';
import BoardContext from '../helpers/boardContex';
import { AsideItem } from '../stitches_styles/AsideItem';
import { SmallTitle } from '../stitches_styles/Text';

export default function HistoryList() {
  const { gameState, gameDispatch } = useContext(BoardContext);
  const [itemClicked, setItemClicked] = useState(null);

  const deepPinkColor = 'rgb(255 0 105)';

  return (
    <>
      {gameState.history.map((item) => {
        return (
          <AsideItem
            key={item.indexId}
            onClick={() => {
              handleNavigateHistory(item.historyData, gameDispatch);
              setItemClicked(item.indexId);
            }}
            css={{
              backgroundColor: itemClicked == item.indexId ? deepPinkColor : '',
            }}
          >
            <SmallTitle>Movimiento {item.indexId}</SmallTitle>
          </AsideItem>
        );
      })}
    </>
  );
}
