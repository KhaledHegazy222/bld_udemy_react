import React from "react";
import style from "./Card.module.css";

function Card(probs) {
    
    return (
        <>
            <article className={style.courseCard + " card"}>
                <img className={style.couresImage + " card-img-top"} src={probs.imgSrc} alt="Course" />
                <div className="card-body">
                    <h3 className={style.courseTitle}>{probs.title}</h3>
                    <p className={style.courseDescription}>
                        {probs.description}
                    </p>
                    <div className={style.rating}>
                        <div className={style.ratingValue}>
                            {probs.ratingValue}
                        </div>
                        <ul className={style.starList}>
                            <li className={style.checked + " fa fa-star"}></li>
                            <li className={style.checked + " fa fa-star"}></li>
                            <li className={style.checked + " fa fa-star"}></li>
                            <li className={style.checked + " fa fa-star"}></li>
                            <li
                                className={
                                    style.checked + " fa fa-star-half-full"
                                }
                            ></li>
                        </ul>
                    </div>
                    <div className={style.newPrice}>{probs.newPrice}</div>
                    <s className={style.oldPrice}>{probs.oldPrice}</s>
                </div>
            </article>
        </>
    );
}

export default Card;
