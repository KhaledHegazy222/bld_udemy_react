import React from "react";
import Style from "../../../styles/CoursePage/Reviews/Reviews.module.css";

let reviewsList = [];

function Reviews({ reviews }) {
    loadReviews(reviews);
    return (
        <>
            <ul>{reviewsList}</ul>
        </>
    );
}

function loadReviews(data) {
    reviewsList = [];
    for (let i = 0; i < data.length; i++) {
        let currentRating = Math.floor(data[i].rating);
        let starList = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= currentRating) {
                starList = [
                    ...starList,
                    <li className={"fa fa-star " + Style.checked}></li>,
                ];
            } else {
                starList = [...starList, <li className={"fa fa-star"}></li>];
            }
        }
        reviewsList = [
            ...reviewsList,
            <li>
                <img src={data[i].user.image_50x50} />

                <ul>{starList}</ul>
                <p>{data[i].content}</p>
                <p>Was this review helpful?</p>
            </li>,
        ];
    }
}

export default Reviews;
