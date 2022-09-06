import React from "react";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../../App.js";

import OfferPost from "../../components/OfferPost/OfferPost.js";
import TopicNav from "../../components/TopicNav/TopicNav.js";
import TopicTab from "../../components/TopicTab/TopicTab.js";

// let data;
let coursesArray = [];

let topicTabs = [];

function descriptionFromat(data) {
    let instructors = data[0].title;
    for (let j = 1; j < data.length; j++) {
        instructors = instructors + ", " + data[j].title;
    }
    return instructors;
}

function loadCourses(data) {
    topicTabs = [];
    let idx = 0;
    for (let topicName in data) {
        coursesArray = [];
        let tabData = data[topicName];
        for (let i = 0; i < tabData.items.length; i++) {
            let instructors = descriptionFromat(
                tabData.items[i].visible_instructors
            );

            coursesArray = [
                ...coursesArray,
                {
                    id: tabData.items[i].id,
                    title: tabData.items[i].title,
                    imgSrc: tabData.items[i].image_125_H,
                    description: instructors,
                    ratingValue: Math.round(tabData.items[i].rating * 10) / 10,
                    oldPrice: "E£" + tabData.items[i].price,
                    newPrice: "E£" + tabData.items[i].price,
                    oldPrice: "E£163.400",
                    newPrice: "E£163.400",
                },
            ];
        }
        topicTabs = [
            ...topicTabs,
            idx == 0 ? (
                <div
                    role={"tabpanel"}
                    className="tab-pane active"
                    id={"tab" + tabData.id}
                >
                    <TopicTab
                        topicId={tabData.id}
                        title={tabData.header}
                        description={tabData.description}
                        courses={coursesArray}
                    ></TopicTab>
                </div>
            ) : (
                <div
                    role={"tabpanel"}
                    className="tab-pane"
                    id={"tab" + tabData.id}
                >
                    <TopicTab
                        topicId={tabData.id}
                        title={tabData.header}
                        description={tabData.description}
                        courses={coursesArray}
                    ></TopicTab>
                </div>
            ),
        ];
        idx++;
    }
}

function HomePage() {
    let { dataRecieved, homePageData } = useContext(dataContext);
    const [doneLoading, setDoneLoading] = useState(false);

    if (dataRecieved && !doneLoading) {
        loadCourses(homePageData);
        setDoneLoading(true);
    }

    return (
        <>
            <main style={{ width: "95vw", margin: "auto" }}>
                <OfferPost></OfferPost>
                {doneLoading ? (
                    <>
                        <TopicNav></TopicNav>

                        <div className="tab-content">{topicTabs}</div>
                    </>
                ) : (
                    <div>"spinner"</div>
                )}
            </main>
        </>
    );
}

export default HomePage;
