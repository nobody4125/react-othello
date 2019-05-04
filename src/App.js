import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Othello
      </header>
      {/*
      <header className="App-header">
      </header>
        <img src={logo} className="App-logo" alt="logo" />
      */}

      <Game />
    </div>
  );
}

export default App;
