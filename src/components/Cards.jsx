import React from "react";


import Card from "./Card";
import SearchPokemon from './SearchPokemon';
const Cards = ({searchPokemon,handleChange,pokemon}) =>{
   
    return(
        <>  
            <SearchPokemon searchPokemon={searchPokemon} handleChange={handleChange}/>
            <div className="grid-col-4">
               {/* Faz um filtro e vai pegar todos que são iguais ou parecidos*/}
                    {pokemon.filter((val)=>{
                        if(searchPokemon === ""){
                            return val
                        } else if(val.data.name.toLowerCase().includes(searchPokemon.toLowerCase())){
                            return val
                        }
                    }).map(pokemon =>(
                        <Card key={pokemon.name} pokemon={pokemon.data}/>
                    ))}
                
            </div>
        </>
    )
}

export default Cards;