import { React, useState } from "react";
import Style from "../../../styles/CoursePage/Like/Like.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Like() {
    const [state, setState] = useState("idle");

    const likeClick = () => {
        if (state == "like") {
            setState("idle");
        } else {
            setState("like");
        }
    };
    const dislikeClick = () => {
        if (state == "dislike") {
            setState("idle");
        } else {
            setState("dislike");
        }
    };

    return (
        <>
            <button
                className={
                    Style.btn +
                    " " +
                    (state == "like" ? Style.clicked : Style.idle)
                }
                onClick={likeClick}
            >
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button
                className={
                    Style.btn +
                    " " +
                    (state == "dislike" ? Style.clicked : Style.idle)
                }
                onClick={dislikeClick}
            >
                <FontAwesomeIcon icon={faThumbsDown} />
            </button>
        </>
    );
}

export default Like;
