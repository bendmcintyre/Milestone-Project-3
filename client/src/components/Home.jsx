import React from 'react';
import Slider from './Slider';
import Cards from './Cards'
import classes from '../styles/Home.module.scss'
import missionDog from '../assets/Our-Mission-Dog.png'

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <div className={`${classes.contrastContainer}`}>
        <div className={`${classes.missionContainer}`}>
          <img classname={`${classes.dogImage}`} src={missionDog} alt="" />
          <div className={`${classes.mission}`}>
            <h1 className={`${classes.missionTextTitle}`}>
              OUR MISSION
            </h1>
            <h4 className={`${classes.missionText}`}>
              SAFE Rescue Team is a volunteer-powered nonprofit dedicated to rescuing homeless,
              neglected, and abandoned animals from certain euthanasia and finding them loving
              forever homes. We educate the community and all pet parents on responsible pet
              parenting, including the importance of spay/neuter, obedience training, and good
              nutrition.
            </h4>

            <h2 className={`${classes.missionText}`}>FOSTER ADOPT RESCUE ADVOCATE EDUCATE DONATE</h2>
          </div>
        </div>
        <Cards></Cards>
      </div>

      <div className={`${classes.quoteContainer}`}>
        <h1 className={`${classes.quote}`}>
          " Once you have had a wonderful dog, a life without one, is a life diminished. "
        </h1>
        <h3 className={`${classes.author}`}>
          Dean Koontz
        </h3>
      </div>
    </div>
  );
};

export default Home;
