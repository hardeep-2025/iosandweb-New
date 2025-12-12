import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import DevelopmentProcess from "../../components/DevelopmentProcess";
import GetStarted from "../../components/GetStarted";
import TypeWritter from "../../components/TypeWritter";
import { useLocation } from "react-router-dom";

const howWeWorkImage = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/how-we-work.webp`;

const briefing = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/briefing.webp`;
const researching = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/researching.webp`;
const evolving = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/evolving.webp`;
const wrappingUp = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/wrapping-up.webp`;

function HowWeWork(){

    const location = useLocation();

    return (
        <>

            <SEO
                title={"How We Work - IosAndWeb Technologies"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <div className="how-we-work-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <p className="subheading"><FontAwesomeIcon icon={faQuestionCircle} /> How We Work</p>
                                <h1>Web Solutions To Boost Your Brand <TypeWritter text="Growth" delay={300} infinite  /></h1>
                                <div className="heading5">Accelerate Your Business Growth With End-to-End Digital Solutions</div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={howWeWorkImage} className="responsive-img" alt="How We Work" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Briefing section */}
            <div className="how-we-work-process briefing-section section-less-padding">
                <Container>
                    <Row className="align-items-center row-reverse-mobile">
                        <Col lg={6}>
                            <img src={briefing} alt="Briefing" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="heading3"><strong className="text-highlight">Briefing</strong> Of Your Business Idea</h2>
                            <p className="paragraph">Examining your ideas & details, Our app development company propose the best possible solutions that will meet your brand requirements indeed.</p>
                            <ul className="how-we-work-lists">
                                <li>We will connect you with our experts for overall planning & project estimations</li>
                                <li>Thorough research to keep you ahead of your competitors</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Researching section */}
            <div className="how-we-work-process researching-section section-less-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="heading3"><strong className="text-highlight">Researching</strong> a Perfect Architecture</h2>
                            <p className="paragraph">Browsing our stack of latest technologies, our brewers create a fully-customized solution, made just for your business</p>
                            <ul className="how-we-work-lists">
                                <li>An exceptional UI design for better customer experience</li>
                                <li>Development of the core functionality with advanced features</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <img src={researching} alt="Researching" className="responsive-img"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Evolving section */}
            <div className="how-we-work-process evolving-section section-less-padding">
                <Container>
                    <Row className="align-items-center row-reverse-mobile">
                        <Col lg={6}>
                            <img src={evolving} alt="Evolving" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="heading3"><strong className="text-highlight">Evolving</strong> Bug-Free Business App</h2>
                            <p className="paragraph">Repeated testing of every feature to assure quality & deliver a digital solution that meets your specifications</p>
                            <ul className="how-we-work-lists">
                                <li>Evaluating ease of use & navigation to make your customers stay</li>
                                <li>Performance testing to run it on different screen sizes smoothly</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Wrapping section */}
            <div className="how-we-work-process wrapping-section section-less-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="heading3"><strong className="text-highlight">Wrapping</strong> Up For Success</h2>
                            <p className="paragraph">Get your custom-made digital solution onboard to reach maximum customers in the most time-efficient manner</p>
                            <ul className="how-we-work-lists">
                                <li>Successful launch of your business app with experts by your side</li>
                                <li>Result-oriented promotional strategies to take your app a long way</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <img src={wrappingUp} alt="Wrapping" className="responsive-img"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Now Is The Right Time To Convert Your Idea Into A Go-To Mobile Application"
                buttonText="Get Started"
                link="/contact-us"
            />

            {/* Development Process section */}
            <DevelopmentProcess />
        </>
    )
}

export default HowWeWork;