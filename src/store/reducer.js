import { actionsType } from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case actionsType.updateSquareValues: {
      return {
        ...state,
        squareValues: action.nextSquares,
      };
    }
    case actionsType.switchTurn: {
      return {
        ...state,
        isXTurn: !state.isXTurn,
      };
    }
    case actionsType.setWinner: {
      return {
        ...state,
        winner: action.newWinner,
      };
    }
    case actionsType.setTie: {
      return {
        ...state,
        tie: !state.tie,
      };
    }
    case actionsType.updateHistory: {
      return {
        ...state,
        history: [
          ...state.history,
          {
            indexId: action.historyIndex + 1,
            historyData: action.nextSquares,
          },
        ],
      };
    }
    default:
      return state;
  }
}
