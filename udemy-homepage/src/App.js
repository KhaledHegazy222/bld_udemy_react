import "./App.css";
import { useEffect, useState, createContext } from "react";
import Router from "./routes";
import { useRoutes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CoursePage from "./pages/CoursePage/CoursePage";
import NavBar from "./components/NavBar/NavBar";

const HomePageURL = "http://localhost:3001/data";
const ReviewsURL = "http://localhost:3002/data";
let homePageData, reviewsData;

let dataContext = createContext();

function App() {
    const [dataRecieved, setDataRecieved] = useState(false);

    const fetchData = async (url) => {
        let response = await fetch(HomePageURL);
        homePageData = await response.json();
        response = await fetch(ReviewsURL);
        reviewsData = await response.json();

        setDataRecieved(true);

        // for (let i in homePageData) console.log(i);
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
                }}
            >
                <Router />
            </dataContext.Provider>
        </div>
    );
}

export default App;
export { dataContext };

// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NavBar from "./components/NavBar/NavBar";
// import HomePage from "./pages/HomePage/HomePage";
// import CoursePage from "./pages/CoursePage/CoursePage";

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header"></header>
//             <NavBar></NavBar>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/courses/:CourseId" element={<CoursePage />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;
