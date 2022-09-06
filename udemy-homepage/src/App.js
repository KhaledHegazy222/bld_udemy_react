import "./App.css";
import { useEffect, useState, createContext } from "react";
import Router from "./routes";

import NavBar from "./components/NavBar/NavBar";

const HomePageURL = "http://localhost:3001/data";
const ReviewsURL = "http://localhost:3002/data";
const CoursePageURL = "http://localhost:3003/data";

let homePageData, reviewsData, coursePageData;

let dataContext = createContext();

function App() {
    const [dataRecieved, setDataRecieved] = useState(false);

    const fetchData = async (url) => {
        let response = await fetch(HomePageURL);
        homePageData = await response.json();
        response = await fetch(ReviewsURL);
        reviewsData = await response.json();
        response = await fetch(CoursePageURL);
        coursePageData = await response.json();

        setDataRecieved(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <NavBar></NavBar>

            <dataContext.Provider
                value={{
                    dataRecieved,
                    homePageData,
                    reviewsData,
                    coursePageData,
                }}
            >
                <Router />
            </dataContext.Provider>
        </div>
    );
}

export default App;
export { dataContext };
