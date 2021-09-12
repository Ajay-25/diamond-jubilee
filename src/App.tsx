import React from 'react';

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
      <Home />
    </div>
  );
}
