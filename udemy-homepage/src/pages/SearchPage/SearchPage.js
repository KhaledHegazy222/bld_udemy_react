import React from "react";
import { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { dataContext } from "../../App.js";

import OfferPost from "../../components/HomePage/OfferPost/OfferPost.js";
import TopicNav from "../../components/HomePage/TopicNav/TopicNav.js";
import TopicTab from "../../components/HomePage/TopicTab/TopicTab.js";
import Spinner from "../../components/Spinner/Spinner";

let coursesArray = [];
let topicTabs = [];
let searchString = "";

function SeachPage() {
    let { dataRecieved, homePageData } = useContext(dataContext);
    const [doneLoading, setDoneLoading] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();

    searchString = searchParams.get("searchBar");

    if (dataRecieved) {
        loadCourses(homePageData, searchString);
        if (!doneLoading) setDoneLoading(true);
    }

    return (
        <>
            <main style={{ width: "80vw", margin: "auto" }}>
                {doneLoading ? (
                    <>
                        <OfferPost></OfferPost>
                        <TopicNav searchString={searchString}></TopicNav>
                        <div className="tab-content">{topicTabs}</div>
                    </>
                ) : (
                    <Spinner></Spinner>
                )}
            </main>
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

function loadCourses(data) {
    topicTabs = [];
    let idx = 0;
    for (let topicName in data) {
        coursesArray = [];
        let tabData = data[topicName];
        for (let i = 0; i < tabData.items.length; i++) {
            if (
                typeof searchString &&
                !tabData.items[i].title
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
            )
                continue;
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
                    oldPrice: "E£149.99",
                    newPrice: "E£679.99",
                },
            ];
        }
        if (coursesArray.length != 0) {
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
}
export default SeachPage;
