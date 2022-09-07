import React from "react";
import { useState, useContext } from "react";
import Style from "../../../styles/HomePage/TopicNav/TopicNav.module.css";

import { dataContext } from "../../../App.js";

let navElements = [];
function TopicNav(probs) {
    let { dataRecieved, homePageData, reviewsData } = useContext(dataContext);
    const [doneLoading, setDoneLoading] = useState(0);

    if (dataRecieved && !doneLoading) {
        let idx = 0;
        navElements = [];
        for (let topicName in homePageData) {
            let id = homePageData[topicName].id;
            let title = homePageData[topicName].title;
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
        setDoneLoading(true);
    }

    return (
        <>
            <ul className="nav nav-tabs" role="tablist">
                {navElements}
            </ul>
        </>
    );
}

export default TopicNav;
