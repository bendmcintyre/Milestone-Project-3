import React from 'react';
import Navbar from './Navbar';
import Footer from './footer'

const HowToHelp = () => {
  return (
    <div class='pageContainer'>
      <div class='titleContainer'>
        <h1>How To Help</h1>
        </div>
          <div class='headingContainer'>
            <h2>
              Online Donations
            </h2>
            </div>
            <div className="headingDescription">
              <p>If you can’t adopt a dog now, we appreciate any assistance whether that is a monetary donation or something that we need for our rescues on our wishlist. We, and the dogs, thank you!</p>
              <p>SAFE Rescue Team offers safe and secure online payment for donations via Credit Card or Paypal. We (and the dogs, of course!) appreciate each and every donation we receive!</p>
              <p>We are a 501(c)(3) ID: 83-4042699</p>
              </div>
          <div className='donationContainer'>
            <p class='donationDescription'>You can chose to make a one-time donation to our organization or create a monthly contribution that you can cancel at any time.</p>
            <button>Yes, I WANT TO DONATE</button>
          </div>
          <div className="wishlistContainer">
            <div className="headingContainer">
              <h2>WISHLIST OF ITEMS</h2>
            </div>
            <div className="headingDescription"></div>
            <p>We are always in need of supplies for our pups. If you would like to help us with every day needs, please see our wishlist below. We appreciate your generosity and our pups appreciate your continued support!</p>
        
          </div>

    </div>
  );
};

export default HowToHelp;