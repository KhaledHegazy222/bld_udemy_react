import React from "react";

import HomePage from "./pages/HomePage/HomePage";
import CoursePage from "./pages/CoursePage/CoursePage";
import SearchPage from "./pages/SearchPage/SearchPage";

const pages = [
    {
        element: <HomePage></HomePage>,
        path: "/",
    },
    {
        element: <SearchPage></SearchPage>,
        path: "/search",
    },
    {
        element: <CoursePage></CoursePage>,
        path: "/courses/:topicId/:courseId",
    },
];

export default pages;
