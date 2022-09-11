import { React, useState } from "react";
import style from "../../../styles/HomePage/Card/Card.module.css";
import { Popover, Button, PopoverHeader, PopoverBody } from "reactstrap";
import { Link } from "react-router-dom";

import PopUpCard from "../PopUpCard/PopUpCard";

const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
};
function Card({
    id,
    topicId,
    imgSrc,
    title,
    headline,
    description,
    ratingValue,
    newPrice,
    oldPrice,
    objectives_summary,
}) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    return (
        <>
            <div
                className={style.courseCardDiv}
                id={"Popover" + id}
                onMouseEnter={() => {
                    setPopoverOpen(true);
                }}
                onMouseLeave={() => {
                    setPopoverOpen(false);
                }}
            >
                <Link
                    to={"/courses/" + topicId + "/" + id}
                    className={style.courseCardLink}
                >
                    <article className={style.courseCard + " card"}>
                        <img
                            className={style.couresImage + " card-img-top"}
                            src={imgSrc}
                            alt="Course"
                        />
                        <div className="card-body">
                            <h3 className={style.courseTitle}>{title}</h3>
                            <p className={style.courseDescription}>
                                {description}
                            </p>
                            <div className={style.rating}>
                                <div className={style.ratingValue}>
                                    {ratingValue}
                                </div>
                                <ul className={style.starList}>
                                    <li
                                        className={
                                            style.checked + " fa fa-star"
                                        }
                                    ></li>
                                    <li
                                        className={
                                            style.checked + " fa fa-star"
                                        }
                                    ></li>
                                    <li
                                        className={
                                            style.checked + " fa fa-star"
                                        }
                                    ></li>
                                    <li
                                        className={
                                            style.checked + " fa fa-star"
                                        }
                                    ></li>
                                    <li
                                        className={
                                            style.checked +
                                            " fa fa-star-half-full"
                                        }
                                    ></li>
                                </ul>
                            </div>
                            <div className={style.newPrice}>{newPrice}</div>
                            <s className={style.oldPrice}>{oldPrice}</s>
                        </div>
                    </article>
                </Link>
                <Popover
                    placement="right"
                    isOpen={popoverOpen}
                    target={"Popover" + id}
                    toggle={() => {
                        setPopoverOpen(!popoverOpen);
                    }}
                >
                    <PopoverBody style={{ padding: "0", width: "150%" }}>
                        <PopUpCard
                            title={title}
                            headline={headline}
                            updateDate="May 2022"
                            objectives={objectives_summary}
                        ></PopUpCard>
                    </PopoverBody>
                </Popover>
            </div>
        </>
    );
}

export default Card;
