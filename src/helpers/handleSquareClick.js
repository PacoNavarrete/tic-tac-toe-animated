import { actionHandlers } from '../store/actionHandlers';
import calculateTie from './calculateTie';
import calculateWinner from './calculateWinner';

export default function handleSquareClick(i, gameState, gameDispatch) {
  const nextSquares = gameState.squareValues.slice();
  if (
    nextSquares[i] === null &&
    gameState.winner === false &&
    gameState.tie == false
  ) {
    const tiTacMark = gameState.isXTurn
      ? './icons/taco.svg'
      : './icons/burger.svg';
    nextSquares[i] = tiTacMark;
    gameDispatch(actionHandlers.handleUpdateSquareValues(nextSquares));
    gameDispatch(actionHandlers.handleUpdateHistory(nextSquares));
    const winner = calculateWinner(nextSquares);
    const tie = calculateTie(nextSquares);
    if (winner) {
      gameDispatch(actionHandlers.handleSetWinner(winner));
    } else if (tie) {
      gameDispatch(actionHandlers.handleSetTieGame());
    }
    gameDispatch(actionHandlers.handleSwitchPlayer());
  }
}
