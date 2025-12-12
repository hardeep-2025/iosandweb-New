import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";

// why choose icons
const tailoredSolutions = `${process.env.REACT_APP_API_URL}/assests/images/services/tailored-solutions.png`;
const expertise = `${process.env.REACT_APP_API_URL}/assests/images/services/expertise.png`;
const responsive = `${process.env.REACT_APP_API_URL}/assests/images/services/responsive.png`;
const integration = `${process.env.REACT_APP_API_URL}/assests/images/services/integration.png`;
const ongoingSupport = `${process.env.REACT_APP_API_URL}/assests/images/services/ongoing-support.png`;

function WhyChoose(){
    return (
        <>
         {/* why choose */}
            <div className="section-why-choose why-choose-section section-padding">
                <Container>
                    <Row>
                        <Col>
                             <h3 className="heading2 text-center max-width-70 mx-auto">Why Choose IAW Technologies, You May Ask?</h3>
                            <div className="heading5 text-center max-width-70 mx-auto">We ensure web solutions that work flawlessly across multiple devices</div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <div className="why-choose-list-div">
                                    <img src={tailoredSolutions} alt="Tailored Solutions" className="why-choose-icon" />
                                    <h3 className="heading4">Tailored Solutions</h3>
                                </div>
                                <p className="paragraph">We understand that every business is unique, that's why we take the time to listen and understand your requirements and goals, ensuring that whatever we develop for you adheres to your vision perfectly.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <div className="why-choose-list-div">
                                    <img src={expertise} alt="Expertise & Experience" className="why-choose-icon" />
                                    <h3 className="heading4">Expertise & Experience</h3>
                                </div>
                                <p className="paragraph">Our team of seasoned developers brings years of experience and a wealth of knowledge to the table. From web applications to mobile apps to enterprise solutions, we have the skills to deliver results.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <div className="why-choose-list-div">
                                    <img src={responsive} alt="Innovation at the Core" className="why-choose-icon" />
                                    <h3 className="heading4">Innovation at the Core</h3>
                                </div>
                                <p className="paragraph">Innovation drives everything we do. We stay ahead of the curve, leveraging the latest technologies and trends to build cutting-edge solutions that seamlessly set you apart from the competition.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <div className="why-choose-list-div">
                                    <img src={integration} alt="Seamless Integration" className="why-choose-icon" />
                                    <h3 className="heading4">Seamless Integration</h3>
                                </div>
                                <p className="paragraph">Our solutions coherently integrate with your existing systems and processes, minimizing disruptions and maximizing efficiency. Whether you're upgrading legacy systems or starting fresh, we ensure a smooth transition.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <div className="why-choose-list-div">
                                    <img src={ongoingSupport} alt="Ongoing Support" className="why-choose-icon" />
                                    <h3 className="heading4">Ongoing Support</h3>
                                </div>
                                <p className="paragraph">Our partnership doesn't just end after deployment; we provide ongoing support and maintenance to keep your software running smoothly and address any issues that may arise.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default WhyChoose;