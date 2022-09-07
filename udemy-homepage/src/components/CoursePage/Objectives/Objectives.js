import { React, useEffect } from "react";
import Style from "../../../styles/CoursePage/Objectives/Objectives.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

let objectivesList = [];

function Objectives({ objectives }) {
    loadObjectives(objectives);

    return (
        <>
            <div className={Style.ObjectivesBody}>
                <h3 className={Style.objectivesHeader}>What you'll learn</h3>
                <ul className={Style.objectivesList}>{objectivesList}</ul>
            </div>
        </>
    );
}

function loadObjectives(data) {
    objectivesList = [];
    for (let i = 0; i < data.length; i++) {
        objectivesList = [
            ...objectivesList,

            <li className={Style.objectivesListElem}>
                <FontAwesomeIcon icon={faCheck} />
                {" " + data[i]}
            </li>,
        ];
    }
}

export default Objectives;
