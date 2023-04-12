import React from 'react';
import classes from '../styles/HowToHelp.module.scss';


const HowToHelp = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.header2}>Online Donations</h2>
      </div>
      <div>
        <p className={classes.text}>If you can’t adopt a dog now, we appreciate any assistance whether that is a monetary donation or something that we need for our rescues on our wishlist. We, and the dogs, thank you!</p>
        <p className={classes.text}>SAFE Rescue Team offers safe and secure online payment for donations via Credit Card or Paypal. We (and the dogs, of course!) appreciate each and every donation we receive!</p>
        <p className={classes.text}>We are a 501(c)(3) ID: 83-4042699</p>
      </div>
      <div className={classes.row}>
        <p className={classes.text}>You can chose to make a one-time donation to our organization or create a monthly contribution that you can cancel at any time.</p>
        <button className={classes.button}>Yes, I WANT TO DONATE</button>
      </div>
      <div>
        <div>
          <h2 className={classes.header2}>WISHLIST OF ITEMS</h2>
        </div>
        <div>
          <p className={classes.text}>We are always in need of supplies for our pups. If you would like to help us with every day needs, please see our wishlist below. We appreciate your generosity and our pups appreciate your continued support!</p>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
