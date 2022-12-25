import React from "react";
import { padStats } from "./PadStats";

export function StatLine(props) {
    return (
        <div className="stat-line">
            {padStats(props.name, props.value, ".", 20)}
            {/* <span>{props.name}</span>
      {".".repeat(20 - props.name.length)}
      <span>{props.value}</span> */}
        </div>
    );
}