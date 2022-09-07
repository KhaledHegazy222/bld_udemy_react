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
            <div className={Style.CourseInfo}>
                <div className={Style.CourseInfoContent}>
                    <h2 className={Style.title}> {title}</h2>
                    <p className={Style.headline}> {headline}</p>
                    <div className={Style.review}>
                        <div className={Style.courseReviewData}>
                            {" "}
                            {rating.toFixed(1)}
                        </div>
                        <div
                            className={
                                Style.courseReviewData + " " + Style.numReviews
                            }
                        >
                            {"(" + numReviews + " ratings)"}
                        </div>
                        <div className={Style.courseReviewData}>
                            {numSubscribers + " students"}
                        </div>
                    </div>
                    <p className={Style.instructors}>
                        Created by <span className={Style.instructorName}>{instructors}</span>
                    </p>
                    <p className={Style.updateDate}>
                        {"Last Updated " + updateDate}
                    </p>
                </div>
            </div>
        </>
    );
}

export default CourseDetailsCard;
