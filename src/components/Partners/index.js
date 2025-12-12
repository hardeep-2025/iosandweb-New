import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";

const onmen = `${process.env.REACT_APP_API_URL}/assests/images/partners/ONMEN.png`;
const gopuff = `${process.env.REACT_APP_API_URL}/assests/images/partners/Gopuff.webp`;
const seamless = `${process.env.REACT_APP_API_URL}/assests/images/partners/seamless.png`;
const doorDash = `${process.env.REACT_APP_API_URL}/assests/images/partners/DoorDash.png`;
const uber = `${process.env.REACT_APP_API_URL}/assests/images/partners/Uber-Eats-Logo.png`;
const srgn = `${process.env.REACT_APP_API_URL}/assests/images/partners/srgn.png`;
const lowes = `${process.env.REACT_APP_API_URL}/assests/images/partners/Lowes.png`;
const aesthetic = `${process.env.REACT_APP_API_URL}/assests/images/partners/aesthetic.png`;
const grubhub = `${process.env.REACT_APP_API_URL}/assests/images/partners/Grubhub.png`;
const chownow = `${process.env.REACT_APP_API_URL}/assests/images/partners/chownow.png`;
const vertical = `${process.env.REACT_APP_API_URL}/assests/images/partners/vertical.png`;
const Instacart = `${process.env.REACT_APP_API_URL}/assests/images/partners/Instacart.png`;
const mygermany = `${process.env.REACT_APP_API_URL}/assests/images/partners/mygermany.png`;
const walgreeens = `${process.env.REACT_APP_API_URL}/assests/images/partners/walgreeens-logo.png`;

const ten = `${process.env.REACT_APP_API_URL}/assests/images/partners/ten-white-2.png`;

function Partners(){
    return(
        <>
            <div className="partners-panel section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center">
                                <h3>Our Efforts Have Revolutionized <br/>Your Experience With These Global Leaders</h3>
                            </div>
                            <ul className="partner-logos">
                                <li className="partner-logo">
                                    <img src={onmen} alt="ONMEN" />
                                </li>
                                <li className="partner-logo">
                                    <img src={srgn} alt="srgn" />
                                </li>
                                <li className="partner-logo">
                                    <img src={aesthetic} alt="aesthetic" />
                                </li>
                                <li className="partner-logo">
                                    <img src={vertical} alt="vertical" />
                                </li>
                                <li className="partner-logo">
                                    <img src={mygermany} alt="mygermany" />
                                </li>
                                <li className="partner-logo">
                                    <img src={ten} alt="ten" />
                                </li>
                                <li className="partner-logo">
                                    <img src={lowes} alt="lowes" />
                                </li>
                                <li className="partner-logo">
                                    <img src={gopuff} alt="gopuff" />
                                </li>
                                <li className="partner-logo">
                                    <img src={grubhub} alt="grubhub" />
                                </li>
                                <li className="partner-logo">
                                    <img src={chownow} alt="chownow" />
                                </li>
                                <li className="partner-logo">
                                    <img src={doorDash} alt="doorDash" />
                                </li>
                                <li className="partner-logo">
                                    <img src={Instacart} alt="Instacart" />
                                </li>
                                <li className="partner-logo">
                                    <img src={seamless} alt="seamless" />
                                </li>
                                <li className="partner-logo">
                                    <img src={walgreeens} alt="walgreeens" />
                                </li>
                                <li className="partner-logo">
                                    <img src={uber} alt="uber" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Partners