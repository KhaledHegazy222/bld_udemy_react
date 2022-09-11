import React from "react";
import Style from "../../../styles/CoursePage/Instructors/Instructors.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCirclePlay,faUserGroup,faAward } from "@fortawesome/free-solid-svg-icons";

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
                <div className={Style.instructorsDataDiv}>
                    <img className={Style.image} src={data[i].image_100x100} />
                    <ul className={Style.instructorAchievmentsList}>
                        <li>
                            <FontAwesomeIcon className={Style.achievmentsIcon} icon={faStar} /> 4.4 Instructor
                            Rating
                        </li>
                        <li>
                            <FontAwesomeIcon className={Style.achievmentsIcon} icon={faAward} /> 73,661 Reviews
                        </li>
                        <li>
                            <FontAwesomeIcon className={Style.achievmentsIcon} icon={faUserGroup} /> 888,995 Students
                        </li>
                        <li>
                            <FontAwesomeIcon className={Style.achievmentsIcon} icon={faCirclePlay} /> 16 Courses
                        </li>
                    </ul>
                </div>

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
