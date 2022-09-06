import React from "react";
import Style from "./OfferPost.module.css";

import AlarmImage from "../../media/alarm.jpg";

function OfferPost() {
    return (
        <section className={Style.sectionOne}>
            <div className={Style.sectionOneContent}>
                <h1 className={Style.sectionOneHeader}>New to Udemy? Lucky you.</h1>
                <p className={Style.sectionOneParagraph}>
                    Courses start at E£169.99. Get your new-student offer before
                    it expires.
                </p>
            </div>
            <div className={Style.sectionOneImgDiv}>
                <img
                    className={Style.sectionOneImg}
                    src={AlarmImage}
                    alt="home page image"
                />
            </div>
        </section>
    );
}

export default OfferPost;
