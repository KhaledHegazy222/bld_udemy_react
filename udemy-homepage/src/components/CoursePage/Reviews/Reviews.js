import React from "react";
import Style from "../../../styles/CoursePage/Reviews/Reviews.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import Like from "../Like/Like";
let reviewsList = [];

function Reviews({ reviews }) {
    loadReviews(reviews);
    return (
        <>
            <h2 className={Style.reviewsHeader}>Reviews</h2>
            <div className={Style.SearchFilterDiv}>
                <div className={Style.searchBarDiv}>
                    <div className={Style.searchBar}>
                        <input
                            type="text"
                            style={{ width: "100%", height: "100%" }}
                            placeholder="Search reviews"
                        />
                    </div>
                    <div className={Style.SearchIcon}>
                        <SearchIcon></SearchIcon>
                    </div>
                </div>

                <div className={Style.selectBox}>
                    {/* All Rating Drop Down */}
                    <Form.Select aria-label="Default select example">
                        <option value="1">All Ratings</option>
                        <option value="2">Top 10</option>
                        <option value="3">Top 100</option>
                        <option value="4">Top 1000</option>
                    </Form.Select>
                </div>
            </div>
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
