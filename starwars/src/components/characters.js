import React, {useState, useEffect} from "react";
import Axios from "axios";
import styled from "styled-components";
import Character from "./character";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 80px;
    border: 1px solid black;
    border-radius: 10px;

    box-style: border-box;
    padding: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default function Characters() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length < 9) {
        Axios.get(`https://swapi.co/api/people/${characters.length + 1}/`)
            .then((response) => {
                setCharacters([...characters, response.data])
                console.log(characters)
            })
            .catch((error) => {
                console.log(error)
            });
    }

  }, [characters, setCharacters]);


  return (
      <Container>
          {characters.map((item, index) => {
              return <Character key={index} character={item}/>
          })}
      </Container>
  )
  
}