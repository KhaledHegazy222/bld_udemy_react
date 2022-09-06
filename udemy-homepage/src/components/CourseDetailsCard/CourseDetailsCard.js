import React from "react";
import { useContext } from "react";

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
