import { actionHandlers } from "../store/actionHandlers";

export default function handleNavigateHistory(data, gameDispatch) {
  gameDispatch(actionHandlers.handleUpdateSquareValues(data));
}