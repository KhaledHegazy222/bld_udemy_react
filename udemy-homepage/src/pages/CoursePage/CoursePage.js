import React, { useContext, useState } from "react";
import { dataContext } from "../../App.js";
import { useParams } from "react-router-dom";

import Spinner from "../../components/Spinner/Spinner.js";

import CourseDetailsCard from "../../components/CoursePage/CourseDetailsCard/CourseDetailsCard.js";
import CourseInfo from "../../components/CoursePage/CourseInfo/CourseInfo";
import Objectives from "../../components/CoursePage/Objectives/Objectives";
import CourseContent from "../../components/CoursePage/CourseContent/CourseContent";
import Requirments from "../../components/CoursePage/Requirments/Requirments";
import Description from "../../components/CoursePage/Description/Description";
import Instructors from "../../components/CoursePage/Instructors/Instructors";
import Reviews from "../../components/CoursePage/Reviews/Reviews";

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
                    {/* <CourseDetailsCard
                        courseImg={courseData.image_480x270}
                        newPrice="E£149.99"
                        oldPrice="E£679.99"
                    ></CourseDetailsCard> */}

                    <CourseInfo
                        title={courseData.title}
                        headline={courseData.headline}
                        rating={courseData.rating}
                        numReviews={courseData.num_reviews}
                        numSubscribers={courseData.num_subscribers}
                        instructors={descriptionFromat(
                            courseData.visible_instructors
                        )}
                        updateDate={courseData.last_update_date}
                    ></CourseInfo>
                    <div style={{ width: "40vw", marginLeft: "20vw" }}>
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
                        <Reviews reviews={courseReviewsData.results}></Reviews>
                    </div>
                </>
            ) : (
                <>
                    <Spinner></Spinner>
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
