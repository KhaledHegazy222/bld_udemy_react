import { React, useRef } from "react";
import Style from "../../styles/NavBar/NavBar.module.css";

import UdemyLogo from "../../media/logo-udemy.svg";
import MenuIcon from "../../media/menu.png";
import SearchIcon from "../../media/search.png";
import CartIcon from "../../media/cart.webp";
import LanguageIcon from "../../media/language.png";

import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const inputRef = useRef();
    return (
        <nav className={Style.navBar}>
            <div className={Style.navElem + " " + Style.menuDiv}>
                <img
                    className={Style.navMenuImg}
                    src={MenuIcon}
                    alt="menu icon"
                />
            </div>

            <div className={Style.navElem + " " + Style.logoDiv}>
                <img
                    className={Style.navLogoImg}
                    src={UdemyLogo}
                    alt="Udemy Logo"
                />
            </div>

            <div className={Style.navElem + " " + Style.navLinks}>
                Categories
            </div>
            <form className={Style.navForm + " " + Style.navElem}
                target="_blank"
            
            >
                <div className={Style.searchDiv}>
                    <img
                        className={Style.searchIcon}
                        src={SearchIcon}
                        alt="search icon"
                    />
                    <input
                        ref={inputRef}
                        className={Style.searchBar}
                        type="text"
                        placeholder="Search for anything"
                        id="search-bar"
                    />
                </div>
                <button
                    type="button"
                    className={Style.searchBtn + " " + Style.navElem}
                    id="search-btn"
                    onClick={() => {
                        navigate({
                            pathname: "/search",
                            search: "?searchBar=" + inputRef.current.value,
                        });
                    }}
                >
                    search
                </button>
            </form>
            <div className={Style.navElem + " " + Style.navLinks}>
                Udemy Business
            </div>
            <div className={Style.navElem + " " + Style.navLinks}>
                Teach on Udemy
            </div>

            <div className={Style.navElem}>
                <img
                    className={Style.navCartImg}
                    src={CartIcon}
                    alt="cart icon"
                />
            </div>
            <input
                className={Style.navElem + " " + Style.logIn}
                type="button"
                id="log-in"
                value="Log in"
            />
            <input
                className={Style.navElem + " " + Style.signUp}
                type="button"
                id="sign-up"
                value="Sign Up"
            />

            <div className={Style.navElem + " " + Style.langDiv}>
                <img
                    className={Style.navLanguageImg}
                    src={LanguageIcon}
                    alt="language icon"
                />
            </div>
        </nav>
    );
}

export default NavBar;
