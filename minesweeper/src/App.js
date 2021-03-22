import React from 'react';
import './App.css';
import { Board } from './components/Board';
import { Options } from './components/Options';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minesweeper</h1>
      </header>
      <div className="main">
        <Options />
        <Board />
      </div>
    </div>
  );
}

export default App;
