import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import Style from "../../../styles/CoursePage/Feedback/Feedback.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

let starList = [];
function Feedback({ rating }) {
    loadStars(Math.floor(rating));
    return (
        <>
            <h2 className={Style.feedbackHeader}>Student Feedback</h2>
            <div className={Style.feedbackContent}>
                <div className={Style.courseRating}>
                    <h3 className={Style.ratingValue}>{rating.toFixed(1)}</h3>
                    <div className={Style.starListRating}>{starList}</div>
                    <div className={Style.ratingText}>Course Rating</div>
                </div>
                <div className={Style.starNum}>
                    <div className={Style.singleStar}>
                        <div className={Style.countainerProgress}>
                            <div
                                className={Style.currentProgress}
                                style={{ width: "43%" }}
                            ></div>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <span className={Style.precentage}>43%</span>
                        </div>
                    </div>
                    <div className={Style.singleStar}>
                        <div className={Style.countainerProgress}>
                            <div
                                className={Style.currentProgress}
                                style={{ width: "37%" }}
                            ></div>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <span className={Style.precentage}>37%</span>
                        </div>
                    </div>
                    <div className={Style.singleStar}>
                        <div className={Style.countainerProgress}>
                            <div
                                className={Style.currentProgress}
                                style={{ width: "16%" }}
                            ></div>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <span className={Style.precentage}>16%</span>
                        </div>
                    </div>
                    <div className={Style.singleStar}>
                        <div className={Style.countainerProgress}>
                            <div
                                className={Style.currentProgress}
                                style={{ width: "3%" }}
                            ></div>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <span className={Style.precentage}>3%</span>
                        </div>
                    </div>
                    <div className={Style.singleStar}>
                        <div className={Style.countainerProgress}>
                            <div
                                className={Style.currentProgress}
                                style={{ width: "2%" }}
                            ></div>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faStarSolid}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <FontAwesomeIcon
                                icon={faStarRegular}
                                className={Style.checked}
                            />
                            <span className={Style.precentage}>2%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function loadStars(courseRating) {
    starList = [];
    for (let i = 1; i <= 5; i++) {
        starList = [
            ...starList,
            <FontAwesomeIcon
                icon={courseRating >= i ? faStarSolid : faStarRegular}
                className={Style.checked}
            />,
        ];
    }
}
export default Feedback;
