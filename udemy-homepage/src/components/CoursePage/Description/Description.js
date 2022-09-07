import React from "react";
import Style from "../../../styles/CoursePage/Description/Description.module.css";
let visibleDescription, hiddenDescription;
let needMore = false;
function Description({ description }) {
    loadDescription(description);
    return (
        <>
            <h2 className={Style.heading}>Description</h2>
            <p className={Style.content}>
                {needMore ? (
                    <>
                        {visibleDescription}
                        <details>
                            <summary>Show more ...</summary>
                            {hiddenDescription}
                        </details>
                    </>
                ) : (
                    <>{description}</>
                )}
            </p>
        </>
    );
}

function loadDescription(data) {
    needMore = false;
    visibleDescription = hiddenDescription = "";
    let wordsArr = data.split(" ");
    let wordsNum = wordsArr.filter((word) => word !== "").length;
    if (wordsNum > 60) {
        needMore = true;

        for (let i = 0; i < wordsNum; i++) {
            if (i < 60)
                visibleDescription = visibleDescription + " " + wordsArr[i];
            else hiddenDescription = hiddenDescription + " " + wordsArr[i];
        }
    }
}

export default Description;
