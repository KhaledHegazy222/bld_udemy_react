import { React, useEffect } from "react";

let objectivesList = [];

function Objectives({ objectives }) {
    loadObjectives(objectives);

    return (
        <>
            <h3>What you'll learn</h3>
            <ul>{objectivesList}</ul>
        </>
    );
}

function loadObjectives(data) {
    objectivesList = [];
    for (let i = 0; i < data.length; i++) {
        objectivesList = [...objectivesList, <li>{data[i]}</li>];
    }
}

export default Objectives;
