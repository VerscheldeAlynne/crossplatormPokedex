import React from "react";
import { StatLine } from "./StatLine";

export function PokemonStats(props) {
    const stats = props.stats;
    return (
        <div className="screen stats">
            {stats.map(s => {
                const name = s.stat.name;
                const value = s.base_stat;

                return <StatLine name={name} value={value} key={name} />;
            })}
        </div>
    );
}