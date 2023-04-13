import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Navbar.module.scss';
import { FaBars } from 'react-icons/fa';
import safeRescueHeaderLogo from '../assets/SAFERescue-header_logo.png';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <div className={`${classes.navTopBar}, ${classes.navContainer}`}></div>
      <nav
        className={`${classes.nav} ${
          showMobileNav ? classes.showMobileNav : ''
        }`}>
        <div className={classes.navContainer}>
          <div className={classes.navTopBar}></div>
          <Link to="/" className={classes.navLink}>
            <img
              src={safeRescueHeaderLogo}
              alt="SAFERescue"
              className={classes.logo}
            />
          </Link>
          <div className={classes.linksContainer}>
            <Link
              to="/"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>HOME</p>
              </button>
            </Link>
            <Link
              to="/about"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>ABOUT US</p>
              </button>
            </Link>
            <Link
              to="/adopt"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>ADOPT</p>
              </button>
            </Link>
            <Link
              to="/foster"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>FOSTER</p>
              </button>
            </Link>
            <Link
              to="/howToHelp"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>HOW TO HELP</p>
              </button>
            </Link>
            <Link
              to="/contact"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>CONTACT</p>
              </button>
            </Link>
            <Link
              to="/MailApp"
              className={classes.navLink}>
              <button className={classes.navButton}>
                <p className={classes.navName}>ADMIN LOGIN</p>
              </button>
            </Link>
            <div
              className={`${classes.menuIcon} ${
                showMobileNav ? classes.hideMenuIcon : ''
              }`}
              onClick={toggleMobileNav}>
              <FaBars />
            </div>
          </div>
        </div>
        <div
          className={classes.overlay}
          onClick={toggleMobileNav}></div>
        <div
          className={`${classes.mobileNav} ${
            showMobileNav ? classes.showMobileNav : ''
          }`}>
          <div className={classes.mobileNavMenu}>
            <Link
              to="/"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>HOME</p>
            </Link>
            <Link
              to="/about"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>ABOUT US</p>
            </Link>
            <Link
              to="/adopt"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>ADOPT</p>
            </Link>
            <Link
              to="/foster"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>FOSTER</p>
            </Link>
            <Link
              to="/howToHelp"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>HOW TO HELP</p>
            </Link>
            <Link
              to="/contact"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>CONTACT</p>
            </Link>
            <Link
              to="/MailApp"
              className={classes.mobileNavLink}>
              <p className={classes.navName}>ADMIN LOGIN</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
