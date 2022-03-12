import React from "react";

const SearchPokemon = ({searchPokemon,handleChange}) =>{
   
    return(
        <>
            <input className="seach-bar" placeholder="Search Pokemon..." value={searchPokemon} onChange={(e) => handleChange(e)}/>
        </>
    )
}

export default SearchPokemon;