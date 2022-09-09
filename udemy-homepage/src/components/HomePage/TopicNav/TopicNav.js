import React from "react";
import { useState, useContext, useEffect } from "react";
import Style from "../../../styles/HomePage/TopicNav/TopicNav.module.css";

import { dataContext } from "../../../App.js";

let navElements = [];
function TopicNav({ searchString }) {
    let { dataRecieved, homePageData, reviewsData } = useContext(dataContext);
    const [doneLoading, setDoneLoading] = useState(0);

    if (dataRecieved) {
        loadElements(homePageData, searchString);
        if (!doneLoading) setDoneLoading(true);
    }

    return (
        <>
            <ul className="nav nav-tabs" role="tablist">
                {navElements}
            </ul>
        </>
    );
}

function loadElements(homePageData, searchString) {
    let idx = 0;
    navElements = [];
    for (let topicName in homePageData) {
        let id = homePageData[topicName].id;
        let title = homePageData[topicName].title;
        let empty = 1;
        let tabData = homePageData[topicName];
        for (let i = 0; i < tabData.items.length; i++) {
            if (
                !tabData.items[i].title
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
            )
                continue;
            empty = 0;
        }
        if (!empty) {
            navElements = [
                ...navElements,

                idx == 0 ? (
                    <li role="presentation" className={"active"}>
                        <a
                            href={"#tab" + id}
                            data-toggle="tab"
                            className={Style.tabLink}
                        >
                            {title}
                        </a>
                    </li>
                ) : (
                    <li role="presentation">
                        <a
                            href={"#tab" + id}
                            data-toggle="tab"
                            className={Style.tabLink}
                        >
                            {title}
                        </a>
                    </li>
                ),
            ];
            idx++;
        }
    }
}
export default TopicNav;
