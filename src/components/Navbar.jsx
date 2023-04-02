import React from 'react';
import {Link} from 'react-router-dom';
import classes from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navContainer}>
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
          to="/donorDashboard"
          className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>DONOR DASHBOARD</p>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
