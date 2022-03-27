import React from 'react';
import './App.css';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles'

function App() {
  return (
    <div className="App">
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App;
