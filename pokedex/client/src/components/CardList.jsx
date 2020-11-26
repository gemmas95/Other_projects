import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { getPokemons } from "../services/pokemonService";
import { NavLink } from "react-router-dom";
function CardList() {
  const [pokemonData, setPokemonData] = useState(null);

  let params = new URL(document.location).searchParams;
  let page = +params.get("page");

  useEffect(() => {
    async function init() {
      setPokemonData(await getPokemons(page));
    }
    init();
  }, [page]);
  //   setpokemonData(getPokemons);

  console.log("hey you", pokemonData);
  console.log("actual page", page);

  return (
    pokemonData && (
      <>
        <ul className="pokemons__list">
          {pokemonData.resultsData?.map((pokemon) => (
            <CardItem key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
        <div>
          <ul className="pagination">
            {pokemonData.previous && (
              <>
                <li>
                  <NavLink to={{ search: `?page=1` }}>First</NavLink>
                </li>
                <li>
                  <NavLink
                    to={{ search: `?page=${pokemonData.previous?.page}` }}
                  >
                    {pokemonData.previous?.page}
                  </NavLink>
                </li>
              </>
            )}
            <li className="currentLink">
              <NavLink
                to={{
                  search: `?page=${
                    pokemonData.previous?.page + 1 || pokemonData.next?.page - 1
                  }`,
                }}
              >
                {pokemonData.previous?.page + 1 || pokemonData.next?.page - 1}
              </NavLink>
            </li>
            {pokemonData.next && (
              <>
                <li>
                  <NavLink to={{ search: `?page=${pokemonData.next?.page}` }}>
                    {pokemonData.next?.page}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={{
                      search: `?page=${(pokemonData.total / 10).toFixed(0)}`,
                    }}
                  >
                    Last
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </>
    )
  );
}
export default CardList;
