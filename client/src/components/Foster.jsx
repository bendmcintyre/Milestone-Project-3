import React from 'react';
import classes from '../styles/Foster.module.scss';
import fosterSafeRescueTeam from '../assets/FOSTER-SAFE-Rescue-Team.png.webp';

const Foster = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topContainers}>
        <div className={classes.containerTopLeft}>
          <img
            src={fosterSafeRescueTeam}
            alt="SAFERescue"
            className={classes.logo}
          />
        </div>
        <div className={classes.containerTopRight}>
          <h3 className={classes.fosterHeader3}>BECOMING A FOSTER BET PARENT</h3>
          <p className={classes.fosterText}>SAFE Rescue Team can always use more foster homes. Foster homes are the single most important part of our rescue and are literally the difference between life and death for many of our dogs.</p>
          <p className={classes.fosterText}>If you have always wanted a dog, but were not sure you could commit to a dog for the long term, fostering is a great way to enjoy a dog with only a short-term commitment. We have dogs in need of foster homes from puppies to seniors, small to big, and everything in between.</p>
          <p className={classes.fosterText}>We pay all approved medical expenses for our foster dogs. We ask only that our foster homes care for the dog and help us make the dog a well-adjusted family pet, as well as help us decide which adopter is the right one for their dog.</p>
          <p className={classes.fosterText}>Foster homes get first “dibs” on the dog if they fall in love. We value our foster homes highly and work with them regularly to ensure the dog is doing well.</p>
        </div>
      </div>
      <div className={classes.containerBottom}>
        <h3 className={classes.fosterHeader3}>FOSTERING FAQs</h3>
        <h4 className={classes.fosterHeader4}>- May I try to secure an adopter for my fostered dog?</h4>
        <p className={classes.fosterText}>Certainly, and all efforts to aid in finding a permanent home for the dogs are warmly welcomed. However, all potential adopters must go through the adoption review process to obtain approval by the organization.</p>
        <p className={classes.fosterText}>Please give us heads up if you believe you have a good candidate for your foster dog. We value our fosters‚ opinion as they usually know their foster dog best. Any input by the foster parent regarding its new home will be greatly considered in the outcome of the adoption.</p>
        <h4 className={classes.fosterHeader4}>+ What am I supplied with while fostering?</h4>
        <h4 className={classes.fosterHeader4}>+ What, if any, are the training requirements for dogs I care for?</h4>
        <h4 className={classes.fosterHeader4}>+ I already have a dog. Can I still be a foster?</h4>
        <h4 className={classes.fosterHeader4}>+ What happens if I am fostering a dog and wouuld like to adopt?</h4>
        <h4 className={classes.fosterHeader4}>+ What happens if I am fostering a dog and it is not a good fit?</h4>
        <h4 className={classes.fosterHeader4}>+ What is the fostering time commitment?</h4>
      </div>
    </div>
  );
};



export default Foster;
