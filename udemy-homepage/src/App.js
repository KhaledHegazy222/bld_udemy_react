import "./App.css";
import { useEffect, useState, useCallback, createContext } from "react";
import { useRoutes } from "react-router-dom";

import pages from "./routes";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { faL } from "@fortawesome/free-solid-svg-icons";

const HomePageURL = "http://localhost:3001/data";
const ReviewsURL = "http://localhost:3002/data";
const CoursePageURL = "http://localhost:3003/data";

let homePageData, reviewsData, coursePageData;

let dataContext = createContext();

function App() {
    const [scrollTop, setScrollTop] = useState(0);
    const [reachBottom, setReachBottom] = useState(0);

    const [dataRecieved, setDataRecieved] = useState(false);
    const Router = useRoutes(pages);
    const fetchData = useCallback(async (url) => {
        let response = await fetch(HomePageURL);
        homePageData = await response.json();
        response = await fetch(ReviewsURL);
        reviewsData = await response.json();
        response = await fetch(CoursePageURL);
        coursePageData = await response.json();

        setDataRecieved(true);
    }, []);

    useEffect(
        () => async () => {
            await fetchData();
        },
        [fetchData]
    );

    return (
        <div className="App">
            <NavBar></NavBar>

            <dataContext.Provider
                value={{
                    dataRecieved,
                    reachBottom,
                    homePageData,
                    reviewsData,
                    coursePageData,
                }}
            >
                {Router}
            </dataContext.Provider>

            <Footer></Footer>
        </div>
    );
}

export default App;
export { dataContext };

/*
    mask image (show more)
*/
