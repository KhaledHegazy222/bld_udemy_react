import React from "react";
import style from "./TopicTab.module.css";
import Card from "./Card.js";
function TopicTab(probs) {
    let courses = probs.courses.map((courseData) => {
        return (
            <Card
                imgSrc={courseData.imgSrc[Object.keys(courseData.imgSrc)[0]]}
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
                <div className={style.coursesList}>{courses}</div>
            </div>
        </>
    );
}

export default TopicTab;
