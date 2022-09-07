import React from "react";
import Style from "../../../styles/CoursePage/Reviews/Reviews.module.css";
import Like from "../Like/Like";
let reviewsList = [];

function Reviews({ reviews }) {
    loadReviews(reviews);
    return (
        <>
            <h2>Reviews</h2>
            <ul className={Style.commentsList}> {reviewsList}</ul>
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
            <li className={Style.commentsListElem}>
                <img
                    className={Style.commentImg}
                    src={data[i].user.image_50x50}
                />
                <div className={Style.commentData}>
                    <div className={Style.title}>{data[i].user.title}</div>
                    <ul className={Style.starList}>{starList}</ul>
                    <p className={Style.commentContent}>{data[i].content}</p>
                    <p className={Style.commentReview}>
                        Was this review helpful?
                    </p>
                    <Like></Like>
                </div>
            </li>,
        ];
    }
}

export default Reviews;
