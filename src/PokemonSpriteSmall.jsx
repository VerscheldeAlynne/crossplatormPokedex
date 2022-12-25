import React from "react";
import { PokeBall } from "./PokeBall";

export function PokemonSpriteSmall(props) {
    let evoImage;

    if (props.src) {
        evoImage = <img src={props.src} alt="pokemon" className="pokemon-sprite pokemon-sprite-small" />;
    } else {
        evoImage = <PokeBall />;
    }

    return (
        <div>
            <div className="flex-center">
                <div className="evo-num">{props.evo}</div>
            </div>
            {evoImage}
            <div className="screen evo-name">{props.name || "No Data"}</div>
        </div>
    );
}