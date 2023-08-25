import { useEffect, useReducer, useState } from 'react';
import Board from './components/Board';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BoardContext from './helpers/boardContex';
import reducer from './store/reducer';
import { initialState } from './store/initialState';
import { actionsType } from './store/actions';

function App() {
  const [historyIndex, setHistoryIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    AOS.init();
  }, []);

  function handleUpdateSquareValues(data) {
    dispatch({
      type: actionsType.updateSquareValues,
      nextSquares: data,
    });
  }

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: actionsType.updateHistory,
            historyIndex: historyIndex,
            nextSquares: ['h', 'o', 'l', 'a'],
          });
          setHistoryIndex(historyIndex + 1);
        }}
      >
        Click me to update history
      </button>
      <button
        onClick={() => {
          dispatch({
            type: actionsType.setTie,
          });
        }}
      >
        Click me to set tie-game
      </button>
      <button
        onClick={() => {
          dispatch({
            type: actionsType.setWinner,
            newWinner: 'Yes the string the of winner her',
          });
        }}
      >
        Click me to set winner
      </button>
      <button
        onClick={() => {
          dispatch({
            type: actionsType.switchTurn,
          });
        }}
      >
        Click me to Switch player turn
      </button>
      <button onClick={() => {}}>Click me to upadet squareValues</button>
      <Board />
    </>
  );
}

export default App;
