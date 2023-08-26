import { actionTypes } from './actionTypes';

export const actionHandlers = {
  handleUpdateSquareValues(payload) {
    return {
      type: actionTypes.updateSquareValues,
      payload,
    };
  },
  handleSwitchPlayer() {
    return {
      type: actionTypes.switchTurn,
    };
  },
  handleSetWinner(payload) {
    return {
      type: actionTypes.setWinner,
      newWinner: payload,
    };
  },
  handleSetTieGame() {
    return {
      type: actionTypes.setTie,
    };
  },
  handleUpdateHistory(payload) {
    return {
      type: actionTypes.updateHistory,
      payload,
    };
  },
};
