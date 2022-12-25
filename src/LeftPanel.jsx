import React from "react";
import { PokemonDescription } from "./PokemonDescription";
import { PokemonName } from "./PokemonName";
import { PokemonSprite } from "./PokemonSprite";
import { Loading } from "./Loading";

export function LeftPanel(props) {
    const pData = props.pData;

    if (typeof pData === "object" && Object.keys(pData).length !== 0) {
        return (
            <div className="panel left-panel">
                <PokemonName name={pData.name} no={props.no} />
                <PokemonSprite src={pData.sprites} />
                <PokemonDescription description={props.description} no={props.no} />
            </div>
        );
    } else {
        return <Loading />;
    }
}