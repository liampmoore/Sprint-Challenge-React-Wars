import React, {useEffect} from 'react';
import Axios from "axios";
import './App.css';
import Characters from "./components/characters";

const App = () => {
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters/>
    </div>
  );
}

export default App;
