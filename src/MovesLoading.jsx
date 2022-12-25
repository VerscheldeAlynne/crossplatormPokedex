import React from "react";

function padStats(stat, val, sep, len) {
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
    return output;
}

export function MovesLoading() {
    return (
        <div className="move-body move-screen screen">
            <div className="move-left">
                <div className="move-name" style={{ textTransform: "none" }}>
                    xxxxx xxxxx
                </div>
                <div className="move-stat">{padStats("Accuracy", "xx", ".", 16)}</div>
                <div className="move-stat">{padStats("Power", "xx", ".", 16)}</div>
                <div className="move-stat">{padStats("PP", "xx", ".", 16)}</div>
            </div>
            <div className="move-right">
                <div className="move-type">Type: xxxxx</div>
                {/* <div className="move-status">Status Effect: {status}</div> */}
                <div className="move-learn">Learn: Lvl xx</div>
            </div>
        </div>
    );
}