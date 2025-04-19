import React from "react";
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            margin:"20px 0"
        }}
    />
);

export default ColoredLine;