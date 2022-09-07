import React from "react";
import Style from "../../styles/Footer/Footer.module.css";
import UdemyLogo from "../../media/logo-udemy-inverted.svg";
import languageIcon from "../../media/language.png";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Footer() {
    return (
        <>
            <footer className={Style.footer}>
                <div className={Style.fHeader}>
                    <h4 className={Style.fHeaderTxt}>
                        Top companies choose{" "}
                        <span className={Style.fLink}>Udemy Business</span> to
                        build in-demand career skills.
                    </h4>
                    <div className={Style.sponsers}>
                        <ul className={Style.sponsersList}>
                            <li className={Style.sponsersListElem}>
                                <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
                            </li>
                            <li className={Style.sponsersListElem}>
                                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
                            </li>
                            <li className={Style.sponsersListElem}>
                                <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
                            </li>
                            <li className={Style.sponsersListElem}>
                                <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
                            </li>
                            <li className={Style.sponsersListElem}>
                                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={Style.mainSection}>
                    <div>
                        <ul className={Style.udemyPages}>
                            <li className={Style.listElem}>Udemy Business</li>
                            <li className={Style.listElem}>Teach on Udemy</li>
                            <li className={Style.listElem}>Get the app</li>
                            <li className={Style.listElem}>About us</li>
                            <li className={Style.listElem}>Contact us</li>
                        </ul>

                        <ul className={Style.udemyPages}>
                            <li className={Style.listElem}>Careers</li>
                            <li className={Style.listElem}>Blog</li>
                            <li className={Style.listElem}>Help and Support</li>
                            <li className={Style.listElem}>Affiliate</li>
                            <li className={Style.listElem}>Investors</li>
                        </ul>

                        <ul className={Style.udemyPages}>
                            <li className={Style.listElem}>Terms</li>
                            <li className={Style.listElem}>Privacy policy</li>
                            <li className={Style.listElem}>Cookie settings</li>
                            <li className={Style.listElem}>Sitemap</li>
                            <li className={Style.listElem}>
                                Accessibility statement
                            </li>
                        </ul>
                    </div>
                    <button className={Style.langBtn}>
                        <LanguageOutlinedIcon />
                        <p className={Style.langTxt}>English</p>
                    </button>
                </div>
                <div className={Style.logoCopyRights}>
                    <img className={Style.logo} src={UdemyLogo} />
                    <p className={Style.copyRights}>&copy; 2022 Udemy, Inc.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
