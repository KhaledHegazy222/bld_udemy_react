import React from "react";
import Style from "../../../styles/HomePage/PopUpCard/PopUpCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

let objectivesList = [];

function PopUpCard({ title, updateDate, headline, objectives }) {
    loadObjectives(objectives);
    return (
        <>
            <div className={Style.popCardDiv}>
                <h2 className={Style.title}>{title}</h2>
                <p className={Style.updateText}>
                    Updated{" "}
                    <span className={Style.updateDate}>{updateDate}</span>
                </p>
                <p className={Style.courseDetails}>
                    2.5 total hours . All levels . Subtitle
                </p>
                <p className={Style.headline}>{headline}</p>
                <ul className={Style.objectivesList}>{objectivesList}</ul>
                <div className={Style.buttonsList}>
                    <button className={Style.addToCartBtn}>Add to Cart</button>
                    <button className={Style.favourites}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </>
    );
}
function loadObjectives(data) {
    objectivesList = [];
    for (let i = 0; i < data.length; i++) {
        objectivesList = [
            ...objectivesList,
            <li className={Style.objectivesElement}>
                <FontAwesomeIcon icon={faCheck} /> {data[i]}
            </li>,
        ];
    }
}

export default PopUpCard;
