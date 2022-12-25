import React from "react";
import { padStats } from "./PadStats";

export function MoveEntry(props) {
    const move = props.move;
    const name = move.name || move.names.filter(m => m.language.name === "en")[0].name;
    const acc = move.accuracy;
    const pow = move.power;
    const pp = move.pp;
    const type = move.type.name;
    //   const status = "" || "---";˝
    const lvl = props.lvl;
    // console.log("move ", move);
    return (
        <div className="move-body move-screen screen">
            <div className="move-left">
                <div className="move-name">{name}</div>
                <div className="move-stat">{padStats("Accuracy", acc, ".", 16)}</div>
                <div className="move-stat">{padStats("Power", pow, ".", 16)}</div>
                <div className="move-stat">{padStats("PP", pp, ".", 16)}</div>
            </div>
            <div className="move-right">
                <div className="move-type">Type: {type}</div>
                {/* <div className="move-status">Status Effect: {status}</div> */}
                <div className="move-learn">Learn: Lvl {lvl}</div>
            </div>
        </div>
    );
}