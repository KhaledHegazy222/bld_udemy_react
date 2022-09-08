import React from "react";
import Style from "../../../styles/CoursePage/CourseDetailsCard/CourseDetailsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlay,
    faFile,
    faFileArrowDown,
    faInfinity,
    faMobile,
    faTrophy,
    faBell,
} from "@fortawesome/free-solid-svg-icons";

function CourseDetailsCard({ courseImg, newPrice, oldPrice }) {
    console.log(window.scrollY);
    return (
        <>
            <div className={Style.courseCardBody}>
                <img className={Style.courseImg} src={courseImg} />
                <div className={Style.priceData}>
                    <h2 className={Style.newPrice}>{newPrice}</h2>
                    <p className={Style.oldPrice}>
                        <s>{oldPrice}</s>
                    </p>
                    <p className={Style.offerPrecentage}>78% off</p>
                </div>
                <div className={Style.offerTime}>
                    <FontAwesomeIcon
                        className={Style.featureIcon}
                        icon={faBell}
                    />
                    <p className={Style.featureTxt}>
                        <strong>1 day</strong> left at this price!
                    </p>
                </div>
                <button className={Style.addToCartBtn}>Add to cart</button>
                <button className={Style.buyNowBtn}>Buy now</button>
                <p className={Style.gurantee}>30-Day Money-back Gurantee</p>
                <div>
                    <h4 className={Style.courseIncludes}>
                        This Course includes:
                    </h4>
                    <ul className={Style.courseFeatures}>
                        <li className={Style.featureListElem}>
                            <FontAwesomeIcon
                                className={Style.featureIcon}
                                icon={faCirclePlay}
                            />
                            <p className={Style.featureTxt}>
                                {" "}
                                14 hours on-demand video
                            </p>
                        </li>
                        <li className={Style.featureListElem}>
                            <FontAwesomeIcon
                                className={Style.featureIcon}
                                icon={faFile}
                            />
                            <p className={Style.featureTxt}> 1 article</p>
                        </li>
                        <li className={Style.featureListElem}>
                            <FontAwesomeIcon
                                className={Style.featureIcon}
                                icon={faFileArrowDown}
                            />
                            <p className={Style.featureTxt}>
                                {" "}
                                3 downloadable resources
                            </p>
                        </li>
                        <li className={Style.featureListElem}>
                            <FontAwesomeIcon
                                className={Style.featureIcon}
                                icon={faInfinity}
                            />
                            <p className={Style.featureTxt}>
                                {" "}
                                Full lifetime access
                            </p>
                        </li>
                        <li className={Style.featureListElem}>
                            <FontAwesomeIcon
                                className={Style.featureIcon}
                                icon={faMobile}
                            />
                            <p className={Style.featureTxt}>
                                {" "}
                                Access on mobile and TV
                            </p>
                        </li>
                        <li className={Style.featureListElem}>
                            <FontAwesomeIcon
                                className={Style.featureIcon}
                                icon={faTrophy}
                            />
                            <p className={Style.featureTxt}>
                                {" "}
                                Certificate of completion
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={Style.cardLinks}>
                    <p>Share</p>
                    <p>Get this course</p>
                    <p>Apply Coupon</p>
                </div>
                <div className={Style.line}>
                    <hr />
                </div>
                <div className={Style.groupOffer}>
                    <h4 className={Style.groupOfferHeader}>
                        Training 5 or more people
                    </h4>
                    <p className={Style.groupOfferContent}>
                        Get your team access to 17,000+top Udemy courses
                        anytime, anywhere
                    </p>
                    <button className={Style.businessBtn}>
                        Try Udemy Business
                    </button>
                </div>
            </div>
        </>
    );
}

export default CourseDetailsCard;
