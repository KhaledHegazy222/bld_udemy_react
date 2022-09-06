import React from "react";

let contentList = [];

function CourseContent({ content, id }) {
    loadContent(content.sections, id);
    return (
        <>
            <h3>Course Content</h3>
            {contentList}
        </>
    );
}

function loadContent(data, id) {
    contentList = [];
    for (let i = 0; i < data.length; i++) {
        let listElements = [];
        for (let j = 0; j < data[i].items.length; j++) {
            listElements = [...listElements, <li>{data[i].items[j].title}</li>];
        }
        contentList = [
            ...contentList,
            <li className="accordion-item">
                <h4 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#section" + i + "_" + id}
                    >
                        {data[i].title}
                    </button>
                </h4>
                <div
                    className="accordion-collapse collapse"
                    id={"section" + i + "_" + id}
                >
                    <div className="accordion-body"></div>
                    <ul>{listElements}</ul>
                </div>
            </li>,
        ];
    }

    contentList = <ul className="accordion">{contentList}</ul>;
}

export default CourseContent;
