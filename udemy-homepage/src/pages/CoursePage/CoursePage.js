import React, { useContext, useState } from "react";
import { dataContext } from "../../App.js";
import { useParams } from "react-router-dom";

import CourseDetailsCard from "../../components/CourseDetailsCard/CourseDetailsCard";

let courseId;
let topicId;
let courseData;
let courseReviewsData;

function descriptionFromat(data) {
    let instructors = data[0].title;
    for (let j = 1; j < data.length; j++) {
        instructors = instructors + ", " + data[j].title;
    }
    return instructors;
}

function findCourse(homePageData, reviewsData) {
    for (let topicName in homePageData) {
        if (homePageData[topicName].id == topicId) {
            let topic = homePageData[topicName];

            for (let i = 0; i < topic.items.length; i++) {
                let course = topic.items[i];
                if (course.id == courseId) {
                    courseData = course;
                    break;
                }
            }
            break;
        }
    }
    courseReviewsData = reviewsData[courseId];
}

function CoursePage() {
    let { dataRecieved, homePageData, reviewsData } = useContext(dataContext);
    const [doneLoading, setDoneLoading] = useState(false);
    if (dataRecieved && !doneLoading) {
        findCourse(homePageData, reviewsData);
        setDoneLoading(true);
    }
    courseId = useParams().courseId;
    topicId = useParams().topicId;

    return (
        <>
            {dataRecieved ? (
                <CourseDetailsCard
                    title={courseData.title}
                    headline={courseData.headline}
                    rating={courseData.rating}
                    numReviews={courseData.num_reviews}
                    numSubscribers={courseData.num_subscribers}
                    instructors={descriptionFromat(
                        courseData.visible_instructors
                    )}
                    updateDate={courseData.last_update_date}
                ></CourseDetailsCard>
            ) : (
                <div>Spinner</div>
            )}
        </>
    );
}

export default CoursePage;
