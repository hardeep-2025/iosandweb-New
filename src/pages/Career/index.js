import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import JoinOurTeam from "../../components/JoinOurTeam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faChevronRight, faCode, faCogs, faDesktop, faFileAlt, faPaintBrush, faShoppingCart, faUserCog, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

const careerBanner = `${process.env.REACT_APP_API_URL}/assests/images/career/career-banner-image.webp`;

// Reasons to join images
const careerImage = `${process.env.REACT_APP_API_URL}/assests/images/career/career-image.webp`;
const desk = `${process.env.REACT_APP_API_URL}/assests/images/career/desk.png`;
const academy = `${process.env.REACT_APP_API_URL}/assests/images/career/academy.png`;
const innovation = `${process.env.REACT_APP_API_URL}/assests/images/career/innovation.png`;

const supportAdvisor = `${process.env.REACT_APP_API_URL}/assests/images/career/support-advisor.webp`;
const advisor = `${process.env.REACT_APP_API_URL}/assests/images/career/advisor.png`;
const experts = `${process.env.REACT_APP_API_URL}/assests/images/career/experts.png`;
const wellness = `${process.env.REACT_APP_API_URL}/assests/images/career/wellness.png`;

const life = `${process.env.REACT_APP_API_URL}/assests/images/career/life.webp`;
const experience = `${process.env.REACT_APP_API_URL}/assests/images/career/experience.png`;
const diversity = `${process.env.REACT_APP_API_URL}/assests/images/career/diversity.png`;
const foundation = `${process.env.REACT_APP_API_URL}/assests/images/career/society.png`;

