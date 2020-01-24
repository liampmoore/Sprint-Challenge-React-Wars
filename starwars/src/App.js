import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    if (characters.length < 9) {
    Axios.get(`https://swapi.co/api/people/${characters.length + 1}/`)
      .then((response) => {
        setCharacters([...characters, response])
        console.log(characters)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }, [characters, setCharacters])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
