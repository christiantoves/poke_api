import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = props => {
    const [pokemons, setPokemons] = useState([])

    const [fetch, setFetch] = useState(false)

    const handleClick = () => {
        setFetch(true)
        axios.get("http://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
            const name =response.data.results.map(pokemon =>{
                return pokemon.name
            })
            setPokemons([...name])
        }).catch(err =>{
                console.log(err)
        })
    }
    
    
    return(
        <div>
            <button onClick = {handleClick}>Fetch Pokemon</button>
            {fetch ? <ul>
            {
                pokemons.map(pokemon =><li>{pokemon}</li>)
            }
            </ul> : null}
        </div>
    )
}

export default Display