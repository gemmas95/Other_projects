import React from "react";

function CardItem({ pokemon }) {
  const imgPoke = `${pokemon.name
    .replace(/(')/g, "")
    .replace(/(\. )/g, "-")
    .replace(/(♂)/g, "-m")
    .replace(/(♀)/g, "-f")
    .toLowerCase()}`;

  console.log(imgPoke);
  return (
    <li>
      <img
        src={`https://img.pokemondb.net/sprites/bank/normal/${imgPoke}.png`}
        alt={pokemon.name}
      ></img>
      <p>##{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
    </li>
  );
}
export default CardItem;
