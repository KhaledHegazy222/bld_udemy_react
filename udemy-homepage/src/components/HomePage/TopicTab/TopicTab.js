import React from "react";

import Style from "../../../styles/HomePage/TopicTab/TopicTab.module.css";

import Card from "../Card/Card.js";
function TopicTab(probs) {
    let courses = probs.courses.map((courseData) => {
        return (
            <Card
                topicId={probs.topicId}
                id={courseData.id}
                imgSrc={courseData.imgSrc}
                title={courseData.title}
                description={courseData.description}
                ratingValue={courseData.ratingValue}
                newPrice={courseData.newPrice}
                oldPrice={courseData.oldPrice}
            ></Card>
        );
    });
    return (
        <>
            <div className={Style.topicBody}>
                <h1 className={Style.topicHeader}>{probs.title}</h1>
                <p className={Style.topicParagraph}>{probs.description}</p>
                <button className={Style.exploreBtn}>{"Explore Python"}</button>
                <div className={Style.coursesList}>
                    {courses}
                    <button className={Style.nextBtn + " btn"}>
                        <i className=" bi bi-arrow-right-circle-fill"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopicTab;
