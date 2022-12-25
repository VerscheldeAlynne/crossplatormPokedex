import React from "react";
import { Type } from "./Type";

export function PokemonType(props) {
    const types = props.types;
    return (
        <div className="type-list">
            <div className="panel-header">Types</div>
            <div className="type-box">
                {types.map(t => {
                    const type = t.type.name;
                    return <Type type={type} key={type} />;
                })}
            </div>
            {/* <div className="panel-header">Evolutions</div> */}
        </div>
    );
}