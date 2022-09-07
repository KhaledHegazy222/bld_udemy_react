import React from "react";
import Style from "../../../styles/CoursePage/CourseDetailsCard/CourseDetailsCard.module.css";
function CourseDetailsCard({ courseImg, newPrice, oldPrice }) {
    return (
        <>
            <div>
                <img src={courseImg} />
            </div>
            <div>
                <h2>{newPrice}</h2>
                <p>
                    <s>{oldPrice}</s>
                </p>
                <p>78% off</p>
            </div>
            <button>Add to cart</button>
            <button>Buy now</button>
            <p>30-Day Money-back Gurantee</p>
            <div>
                <h4>This Course includes:</h4>
                <ul>
                    <li>14 hours on-demand video</li>
                    <li>1 article</li>
                    <li>3 downloadable resources</li>
                    <li>Full lifetime access</li>
                    <li>Access on mobile and TV</li>
                    <li>Certificate of completion</li>
                </ul>
            </div>
            <div>
                <p>Share</p>
                <p>Get this course</p>
                <p>Apply Coupon</p>
            </div>
            <div>
                <h4>Training 5 or more people</h4>
                <p>
                    Get your team access to 17,000+top Udemy courses anytime,
                    anywhere
                </p>
                <button>Try Udemy Business</button>
            </div>
        </>
    );
}

export default CourseDetailsCard;
