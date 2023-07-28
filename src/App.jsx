import { useEffect } from 'react';
import Board from './components/Board';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Board />
    </>
  );
}

export default App;
