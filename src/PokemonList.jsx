import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          className="list-item"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
            backgroundColor: "#4CD4D0",
          }}
        >
          <div
            className="list-item-name"
            style={{
              color: "#961D4E",
            }}
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
