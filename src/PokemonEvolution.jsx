import React from "react";
import { PokemonSpriteSmall } from "./PokemonSpriteSmall";

export function PokemonEvolution(props) {
    const e1 = props.evoSprites[0];
    const e2 = props.evoSprites[1];
    const e3 = props.evoSprites[2];
    const n1 = props.evoNames[0];
    const n2 = props.evoNames[1];
    const n3 = props.evoNames[2];

    return (
        <div className="panel-row panel-evo">
            {/* <div className="panel-header evo-header">Evolutions</div> */}
            <PokemonSpriteSmall src={e1} evo="I" name={n1} />
            <PokemonSpriteSmall src={e2} evo="II" name={n2} />
            <PokemonSpriteSmall src={e3} evo="III" name={n3} />
        </div>
    );
}