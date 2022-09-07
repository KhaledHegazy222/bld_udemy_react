import React from "react";
import Style from "../../styles/Spinner/Spinner.module.css";

function Spinner() {
    return (
        <div className={Style.spinnerBody}>
            <div className="spinner-border" role="status"></div>
        </div>
    );
}

export default Spinner;
