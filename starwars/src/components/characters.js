import React, {useState, useEffect, useRef} from "react";
import Axios from "axios";
import styled from "styled-components";
import {TweenMax} from "greensock";
import Character from "./character";
import Loading from "./loadingsvg";


const NextPage = styled.button`
    background-color: #af6e4b;
    border: 1px solid black;
    border-radius: 10px;
    height: 2rem;
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 2;
`;
const PreviousPage = styled.button`
    background-color: #af6e4b;
    border: 1px solid black;
    border-radius: 10px;
    height: 2rem;
    display: block;
    position: absolute;
    top: 30px;
    left: 20px;
    z-index: 2;
`;

const Container = styled.div`
    max-width: 900px;
    min-height: 1350px;
    
    margin: 0 auto;
    margin-bottom: 80px;
    border: 1px solid black;
    border-radius: 10px;

    box-style: border-box;
    padding: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 1040px) {
        margin: 0 20px;
        margin-bottom: 80px;
      }

`;

export default function Characters() {

    const [page, setPage] = useState('https://swapi.co/api/people/');
    const [characters, setCharacters] = useState([]);
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');


    let charactersRef = useRef(null);
    let nextRef = useRef(null);
    useEffect(() => {
            TweenMax.from(charactersRef, 1, {
            y: 1000
            }).play()
            
    },[])
   
    useEffect(() => {
            Axios.get(page)
                .then((response) => {
                    setCharacters(response.data.results)
                    setPrevious(response.data.previous)
                    setNext(response.data.next)
                })
                .catch((error) => {
                    console.log(error)
                });
    }, [page]);

    useEffect(() => {
        console.log(previous)        
    }, [previous])
    useEffect(() => {
        console.log(next)
    }, [next])
    useEffect(() => {
        console.log(characters)
    }, [characters])

    

  return (
      <Container ref={element => {charactersRef = element;}}>
        {characters.length === 0 ? <div><Loading size="64"/><p>Waiting for server...</p></div>:<></>}  
        {previous ? <PreviousPage onClick={() => {
            setPage(previous);
        }}>Previous</PreviousPage>:<></>}
        {next ? <NextPage onClick={() => {
            setPage(next);
        }} ref={nextRef}>Next</NextPage>:<></>}
          {characters.map((item, index) => {
              return <Character key={index} character={item}/>
          })}
      </Container>
  )
  
}