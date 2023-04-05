import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/SAFERescue-logo-reverse-white.png'
import award from '../assets/Adopt-A-Pet-Logo.png'
import instagram from '../assets/Instagram_Glyph_White.png'
import facebook from '../assets/f_logo_RGB-White_1024.png'
import classes from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.footerContainer}`}>
                <div className={`${classes.logo}`}>
                    <img src={logo} alt="SAFE Rescue Team" />
                    <div className={`${classes.socials}`}>
                        <Link
                            to={{ pathname: "https://www.instagram.com/saferescueteam/" }}
                            target="_blank"
                            className={`${classes.socialLinks}`}
                        >
                            <img src={instagram} alt="SAFE Rescue Instagram" />
                        </Link>
                        <Link
                            to={{ pathname: "https://www.facebook.com/SAFERescueTeam/" }}
                            target="_blank"
                            className={`${classes.socialLinks}`}
                        >
                            <img src={facebook} alt="SAFE Rescue facebook" />
                        </Link>
                    </div>

                </div>
                <div className={`${classes.award}`}>
                    <img src={award} alt="Award" />
                </div>
                <div className={`${classes.questions}`}>
                    LOOKING FOR SOMETHING?
                    <div className={`${classes.linksContainer}`}>
                        <Link
                            to="/adopt"
                            className={classes.searchLink}>
                            <p className="linkText">I'M INTERESTED IN ADOPTINGING</p>
                        </Link>
                        <Link
                            to="/foster"
                            className={classes.searchLink}>
                            <p className="linkText">I'D LIKE TO FOSTER A PET</p>
                        </Link>
                        <Link
                            to="/about"
                            className={classes.searchLink}>
                            <p className="linkText">WHAT IS SAFE RESCUE TEAAM ABOUT?</p>
                        </Link>
                    </div>
                </div>
                <div className={`${classes.email}`}>
                    SUBSCRIBE TO OUR MAILING LIST!
                    <div>
                        <input type="email" className={`${classes.emailInput}`} placeholder="Enter your email" required />
                    </div>
                </div>
            </div>
            <div className={`${classes.copyright}`}>
                ©2019 SAFE Rescue Team - Founded on ♥ for animals ~ Run by caring volunteers
            </div>
        </footer>
    );
};

export default Footer;