import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import {useCountUp} from "react-countup";

// Join Team
import JoinTeamGallery from '../../components/JoinTeamGallery';
import { useLocation } from "react-router-dom";

// work life images
const learningDev = `${process.env.REACT_APP_API_URL}/assests/images/about/learning-dev.jpg`;
const mindful = `${process.env.REACT_APP_API_URL}/assests/images/about/Mindful-Personal-Guidance.jpg`;
const constructiveFeedback = `${process.env.REACT_APP_API_URL}/assests/images/about/Constructive-Feedback.jpg`;
const inclusive = `${process.env.REACT_APP_API_URL}/assests/images/about/Inclusive-Open-Culture.jpg`;
const innovation = `${process.env.REACT_APP_API_URL}/assests/images/about/Innovation-Quality-First.jpg`;
const proactive = `${process.env.REACT_APP_API_URL}/assests/images/about/Proactive-Implementation.jpg`;
const bestGlobal = `${process.env.REACT_APP_API_URL}/assests/images/about/Best-Global-Opportunities.jpg`;
const workLatest = `${process.env.REACT_APP_API_URL}/assests/images/about/Work-with-Latest-Technology.jpg`;

// achievements images
const clutch = `${process.env.REACT_APP_API_URL}/assests/images/about/clutch-logo.png`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/images/about/app-futura-logo.png`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/images/about/it-firms-logo.png`;
const goodFirms = `${process.env.REACT_APP_API_URL}/assests/images/about/goodfirms-logo.png`;
const topDevelopers = `${process.env.REACT_APP_API_URL}/assests/images/about/top-developers-logo.png`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/images/about/upwork-logo.png`;

function About(){

    const location = useLocation();

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

    // tech experts countup
    useCountUp({
        ref: 'tech_experts',
        start: 0,
        end: 1000,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    // investment raised countup
    useCountUp({
        ref: 'investment_raised',
        start: 0,
        end: 950,
        separator: '',
        prefix: '$',
        suffix: 'M',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    return(
        <>
            <SEO
                title={"IosAndWeb Technologies - We approach with a purpose. Visit Now"}
                description={"Team of IosAndWeb Technologies - We approach with a purpose. Effective Team Communication and collaboration. Visit Now Know About Us."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="about-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col>
                            <div className="heading-wrapper">
                                <h1>Transforming Businesses With <span className="text-highlight">Innovation</span></h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay"></div>
            </div>

            {/* Who we are */}
            <div className="who-we-are section-padding">
                <Container>
                    <Row>
                        <Col md={5}>
                            <h2 className="heading2">Who We Are?</h2>
                        </Col>
                        <Col md={7}>
                            <div className="about-content">
                                <p>Our Vision reflects our perfection. Being the best team in the digital world, we believe to grow your business at the next level through digitalization.</p>

                                <p>The vision of our organization defines the core spirit of IosAndWeb Technologies. It tells what our company is all about. Our vision motivates us to always be on a path that will make us achieve our goals.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="padding-top-100">
                        <Col md={5}>
                            <h2 className="heading2">What We Do Best</h2>
                        </Col>
                        <Col md={7}>
                            <div className="about-content">
                                <p>With our focus, dedication, and communication, we became an award-winning organization. We believe to deliver the best services in developing, designing and improving your digital intellectual properties. We believe in organic communication and coordination, not just between our team but also with our clients in every manner. This helps us to understand clients' requirements and their problems and allows us to give our best to the clients as well as their customers.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Work life section */}
            <div className="work-life-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Work Life <br/>At Its <span>Best</span></h2>
                            <div className="its-best-wrap">
                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={learningDev} alt="Learning" /></figure>
                                        <span>Learning <br/>& Development</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={mindful} alt="Mindful" /></figure>
                                        <span>Mindful <br/>Personal Guidance</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={constructiveFeedback} alt="Constructive" /></figure>
                                        <span>Constructive <br/>Feedback</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={inclusive} alt="Inclusive" /></figure>
                                        <span>Inclusive <br/>& Open-Culture</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={innovation} alt="Innovation" /></figure>
                                        <span>Innovation <br/>& Quality First</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={proactive} alt="Proactive" /></figure>
                                        <span>Proactive <br/>Implementation</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={bestGlobal} alt="Best & Global" /></figure>
                                        <span>Best & Global <br/>Opportunities</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={workLatest} alt="Work with" /></figure>
                                        <span>Work with <br/>Latest Technology</span>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Core values section */}
            <div className="core-values-section section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Core Values</h2>
                            <div className="heading5 text-center width-55">We're enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not just technology but the humans behind it.</div>
                            <div className="core-values-flex">

                                <div className="core-values-grid">
                                    <div className="core-values-number">01</div>
                                    <div className="core-values-heading">Ensure impactful innovations</div>
                                    <p className="paragraph">An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</p>
                                </div>

                                <div className="core-values-grid">
                                    <div className="core-values-number">02</div>
                                    <div className="core-values-heading">Focus on self-development</div>
                                    <p className="paragraph">Training and mentorship programs, interactive sessions and community meetups to drive personal growth.</p>
                                </div>

                                <div className="core-values-grid">
                                    <div className="core-values-number">03</div>
                                    <div className="core-values-heading">Integrate work-life balance</div>
                                    <p className="paragraph">Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Our Achievements */}
            <div className="our-achievements-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Our Achievements</h2>
                            <div className="heading5 max-width-70">With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence.</div>
                            <div className="achieve-flex">
                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={appFutura} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">Number 1 mobile app development company</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={clutch} className="front-image" alt="Clutch" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">No. 1 App Development Company</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={goodFirms} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">App development company of the year</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={itFirms} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">India's Growth Champions in IT</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={topDevelopers} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">Number 1 software development company</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={upWork} className="front-image" alt="Upwork" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">Top software development company</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* progress section */}
            <div className="progress-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="progress-block text-white">
                                <div className="progress-block-flex">
                                    <div className="progress-number">
                                        <span id="projects_delivered" />
                                        <div className="progress-heading">Projects Delivered</div>
                                    </div>
                                    <div className="progress-number">
                                        <span id="tech_experts" />
                                        <div className="progress-heading">Tech experts On-board</div>
                                    </div>
                                    <div className="progress-number">
                                        <span id="investment_raised" />
                                        <div className="progress-heading">Investment Raised for Startups</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Join Team */}
            <JoinTeamGallery />
        </>
    )
}
export default About