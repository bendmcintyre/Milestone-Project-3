import React from 'react';
import classes from '../styles/AboutUs.module.scss';
import adoptAPetLogo from '../assets/Adopt-A-Pet-Logo.png';

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img
          src={adoptAPetLogo}
          alt="SAFERescue"
          className={classes.logo}
        />
      </div>
      <div className={classes.textContainer}>
        <p>S.A.F.E. Rescue Team is a foster based animal rescue founded in 2019 by an animal-lover – Markelle Pineda. She had been involved in rescue for years before finally deciding that the best way to help animals in need was to open a rescue of her own.</p>
        <p>Our main focus is helping the voiceless, abandoned, neglected, and abused. We are dedicated to saving homeless and abandoned dogs that have compelling situations where they are in danger of abuse, neglect or euthanasia. Our dogs are never placed into a shelter after being saved. We only place our animals into loving and experienced foster homes until they are ready for adoption.</p>
        <p>We regularly take in owner surrenders, and at any given time about half of the dogs we foster are local dogs. The other half come to us through rescue volunteers. We search for the dogs that we feel need us the most, and we are doing as much as we possibly can to help as many dogs as we possibly can, but the sad reality is that we cannot save them all (though we intend to keep trying to!).</p>
        <p className={classes.textContainerBold}>All of our animals are vaccinated, spayed or neutered, micro-chipped, provided with full health examinations, dewormed, flea treated, and come with their rabies certificates, health papers, and vet records.</p>
        <p>“Our ultimate goal is to create a world where all companion animals have loving and permanent homes. Where no good-natured dogs, no matter what their age, are killed in shelters because they are considered to be surplus or un-adoptable.” – Markelle Pineda, President & Founder</p>
        <p>You can do something big, or you can do something small. Because whatever you do… it’s better than nothing at all.</p>
        <p>Please consider assisting our efforts with one of the following:</p>
        <h3 className={classes.aboutUsHeaders}>- FOSTER</h3>
        <h3 className={classes.aboutUsHeaders}>- ADOPT</h3>
        <h3 className={classes.aboutUsHeaders}>- RESCUE</h3>
        <h3 className={classes.aboutUsHeaders}>- ADVOCATE</h3>
        <h3 className={classes.aboutUsHeaders}>- EDUCATE</h3>
        <h3 className={classes.aboutUsHeaders}>- DONATE</h3>
      </div>
    </div>
  );
};

export default AboutUs;
