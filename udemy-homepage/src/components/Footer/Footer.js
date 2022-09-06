import React from "react";
import UdemyLogo from "../../media/logo-udemy-inverted.svg";

function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: "black", color: "white" }}>
                <p>
                    Top companies choose <span>Udemy Business</span> to build
                    in-demand career skills.
                </p>
                <ul>
                    <li>
                        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
                    </li>
                    <li>
                        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
                    </li>
                    <li>
                        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
                    </li>
                    <li>
                        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
                    </li>
                    <li>
                        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
                    </li>
                </ul>
                <div>
                    <div>
                        <ul>
                            <li>Udemy Business</li>
                            <li>Teach on Udemy</li>
                            <li>Get the app</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Help and Support</li>
                            <li>Affiliate</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy policy</li>
                            <li>Cookie settings</li>
                            <li>Sitemap</li>
                            <li>Accessibility statement</li>
                        </ul>
                    </div>
                </div>
                <img src={UdemyLogo} />
                <p>&copy; 2022 Udemy, Inc.</p>
            </footer>
        </>
    );
}

export default Footer;
