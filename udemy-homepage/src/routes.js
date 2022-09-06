import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CoursePage from "./pages/CoursePage/CoursePage";
import NavBar from "./components/NavBar/NavBar";
function Router() {
    const elements = useRoutes([
        {
            element: <HomePage></HomePage>,
            path: "/",
        },
        {
            element: <CoursePage></CoursePage>,
            path: "/courses/:topicId/:courseId",
        },
    ]);

    return elements;
}

export default Router;
