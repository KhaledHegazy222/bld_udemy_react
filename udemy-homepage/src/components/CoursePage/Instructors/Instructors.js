import React from "react";
import Style from "../../../styles/CoursePage/Instructors/Instructors.module.css";
let instructorsList = [];

function Instructors({ instructors }) {
    loadInstructors(instructors);
    return (
        <>
            <h2 className={Style.header}>Instructors</h2>
            <ul className={Style.instructorsList}>{instructorsList}</ul>
        </>
    );
}

function loadInstructors(data) {
    instructorsList = [];
    for (let i = 0; i < data.length; i++) {
        instructorsList = [
            ...instructorsList,
            <li>
                <h4 className={Style.title}>{data[i].title}</h4>
                <p className={Style.jobTitle}>{data[i].job_title}</p>
                <img className={Style.image} src={data[i].image_100x100} />
                <p className={Style.instructorDescription}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    <details>
                        <summary>Show More ...</summary>
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </details>
                </p>
            </li>,
        ];
    }
}

export default Instructors;
