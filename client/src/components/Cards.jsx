import React from "react";
import { Link } from 'react-router-dom';

import '../styles/Cards.css'

export default function InfoCards() {
    return(
    <div className="card-container">
        <div className="card">
            <h1 className="card-text-title">
                ADOPT
            </h1>
            <p className="card-text">
                S.A.F.E. Rescue Team is committed to finding loving forever
                homes for each of our animals. Our adoption process is
                designed to find the best fit for adopters, whatever they may
                be looking for. You may have a specific pet in mind or just
                beginning your search for a new family member; wherever you
                are in the process, we are here to guide you through the
                process.
            </p>
            <Link to="/adopt" className="card-link">
                Learn More &gt;
            </Link>
        </div>
        <div className="card">
            <h1 className="card-text-title">
                FOSTER
            </h1>
            <p className="card-text">
                Please consider opening your heart and your home to a dog
                in need of some love. We are in desperate need of foster
                homes and your help will make a difference in their lives.
                S.A.F.E. Rescue Team will supply all their necessities including
                medical care and training. All you need to do is provide a
                loving, stable home.
            </p>
            <Link to="/foster" className="card-link">
                Learn More &gt;
            </Link>
        </div>
        <div className="card">
            <h1 className="card-text-title">
                DONATE
            </h1>
            <p className="card-text">
                We depend on the generosity of our donors and volunteers.
                Even though our adoption fees do not cover all the costs
                associated with our rescues, we never want to turn away a
                dog or cat based on their medical needs, or be forced to end
                treatment due to cost alone. Instead, we fight tooth and nail
                to support our animals in every way that we can. We can only
                do this with your help!
            </p>
            <Link to="howtohelp" className="card-link">
                Learn More &gt;
            </Link>
        </div>
    </div>
)}