import React from 'react'
import axios from "axios";
// States
import { useState,useEffect } from 'react';
// CSS
import './App.css';
import { Spinner } from 'react-bootstrap';
// Components
import Cards from './components/Cards';

function App() {
  const [pokemon,setPokemon] = useState([]);
  const [loading,setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('')

  const handleChange = (e) =>{
    setSearchPokemon(e.target.value);
  }
  
  // useEffect(()=>{
  //     setLoading(true) 
  //     axios.get(currentPage)
  //          .then(res=>{
  //            const pokemonData = res.data   
  //            setLoading(false) 
  //            setNextPageUrl(res.data.next)
  //            setPrevPageUrl(res.data.previous)        
  //            setPokemon(pokemonData.results);
  //          })
  // },[])

  const getPokemonList = async () =>{
    let pokemonArray = []; 
    for(let i = 1; i<= 150 ; i++){
        pokemonArray.push(await getPokemonData(i));
    } 
    setPokemon(pokemonArray);
    setLoading(false)
  }

  const getPokemonData = async (id) =>{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res
  }

  useEffect(() =>{
    getPokemonList();
  },[]);

  

  console.log(pokemon)
  return (
    <>
    <div className='wrapper'>
      {loading?
       
        <Spinner className="center mt-custom" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner> 
      :<Cards searchPokemon={searchPokemon} handleChange={handleChange} pokemon={pokemon}/>}      
    </div>
    </> 
  )
}

export default App;
