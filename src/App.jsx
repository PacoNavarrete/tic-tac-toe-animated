import { useEffect, useReducer, useState } from 'react';
import Board from './components/Board';
import AOS from 'aos';
import 'aos/dist/aos.css';
import reducer from './store/reducer';
import { initialState } from './store/initialState';

function App() {
  const [historyIndex, setHistoryIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    AOS.init();
    console.log(state);
  }, [state]);

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: '[UPDATE: history]',
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
            type: '[SET: tie]',
          });
        }}
      >
        Click me to set tie-game
      </button>
      <button
        onClick={() => {
          dispatch({
            type: '[SET: winner]',
            newWinner: 'Yes the string the of winner her',
          });
        }}
      >
        Click me to set winner
      </button>
      <button
        onClick={() => {
          dispatch({
            type: '[SWITCH: playerTurn]',
          });
        }}
      >
        Click me to Switch player turn
      </button>
      <button
        onClick={() => {
          dispatch({
            type: '[UPADE: squareValues]',
            nextSquares: ['b', 'y', 'e'],
          });
        }}
      >
        Click me to upadet squareValues
      </button>
      <Board />
    </>
  );
}

export default App;
