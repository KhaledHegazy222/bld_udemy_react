import React from "react";
import Style from "../../../styles/CoursePage/CourseInfo/CourseInfo.module.css";

function CourseDetailsCard({
    title,
    headline,
    rating,
    numReviews,
    numSubscribers,
    instructors,
    updateDate,
}) {
    return (
        <>
            <div> {title}</div>
            <div> {headline}</div>
            <div> {rating}</div>
            <div> {numReviews}</div>
            <div> {numSubscribers}</div>
            <div> {instructors}</div>
            <div> {updateDate}</div>
        </>
    );
}

export default CourseDetailsCard;