function Career(){

    const location = useLocation();
    
    return(
        <>
            <SEO
                title={"Boost Your Career in Web Development and Digital Marketing Jobs"}
                description={"IAW - Apply for Web Development and Digital Marketing Jobs and enhance your skills with IosAndWeb Technologies. Consult our HR department."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <div className="career-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="heading-wrapper">
                                <h1><span className="text-highlight">Career</span> at IosAndWeb Technologies</h1>
                                <div className="heading5">We are a global technology company that offers team members great potential for professional growth. Would you like to become part of our team? Then we look forward to getting to know you personally. We provide a supportive and inclusive environment with some perks.</div>
                                <button onClick={() => document.getElementById('JoinForm')?.scrollIntoView()} className="btn btn-white-border">Apply Now <FontAwesomeIcon icon={faChevronRight} /></button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={careerBanner} className="responsive-img" alt="Career" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to join section */}
            <div className="how-we-work-process reasons-to-join section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Reasons to Join & Stay with Us</h2>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-5">
                        <Col lg={6}>
                            <img src={careerImage} alt="Career" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="heading3 text-highlight text-uppercase"><b>Career</b></h2>
                            <div className="heading5">Be the YOU, You want to be</div>
                            <div className="reasons-join-grid">
                                <div className="reasons-join-item">
                                    <img src={desk} alt="IosAndWeb Desk" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Desk</b></p>
                                        <p className="paragraph">Your career ambitions come true while we empower talent to explore, learn and deliver.</p>
                                    </div>
                                </div>
                                <div className="reasons-join-item">
                                    <img src={academy} alt="IosAndWeb Academy" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Academy</b></p>
                                        <p className="paragraph">Learn and work on new technologies while they're new.</p>
                                    </div>
                                </div>
                                <div className="reasons-join-item">
                                    <img src={innovation} alt="IosAndWeb Innovation" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Innovation</b></p>
                                        <p className="paragraph">Experiment! We give the right platform to fuel your innovative ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5">
                        <Col lg={6}>
                            <h2 className="heading3 text-highlight text-uppercase"><b>Support</b></h2>
                            <div className="heading5">A hand to hold you Tight and Strong</div>
                            <div className="reasons-join-grid">
                                <div className="reasons-join-item">
                                    <img src={advisor} alt="IosAndWeb Advisor" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Advisor</b></p>
                                        <p className="paragraph">We help you with advisory support when you need is the most.</p>
                                    </div>
                                </div>
                                <div className="reasons-join-item">
                                    <img src={experts} alt="IosAndWeb Experts" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Experts</b></p>
                                        <p className="paragraph">Speak with our experts to ace a perfect and rewarding career.</p>
                                    </div>
                                </div>
                                <div className="reasons-join-item">
                                    <img src={wellness} alt="IosAndWeb Wellness" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Wellness</b></p>
                                        <p className="paragraph">Nurture your soul, mind and body with our wellness programs.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={supportAdvisor} alt="Support" className="responsive-img"/>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-5">
                        <Col lg={6}>
                            <img src={life} alt="Life" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="heading3 text-highlight text-uppercase"><b>Life</b></h2>
                            <div className="heading5">Celebrate Work as you Ladder Up</div>
                            <div className="reasons-join-grid">
                                <div className="reasons-join-item">
                                    <img src={experience} alt="IosAndWeb Experience" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Experience</b></p>
                                        <p className="paragraph">Work in an ambience which is comfortable, healthy and amidst the green nature.</p>
                                    </div>
                                </div>
                                <div className="reasons-join-item">
                                    <img src={diversity} alt="IosAndWeb Diversity" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Diversity</b></p>
                                        <p className="paragraph">We encourage diversity and welcome talent from different backgrounds and walks of life.</p>
                                    </div>
                                </div>
                                <div className="reasons-join-item">
                                    <img src={foundation} alt="IosAndWeb Foundation" className="responsive-img" />
                                    <div className="reasons-join-item-content">
                                        <p className="paragraph"><b>IosAndWeb Foundation</b></p>
                                        <p className="paragraph">Giving back to the society, is a crucial part of our ecosystem!</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* get started section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt max-width-70">
                                <h2>Grow With IosAndWeb Technologies!</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                                IosAndWeb Technologies looks for the best and the brightest that our fine education system offers. Fresh talent gets an opportunity learn trending technologies and work on live projects. Explore opportunities with us.
                            </div>
                            <p className="paragraph max-width-70">The following positions are currently opened:</p>
                            <ul className="job-positions-flex">
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faCode} />
                                    <div className="job-position-content">
                                        <p className="paragraph">PHP Developer (WordPress)</p>
                                        <p className="paragraph">2 to 6 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faCogs} />
                                    <div className="job-position-content">
                                        <p className="paragraph">Quality Analyst</p>
                                        <p className="paragraph">1 to 3 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faPaintBrush} />
                                    <div className="job-position-content">
                                        <p className="paragraph">UI/UX Designer</p>
                                        <p className="paragraph">2 to 5 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <div className="job-position-content">
                                        <p className="paragraph">Magento Developer</p>
                                        <p className="paragraph">1 to 5 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faBarChart} />
                                    <div className="job-position-content">
                                        <p className="paragraph">Business Analyst</p>
                                        <p className="paragraph">1 to 3 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faUserCog} />
                                    <div className="job-position-content">
                                        <p className="paragraph">BDM</p>
                                        <p className="paragraph">5 to 8 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <div className="job-position-content">
                                        <p className="paragraph">BDE</p>
                                        <p className="paragraph">6 months to 2 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <div className="job-position-content">
                                        <p className="paragraph">Frontend Developer</p>
                                        <p className="paragraph">3 to 5 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faReact} />
                                    <div className="job-position-content">
                                        <p className="paragraph">MEAN Stack Developer</p>
                                        <p className="paragraph">3 to 5 years</p>
                                    </div>
                                </li>
                                <li className="job-positions-item">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                    <div className="job-position-content">
                                        <p className="paragraph">Content Writer</p>
                                        <p className="paragraph">2 to 5 years</p>
                                    </div>
                                </li>
                            </ul>
                            <button onClick={() => document.getElementById('JoinForm')?.scrollIntoView()} className="btn btn-white-border">Apply Now <FontAwesomeIcon icon={faChevronRight} /></button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Join Our Team */}
            <div id="JoinForm">
                <JoinOurTeam />
            </div>

        </>
    )
}

export default Career;