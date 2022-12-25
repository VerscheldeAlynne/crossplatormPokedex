import React from "react";
import { MoveList } from "./MoveList";
import { PokemonEvolution } from "./PokemonEvolution";
import { PokedexControls } from "./PokedexControls";
import { PokemonStats } from "./PokemonStats";
import { PokemonType } from "./PokemonType";
import { Loading } from './Loading'

export function RightPanel(props) {
    const types = props.pData.types;
    const stats = props.pData.stats;
    const moves = props.pData.moves;

    if (types) {
        return (
            <div className="panel right-panel">
                <div className="panel-row">
                    <PokemonStats stats={stats} />
                    <PokemonType types={types} />
                </div>

                <PokemonEvolution evoSprites={props.evoSprites} evoNames={props.evoNames} />
                <MoveList moves={moves} />
                <PokedexControls controls={props.controls} no={props.no} />
            </div>
        );
    } else {
        return <Loading />;
    }
}