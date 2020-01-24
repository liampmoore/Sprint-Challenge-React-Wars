import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Axios from "axios";


const Card = styled.div`
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 25px 0;
    height: 200px;
    background-color: #5b839ebb;
`;

const Name = styled.h3`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`;

const Detail = styled.p`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`;

export default function Character(props) {
    const character = props.character;
    const [homeworld, setHomeworld] = useState('');
    

    useEffect(() => {
        if (homeworld === '') {
        Axios.get(character.homeworld)
            .then((response) =>{
                setHomeworld(response.data.name)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [homeworld, setHomeworld])

  

    return (
        <Card>
            <Name>{character.name}</Name>
            <Detail><strong>Height: </strong>{character.height}</Detail>
            <Detail><strong>Mass: </strong>{character.mass}</Detail>
            <Detail><strong>Birth year: </strong>{character.birth_year}</Detail>
            {homeworld !== '' ? <Detail><strong>Homeworld: </strong>{homeworld}</Detail>:<></>}
        </Card>
    )
}