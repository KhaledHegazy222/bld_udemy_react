import React from "react";
import { Link } from "react-router-dom";

import style from "./TopicTab.module.css";

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
            <div className={style.topicBody}>
                <h1 className={style.topicHeader}>{probs.title}</h1>
                <p className={style.topicParagraph}>{probs.description}</p>
                <button className={style.exploreBtn}>{"Explore Python"}</button>
                <div className={style.coursesList}>
                    {courses}
                    <button className={style.nextBtn + " btn"}>
                        <i className=" bi bi-arrow-right-circle-fill"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopicTab;
