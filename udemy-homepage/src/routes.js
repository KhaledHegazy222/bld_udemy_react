import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CoursePage from "./pages/CoursePage/CoursePage";
import SearchPage from "./pages/SearchPage/SearchPage";
function Router() {
    const elements = useRoutes([
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
    ]);

    return elements;
}

export default Router;
