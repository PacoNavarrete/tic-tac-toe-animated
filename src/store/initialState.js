export const initialState = {
  squareValues: Array(9).fill(null),
  isXTurn: true,
  winner: false,
  tie: false,
  history: [{ indexId: 0, historyData: Array(9).fill(null) }],
  showHistory: false,
};
