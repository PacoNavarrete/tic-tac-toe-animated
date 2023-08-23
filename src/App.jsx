import { useEffect, useReducer } from 'react';
import Board from './components/Board';
import AOS from 'aos';
import 'aos/dist/aos.css';

function reducer(state, action) {
  switch (action.type) {
    case '[UPADE: squareValues]': {
      return {
        ...state,
        squareValues: action.nextSquares, //[TODO] pasar nextSquares en el dispatch junto con type.
      };
    }
    case '[SWITCH: playerTurn': {
      return {
        ...state,
        isXTurn: !state.isXTurn, //[TODO] check if syntax is correct
      };
    }
    case '[SET: winner]': {
      return {
        ...state,
        winner: action.newWinner,
      };
    }
    case '[SET: tie]': {
      return {
        ...state,
        tie: !state.tie, //[TODO] check if syntax is correct
      };
    }
    case '[UPDATE: history]': {
      return {
        ...state,
        history: [],
      };
    }
  }
}

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const initialState = {
    squareValues: Array(9).fill(null),
    isXTurn: true,
    winner: false,
    tie: false,
    history: [{ indexId: 0, historyData: Array(9).fill(null) }],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Board />
    </>
  );
}

export default App;
