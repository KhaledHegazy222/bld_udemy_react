import React, { useContext, useState } from "react";
import { dataContext } from "../../App.js";
import { useParams } from "react-router-dom";

import CourseDetailsCard from "../../components/CourseDetailsCard/CourseDetailsCard";
import Objectives from "../../components/Objectives/Objectives";
import CourseContent from "../../components/CourseContent/CourseContent";
import Requirments from "../../components/Requirments/Requirments";
import Description from "../../components/Description/Description";
import Instructors from "../../components/Instructors/Instructors";
import Reviews from "../../components/Reviews/Reviews";

let courseId;
let topicId;

let courseData;
let courseReviewsData;
let courseContentData;

function CoursePage() {
    let { dataRecieved, homePageData, reviewsData, coursePageData } =
        useContext(dataContext);
    const [doneLoading, setDoneLoading] = useState(false);
    if (dataRecieved && !doneLoading) {
        findCourse(homePageData, reviewsData, coursePageData);

        setDoneLoading(true);
    }
    courseId = useParams().courseId;
    topicId = useParams().topicId;

    return (
        <>
            {dataRecieved ? (
                <>
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
                    <Objectives
                        objectives={courseData.objectives_summary}
                    ></Objectives>
                    <CourseContent
                        content={courseContentData.curriculum_context.data}
                        id={courseId}
                    ></CourseContent>
                    <Requirments
                        requirments={courseContentData.details.Requirements}
                    ></Requirments>
                    <Description
                        description={courseContentData.details.description}
                    ></Description>
                    <Instructors
                        instructors={courseData.visible_instructors}
                    ></Instructors>
                    <Reviews reviews={reviewsData[courseId].results}></Reviews>
                </>
            ) : (
                <>
                    <div>Spinner</div>
                </>
            )}
        </>
    );
}

function descriptionFromat(data) {
    let instructors = data[0].title;
    for (let j = 1; j < data.length; j++) {
        instructors = instructors + ", " + data[j].title;
    }
    return instructors;
}

function findCourse(homePageData, reviewsData, coursePageData) {
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
    courseContentData = coursePageData[courseId];
}

export default CoursePage;
