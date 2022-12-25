import React from "react";

export function SpriteControls(props) {
    return (
        <div className="sprite-controls">
            <div
                className={"sprite-control sprite-controls-gender " + (props.gender ? "sprite-control-selected" : "")}
                onClick={props.funcs.gender}
            >
                <i className="fas fa-venus" />
            </div>
            <div
                className={"sprite-control sprite-controls-shiny " + (props.shiny ? "sprite-control-selected" : "")}
                onClick={props.funcs.shiny}
            >
                <span>shiny</span>
            </div>
            <div
                className={"sprite-control sprite-controls-rotate " + (!props.front ? "sprite-control-selected" : "")}
                onClick={props.funcs.front}
            >
                <i className="fas fa-undo" />
            </div>
        </div>
    );
}