import React, {useState, useEffect} from "react";
import Axios from "axios";
import styled from "styled-components";





export default function Characters() {

  const [characters, setCharacters] = useState([]);

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
  }, [characters, setCharacters]);


  return (
      <></>
  )
  
}