import React from "react";

export function PokemonName(props) {
    return (
        <div className="pokemon-name screen">
            {props.name}
            <span className="name-no">no. {props.no}</span>
        </div>
    );
}