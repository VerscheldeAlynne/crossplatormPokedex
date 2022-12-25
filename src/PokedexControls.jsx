import React from 'react';
import { Button } from './Button';
import { NumInput } from './NumInput';

export function PokedexControls(props) {
    return (
        <div className="panel-row controls">
            <Button dir="left" onClick={props.controls.prev} />
            <NumInput no={props.no} func={props.controls.pick} />
            <Button dir="right" onClick={props.controls.next} />
        </div>
    );
}