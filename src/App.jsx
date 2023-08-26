import { useEffect, useReducer } from 'react';
import AOS from 'aos';
import Board from './components/Board';
import BoardContext from './helpers/boardContex';
import gameReducer from './store/gameReducer';
import { initialState } from './store/initialState';
import { actionHandlers } from './store/actionHandlers';

import 'aos/dist/aos.css';

function App() {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialState);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BoardContext.Provider
        value={{ actionHandlers, gameState, gameDispatch }}
      >
        <Board />
      </BoardContext.Provider>
    </>
  );
}

export default App;
