import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import WhyChoose from "../../components/WhyChoose";
import SEO from "../../components/SEO";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import GetStarted from "../../components/GetStarted";
import { useLocation } from "react-router-dom";
import { faDesktop, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import DevelopmentProcess from "../../components/DevelopmentProcess";

const serviceImage = `${process.env.REACT_APP_API_URL}/assests/images/services-image.webp`;

// what we do images
const webDevelop = `${process.env.REACT_APP_API_URL}/assests/images/services/settings.png`;
const mobileDevelop = `${process.env.REACT_APP_API_URL}/assests/images/services/development.png`;
const magentoDevelop = `${process.env.REACT_APP_API_URL}/assests/images/services/magento_development.png`;
const blockchainDevelop = `${process.env.REACT_APP_API_URL}/assests/images/services/blockchain-development.png`;
const smartContract = `${process.env.REACT_APP_API_URL}/assests/images/services/smart-contract.png`;
const poc = `${process.env.REACT_APP_API_URL}/assests/images/services/letter.png`;

// we design images
const html = `${process.env.REACT_APP_API_URL}/assests/images/services/html.png`;
const psd = `${process.env.REACT_APP_API_URL}/assests/images/services/xd.png`;
const UX = `${process.env.REACT_APP_API_URL}/assests/images/services/ux.png`;
const css = `${process.env.REACT_APP_API_URL}/assests/images/services/css.png`;
const php = `${process.env.REACT_APP_API_URL}/assests/images/services/php.png`;
const afterEffect = `${process.env.REACT_APP_API_URL}/assests/images/services/after-effects.png`;

function Services(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Web development services- IAW Technologies"}
                description={"Looking for high-quality web development services for your business? Look no further than IAW Technologies. Contact us Today."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="services-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="heading-wrapper">
                                <h1>Web Solutions To Boost Your Brand Growth</h1>
                                <div className="heading5">We Develop Customized Websites For Your Precise Business Needs</div>
                                <a href="/contact-us" className="tn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={serviceImage} className="responsive-img" alt="Services" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what we do section */}
            <div className="services-what-we-do section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">What we do ?</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">We exploit the latest technologies to exceed customer experience. Meet your business aims and objectives with our full-stack iOS, Android and web development solutions with quality assurance and project management. Our employees offer tailored and disruptive solutions that will focus only on your business. </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6} lg={4} className="service-col">
                            <a href="/web-development-services" className="service-link bg-red">
                                <div className="what-do-service-item">
                                    <img src={webDevelop} className="service-icon" alt="Web Development" />
                                    <h3 className="heading2">Web Development</h3>
                                    <p className="paragraph">Development of anything needs planning the design, the appearance, the content, and many more things and we need someone who can work on all the aspects and IosAndWeb is here for helping you.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/mobile-app-development-services" className="service-link bg-purple">
                                <div className="what-do-service-item">
                                    <img src={mobileDevelop} className="service-icon" alt="Mobile App Development" />
                                    <h3 className="heading2">Mobile App Development</h3>
                                    <p className="paragraph">Leverage your iOS and Android mobile app development needs with us and create a place for your brand in the Apple App Store and Google Play Store. Get fully-featured and pocket-friendly mobile apps.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/magento-development-services" className="service-link bg-orange">
                                <div className="what-do-service-item">
                                    <img src={magentoDevelop} className="service-icon" alt="Magento Development" />
                                    <h3 className="heading2">Magento Development</h3>
                                    <p className="paragraph">Development of anything needs planning the design, the appearance, the content, and many more things and we need someone who can work on all the aspects and IosAndWeb is here for helping you.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="https://www.blockchain77.com/services/" target="_blank" rel="noreferrer" className="service-link bg-blue">
                                <div className="what-do-service-item">
                                    <img src={blockchainDevelop} className="service-icon" alt="Blockchain development" />
                                    <h3 className="heading2">Blockchain development</h3>
                                    <p className="paragraph">Our team of experts is here to help you with everything that concerns Blockchain technology and its recent developments. These areas include finance authority, management, and implementation for blockchain.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="https://www.blockchain77.com/services/" target="_blank" rel="noreferrer" className="service-link bg-green">
                                <div className="what-do-service-item">
                                    <img src={smartContract} className="service-icon" alt="Algorand Smart Contract" />
                                    <h3 className="heading2">Algorand Smart Contract</h3>
                                    <p className="paragraph">With the help of our experts, we help your business create smart contracts which in turn helps in the execution process of Hyperledger Fabric and Ethereum cryptocurrency.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="https://www.blockchain77.com/services/" target="_blank" rel="noreferrer" className="service-link bg-gray">
                                <div className="what-do-service-item">
                                    <img src={poc} className="service-icon" alt="Development of POC & ICO" />
                                    <h3 className="heading2">Development of POC & ICO</h3>
                                    <p className="paragraph">By means of smart concepts and data management tools, we assist businesses in creating Point of Contact services and also our expert team helps businesses develop ICO.</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* we design section */}
            <div className="services-we-design section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">We Design</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">We follow an intense procedure, focussing on your business goals, to develop your web presence.</div>
                        </Col>
                    </Row>
                    <Row className="align-items-center we-design-rows">
                        <Col md={6}>
                            <ul className="services-design-items">
                                <li>
                                    <a href="/web-designing-services" className="service-design-link">
                                        <div className="service-design-left">
                                            <FontAwesomeIcon icon={faDesktop} />
                                            <span>Web Design</span>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRightLong} className="right-arrow"></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href="/graphic-designing-services" className="service-design-link">
                                        <div className="service-design-left">
                                            <FontAwesomeIcon icon={faPaintBrush} />
                                            <span>Graphic Design</span>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRightLong} className="right-arrow"></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pdf-to-html-designing-services" className="service-design-link">
                                        <div className="service-design-left">
                                            <FontAwesomeIcon icon={faHtml5} />
                                            <span>Pdf To HTML</span>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRightLong} className="right-arrow"></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <ul className="services-icons-list">
                                <li>
                                    <img src={html} className="icon-image" alt="HTML" />
                                </li>
                                <li>
                                    <img src={css} className="icon-image" alt="CSS" />
                                </li>
                                <li>
                                    <img src={psd} className="icon-image" alt="XD" />
                                </li>
                                <li>
                                    <img src={afterEffect} className="icon-image" alt="After Effect" />
                                </li>
                                <li>
                                    <img src={php} className="icon-image" alt="PHP" />
                                </li>
                                <li>
                                    <img src={UX} className="icon-image" alt="UX" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* why choose */}
            <WhyChoose />

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact-us"
            />


            {/* Development process section */}
            <DevelopmentProcess />

        </>
    )
}

export default Services