import React from "react";
import './style.css';
import {useCountUp} from "react-countup";

// numbers cards images
const websiteDelivered = `${process.env.REACT_APP_API_URL}/assests/images/services/websites-delivered.png`;
const countriesServed = `${process.env.REACT_APP_API_URL}/assests/images/services/countries-served.png`;
const webDevelopers = `${process.env.REACT_APP_API_URL}/assests/images/services/developer.png`;
const experience = `${process.env.REACT_APP_API_URL}/assests/images/services/experience.png`;

function NumbersCards(){

    // projects delivered countup
    useCountUp({
        ref: 'projects_delivered',
        start: 0,
        end: 1000,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    // countries served countup
    useCountUp({
        ref: 'countries_served',
        start: 0,
        end: 25,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    // web developers countup
    useCountUp({
        ref: 'web_developers',
        start: 0,
        end: 50,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    // years experience countup
    useCountUp({
        ref: 'years_experience',
        start: 0,
        end: 10,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    return(
        <>
            <div className="services-numbers-cards">
                <div className="services-numbers-card bg-red">
                    <div className="services-numbers-image">
                        <img src={websiteDelivered} alt="Projects Delivered" className="img-fluid"/>
                    </div>
                    <div className="services-numbers-content">
                        <span id="projects_delivered" />
                        <p className="services-numbers-text">Projects Delivered</p>
                    </div>         
                </div>
                <div className="services-numbers-card bg-orange">
                    <div className="services-numbers-image">
                        <img src={countriesServed} alt="Countries Served" className="img-fluid" />
                    </div>
                    <div className="services-numbers-content">
                        <span id="countries_served" />
                        <p className="services-numbers-text">Countries Served</p>
                    </div>
                </div>
                <div className="services-numbers-card bg-green">
                    <div className="services-numbers-image">
                        <img src={webDevelopers} alt="Web Developers" className="img-fluid" />
                    </div>
                    <div className="services-numbers-content">
                        <span id="web_developers" />
                        <p className="services-numbers-text">Web Developers</p>
                    </div>
                </div>
                <div className="services-numbers-card bg-blue">
                    <div className="services-numbers-image">
                        <img src={experience} alt="Experience" className="img-fluid" />
                    </div>
                    <div className="services-numbers-content">
                        <span id="years_experience" />
                        <p className="services-numbers-text">Years of experience</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NumbersCards;