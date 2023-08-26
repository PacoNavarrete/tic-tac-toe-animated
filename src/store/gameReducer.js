import { actionTypes } from './actionTypes';

export default function gameReducer(state, action) {
  switch (action.type) {
    case actionTypes.updateSquareValues: {
      return {
        ...state,
        squareValues: action.payload,
      };
    }
    case actionTypes.switchTurn: {
      return {
        ...state,
        isXTurn: !state.isXTurn,
      };
    }
    case actionTypes.setWinner: {
      return {
        ...state,
        winner: action.newWinner,
      };
    }
    case actionTypes.setTie: {
      return {
        ...state,
        tie: !state.tie,
      };
    }
    case actionTypes.updateHistory: {
      return {
        ...state,
        history: [
          ...state.history,
          {
            indexId: state.history.length - 1 + 1,
            historyData: action.payload,
          },
        ],
      };
    }
    default:
      return state;
  }
}
