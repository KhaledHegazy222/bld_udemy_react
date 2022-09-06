import React from "react";
import Style from "./NavBar.module.css";

import UdemyLogo from "../../media/logo-udemy.svg";
import MenuIcon from "../../media/menu.png";
import SearchIcon from "../../media/search.png";
import CartIcon from "../../media/cart.webp";
import LanguageIcon from "../../media/language.png";

function NavBar() {
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
            <form
                className={Style.navForm + " " + Style.navElem}
                action="./search.php"
                target="_blank"
                method="get"
            >
                <div className={Style.searchDiv}>
                    <img
                        className={Style.searchIcon}
                        src={SearchIcon}
                        alt="search icon"
                    />
                    <input
                        className={Style.searchBar}
                        type="text"
                        placeholder="Search for anything"
                        id="search-bar"
                    />
                </div>
                <input
                    className={Style.searchBtn + " " + Style.navElem}
                    type="submit"
                    value="search"
                    id="search-btn"
                />
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
