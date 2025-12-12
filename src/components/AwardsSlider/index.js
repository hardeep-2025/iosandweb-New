import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

// Award images
const goodFirmLogo = `${process.env.REACT_APP_API_URL}/assests/images/awards/good-firms-logo.webp`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/images/awards/appfutura.webp`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/images/awards/itfirm.webp`;
const topDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/awards/top-development.webp`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/images/awards/upwork.webp`;

function AwardsSlider(){
    return(
        <>
            {/* Award Panel */}
            <div className="awards-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">Our Achievements</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence.</div>

                            <OwlCarousel className="owl-theme awards-carousel" loop autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true} margin={80} nav={true} dots={false} items={1} center={true} 
                            responsive={
                                {
                                    '0': {
                                        items: 1,
                                        stagePadding: 20
                                    },
                                    '600': {
                                        items: 1,
                                        stagePadding: 50
                                    },
                                    '1000': {
                                        items: 1,
                                        stagePadding: 300
                                    },
                                    '1200': {
                                        items: 1,
                                        stagePadding: 350
                                    },
                                    '1400': {
                                        items: 1,
                                        stagePadding: 400
                                    },
                                    '1600': {
                                        items: 1,
                                        stagePadding: 450
                                    },
                                    '1800': {
                                        items: 1,
                                        stagePadding: 450
                                    }
                                }
                            }>
                                <div className="item">
                                    <div className="award-item-block">
                                        <div className="award-item-logo">
                                            <img src={goodFirmLogo} alt="App development" />
                                        </div>
                                        <div className="award-item-text">
                                            <span>App development company of the year</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="award-item-block">
                                        <div className="award-item-logo">
                                            <img src={appFutura} alt="App solution" />
                                        </div>
                                        <div className="award-item-text">
                                            <span>Most promising mobile app solution provider</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="award-item-block">
                                        <div className="award-item-logo">
                                            <img src={itFirms} alt="India's Growth Champions" />
                                        </div>
                                        <div className="award-item-text">
                                            <span>India's Growth Champions in IT</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="award-item-block">
                                        <div className="award-item-logo">
                                            <img src={upWork} alt="India's Growth Champions" />
                                        </div>
                                        <div className="award-item-text">
                                            <span>Software development company of the year</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="award-item-block">
                                        <div className="award-item-logo">
                                            <img src={topDevelopment} alt="Tech Company Of The Year" />
                                        </div>
                                        <div className="award-item-text">
                                            <span>Tech Company Of The Year</span>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AwardsSlider;