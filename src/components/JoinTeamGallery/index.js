import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Join Team images
const teamImage1 = `${process.env.REACT_APP_API_URL}/assests/images/about/team-galler1.webp`;
const teamImage2 = `${process.env.REACT_APP_API_URL}/assests/images/about/team-galler2.webp`;
const teamImage3 = `${process.env.REACT_APP_API_URL}/assests/images/about/team-galler3.webp`;

function JoinTeamGallery(){
    return(
        <>
            {/* Join Team */}
            <div className="join-the-team section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} lg={5}>
                            <h2 className="heading2">Join the IosAndWeb Technologies team!</h2>
                            <div className="heading5">Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.</div>
                            <div className="apply-btn btn-section">
                                <a href="/contact-us" className="btn btn-blue-border">Apply Now <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </Col>
                        <Col md={6} lg={7}>
                            <div className="display-flex">
                                <div className="image-wrap">
                                    <img src={teamImage1} alt="Team" className="team-join-img" />
                                </div>
                                <div className="image-wrap">
                                    <div className="image-wrap-inner">
                                        <img src={teamImage2} alt="Team" className="team-join-img" />
                                    </div>
                                    <div className="image-wrap-inner">
                                        <img src={teamImage3} alt="Team" className="team-join-img" />
                                    </div>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default JoinTeamGallery;