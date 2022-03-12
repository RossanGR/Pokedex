import React from "react";


const Card = ({pokemon}) =>{
    // Tratamento de URL
    // const urlAPI = pokemon.url.split('/');
    // const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    // let completeUrl = url.substr(0, 77)+urlAPI[6]+".png";
  
  
      return(
        <>            
            <div className={`card`}>               

                 {/* <img src={pokemon.sprites.front_default}/>  */}
                 <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}/> 

                <div className="card-text">
                    <h2>{pokemon.id}.{pokemon.name}</h2>
                        {pokemon.types.map(typeInfo => 
                        <p className={typeInfo.type.name}>{typeInfo.type.name}</p>
                        )}
                </div>
            </div>        
        </>
    )
}

export default Card;