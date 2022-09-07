import React from "react";
import Style from "../../../styles/CoursePage/Description/Description.module.css";
function Description({ description }) {
    return (
        <>
            <h2>Description</h2>
            <p>{description}</p>
        </>
    );
}

export default Description;
