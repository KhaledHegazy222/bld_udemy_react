import "./App.css";
import TopicTab from "./components/TopicTab";
import image1 from "./media/python1.png";
import image2 from "./media/python2.png";
import image3 from "./media/python3.png";
import image4 from "./media/python4.png";
import image5 from "./media/python5.png";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <TopicTab
                title="Expand your career opportunities with Python"
                description="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..."
                courses={[
                    {
                        id: 1,
                        imgSrc: { image1 },
                        title: "Learn Python: The Complete Python Programming Course",
                        description: "Avinash Jain, The Codex",
                        ratingValue: 4.4,
                        newPrice: "E£679.99",
                        oldPrice: "E£699.99",
                    },
                    {
                        id: 2,
                        imgSrc: { image2 },
                        title: "Learning Python for Data Analysis and Visualization",
                        description: "jose portila",
                        ratingValue: 4.4,
                        newPrice: "E£679.99",
                        oldPrice: "E£699.99",
                    },
                    {
                        id: 3,
                        imgSrc: { image3 },
                        title: "Python for Beginners - Learn Programming from scratch",
                        description: "Edwin Diaz, Coding Faculty Solutions",
                        ratingValue: 4.4,
                        newPrice: "E£679.99",
                        oldPrice: "E£699.99",
                    },
                    {
                        id: 4,
                        imgSrc: { image4 },
                        title: "Learn Python: Python for Beginners",
                        description: "Abrar Hussain",
                        ratingValue: 4.4,
                        newPrice: "E£679.99",
                        oldPrice: "E£699.99",
                    },
                    {
                        id: 5,
                        imgSrc: { image5 },
                        title: "Python Beyond the Basics - Object-Oriented Programming",
                        description: "Infinite Skills",
                        ratingValue: 4.4,
                        newPrice: "E£679.99",
                        oldPrice: "E£699.99",
                    },
                ]}
            ></TopicTab>
        </div>
    );
}

export default App;
