import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { getPokemons } from "../services/pokemonService";

function CardList() {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    async function init() {
      setPokemonList(await getPokemons());
    }
    init();
  }, []);
  //   setPokemonList(getPokemons);

  console.log("hey you", pokemonList);
  return (
    pokemonList && (
      <ul>
        {pokemonList.resultsData?.map((pokemon) => (
          <CardItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    )
  );
}
export default CardList;
