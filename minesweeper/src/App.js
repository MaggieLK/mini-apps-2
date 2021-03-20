import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { Board } from './components/Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minesweeper</h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
