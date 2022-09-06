import React from "react";

let requirmentsList = [];

function Requirments({ requirments }) {
    loadRequirments(requirments);
    return (
        <>
            <h2>Requirements</h2>
            <ul>{requirmentsList} </ul>;
        </>
    );
}

function loadRequirments(data) {
    requirmentsList = [];
    for (let i = 0; i < data.length; i++) {
        requirmentsList = [...requirmentsList, <li>{data[i]}</li>];
    }
}

export default Requirments;
