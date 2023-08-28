export default function calculateTie(nextSquares) {
  const availableSquares = nextSquares.filter((item) => item == null);

  if (availableSquares.length === 0) {
    return true;
  } else return false;
}
