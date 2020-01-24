import React, {useState, useEffect, useRef} from "react";
import Axios from "axios";
import styled from "styled-components";
import {TweenMax} from "greensock";
import Character from "./character";

const Container = styled.div`
    max-width: 1200px;
    min-height: 1000px;
    
    margin: 0 auto;
    margin-bottom: 80px;
    border: 1px solid black;
    border-radius: 10px;

    box-style: border-box;
    padding: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 1340px) {
        margin: 0 20px;
        margin-bottom: 80px;
      }

`;

export default function Characters() {
    let charactersRef = useRef(null);
    useEffect(() => {
            TweenMax.from(charactersRef, 1, {
            y: 1000
            }).play()
            
    },[])

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
      <Container ref={element => {
        charactersRef = element;
      }}>
          {characters.map((item, index) => {
              return <Character key={index} character={item}/>
          })}
      </Container>
  )
  
}