import React from "react";
import Style from "../../../styles/CoursePage/Instructors/Instructors.module.css";
let instructorsList = [];

function Instructors({ instructors }) {
    loadInstructors(instructors);
    return (
        <>
            <h2>Instructors</h2>
            <ul>{instructorsList}</ul>
        </>
    );
}

function loadInstructors(data) {
    instructorsList = [];
    for (let i = 0; i < data.length; i++) {
        instructorsList = [
            ...instructorsList,
            <li>
                <h5>{data[i].title}</h5>
                <p>{data[i].job_title}</p>
                <img src={data[i].image_50x50} />
            </li>,
        ];
    }
}

export default Instructors;
