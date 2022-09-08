import React from "react";
import Style from "../../../styles/CoursePage/Requirments/Requirments.module.css";

let requirmentsList = [];

function Requirments({ requirments }) {
    loadRequirments(requirments);
    return (
        <>
            <h2 className={Style.requirmentsHeader}>Requirements</h2>
            <ul>{requirmentsList} </ul>
        </>
    );
}

function loadRequirments(data) {
    requirmentsList = [];
    for (let i = 0; i < data.length; i++) {
        requirmentsList = [
            ...requirmentsList,
            <li className={ Style.content}>{data[i]}</li>,
        ];
    }
}

export default Requirments;
