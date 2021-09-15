import React from 'react';
import Confetti from 'react-confetti';

import './styles.css';

//components
import { Home } from './home';

export default function App() {
  React.useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    return () => {
      document.removeEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <div className="App">
      <Confetti recycle={false} numberOfPieces={800} tweenDuration={8000} />
      <Home />
    </div>
  );
}
