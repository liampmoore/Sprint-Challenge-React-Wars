import React, {useState, useEffect} from 'react';
import './App.css';
import Characters from "./components/characters"

const App = () => {
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters/>
    </div>
  );
}

export default App;
