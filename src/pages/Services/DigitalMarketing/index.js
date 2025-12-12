import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

// Reasons section images
const searchEngine = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/seo.png`;
const socialMedia = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/social-media-optimization.png`;
const reputationManagement = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/reputation-management.png`;
const ppcManagement = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/ppc-management.png`;
const advertisingCampaigns = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/advertising-campaign.png`;
const contentMarketing  = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/content-marketing.png`;
const leadGeneration = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/lead-generation.png`;
const linkBuilding = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/link-building.png`;
const conversionRate = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/conversion-rate-optimizer.png`;

// Final Reflection images
const SEOIcon = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/seo-icon.png`;
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/social-media-marketing.png`;
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;
const bristol = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/digital-marketing.png`;

function DigitalMarketing(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"Grab Quality leads with Digital marketing services | Get Quote"}
                description={"Grow your business globally with Digital marketing services and get quality leads with paid PPC Services, SEO Services and SMM services."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Digital Marketing Banner */}
            <div className="digital-marketing-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>Digital <span className="text-highlight">Marketing</span> Services</h1>
                                <div className="heading5">Digital Marketing Services has created a new revolution in the business world today. The people's way of interacting with brands, looking for the products & services have changed a lot and the internet is influencing them at a huge level.
                                </div>
                                <div className="heading5">
                                <a href="/"><b>IosAndWeb Technologies</b></a> is the best SEO company With the latest technologies and development, the business market is changing and the behavior of customers towards products & services too. 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-60"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Digital Marketing Company</h2>
                            <div className="heading5 text-center">We offers customized business solutions to meet their business goals.</div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what is Software section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="leadtxt">
                                <h2>Are you looking for a advanced Digital Marketing services?</h2>
                            </div>
                            <div className="leadsubtxt">
                                Being a leading digital marketing agency, we are here to assist you with our digital marketing services. Before starting work on your project our digital marketing experts will give a thorough study to your niche and know the targeted audience for your business, find the interests of people in your products & services and then find the overall benefit. We have <u>Digital marketing expert in Birmingham</u> can help you by optimizing your website to bring new outlooks on your website and make people know more about your brand and then creating leads with them. 
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project.
                            </div>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Result-Oriented Digital Marketing Services</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Search Engine Optimization (SEO)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Social Media Optimization (SMO)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Online Reputation Management (ORM)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> PPC Campaign Management by PPC ads expert</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Display Advertising Campaigns</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Content Marketing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> Lead Gen Campaign</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eight"><FontAwesomeIcon icon={faCircleDot} /> Link Building</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ninth"><FontAwesomeIcon icon={faCircleDot} /> Conversion Rate Optimization</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={searchEngine} alt="Search Engine Optimization" className="reasons-content-icon" />
                                            <h3 className="heading3">Search Engine Optimization (SEO)</h3>
                                            <p className="paragraph">With Website SEO company make your brand one from the thousands of searches that happen every second over the search engines. Our main aim is to make a place for your brand in the top position of Google or other search engines by using legal & <a href="/seo-services">SEO Services</a> by our ethical <b>SEO specialist.</b></p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={socialMedia} alt="Social Media Optimization" className="reasons-content-icon" />
                                            <h3 className="heading3">Social Media Optimization (SMO)</h3>
                                            <p className="paragraph">Our Social media expert ensure to choose the right social media channels for your business that brings the maximum ROI. Our <b>Online ads company</b> optimize your entire social media and bring organic results in favor of your business.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={reputationManagement} alt="Reputation Management" className="reasons-content-icon" />
                                            <h3 className="heading3">Online Reputation Management (ORM)</h3>
                                            <p className="paragraph">A reputation of a business is a key to success. We provide online reputation management services that enhance your business reputation online or repair your negative image at online platforms. We help you to build a brand image of your business.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={ppcManagement} alt="PPC Campaign Management" className="reasons-content-icon" />
                                            <h3 className="heading3">PPC Campaign Management by PPC ads expert</h3>
                                            <p className="paragraph">We are <u>Digital marketing specialist</u> help you to create a profitable campaign for your business which can bring the most value to your business. <b>Google adwords</b> ads is one another best way of business growth.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={advertisingCampaigns} alt="Advertising Campaigns" className="reasons-content-icon" />
                                            <h3 className="heading3">Display Advertising Campaigns</h3>
                                            <p className="paragraph">Display advertisement works where you need to create awareness about your brand or product. This advertising campaign works proficiently when <a href="/social-media-marketing-services"><b>Social media campaign expert</b></a> handle all these marketing campaigns.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={contentMarketing} alt="Content Marketing" className="reasons-content-icon" />
                                            <h3 className="heading3">Content Marketing</h3>
                                            <p className="paragraph">All the products & services can work well if their message is delivered in an impressive way. Our content marketing services provide the content for your products & services that put an impact on your targeted audience.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="reasons-tab-content">
                                            <img src={leadGeneration} alt="Lead Generation" className="reasons-content-icon" />
                                            <h3 className="heading3">Lead Gen Campaign</h3>
                                            <p className="paragraph">Our <a href="/b2b-lead-generation-campaign-services">Lead generation campaign</a> is beneficial for both B2B and B2C industries. This lead generation campaign works best where the sale of the product or service starts from capturing the audience's attention, feeding them with great offers and managing the leads by <u>Digital marketing company</u>.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eight">
                                        <div className="reasons-tab-content">
                                            <img src={linkBuilding} alt="Link Building" className="reasons-content-icon" />
                                            <h3 className="heading3">Link Building</h3>
                                            <p className="paragraph">Google search engine ranking is by far the best element to get higher ROI. Our SEO expert will work on your website and make sure that your website doesn't lack quality backlinks.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ninth">
                                        <div className="reasons-tab-content">
                                            <img src={conversionRate} alt="Conversion Rate Optimization" className="reasons-content-icon" />
                                            <h3 className="heading3">Conversion Rate Optimization</h3>
                                            <p className="paragraph">Bringing audience traffic to a website is challenging and time-consuming. But what is important is the conversion of the traffic into potential customers. Optimize the conversion rate of your website with IosAndWeb.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact-us"
            />

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Our Path of Digital Marketing Success</h2>
                            <div className="heading5">Initially, our <b>Digital marketing experts</b> maintain intimate relationships with you so that we can understand your business requirements and accordingly formulate digital marketing strategies and plans. There will be equal participation by you and our experts will collaborate with you on the project. Everything will be discussed related to project like goals, newly established strategies, timeframe and the key performing indicators (KPIs). We will provide regular updates and reports while working on the project so that you can track the progress and the success rate.</div>
                            <div className="heading5">We will bring organic traffic to your website and helps you to get the maximum benefit from that traffic as well paid traffic by <a href="/ppc-services"><b>PPC Specialist</b></a>.</div>
                            <div className="heading5">Various Digital Marketing Campaigns will be set up to establish your business online and several proven strategies will be implemented to increase the visibility of your business online and you can make the most out of Digital Marketing of your business.</div>
                            <div className="heading5">Our way of working might be different but our aim is to bring profit for your business for the long-term. Initially, we may use techniques like PPC to get faster results. But slowly we will change and formulate different strategies in which we will use inbound marketing techniques to bring organic success. We aim to give you the best results on each & every penny that you've invested. Meet your business objectives with IosAndWeb Technologies and climb the ladder of success. Advertisement company near me.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services">
                                            <img src={SEOIcon} className="services-bottom-front-image" alt="SEO Services" />
                                            <h4 className="heading4">SEO Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/social-media-marketing-services">
                                            <img src={socialMediaMarketing} className="services-bottom-front-image" alt="Social Media Marketing" />
                                            <h4 className="heading4">Social Media Marketing</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-page-speed-optimization-services">
                                            <img src={pageSpeed} className="services-bottom-front-image" alt="SEO Page Speed" />
                                            <h4 className="heading4">SEO Page Speed Optimization</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/english-copywriting-and-proofreading-services">    
                                            <img src={proofreading} className="services-bottom-front-image" alt="Proofreading" />
                                            <h4 className="heading4">English Copywriting & Proofreading Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/b2b-lead-generation-campaign-services">    
                                            <img src={b2b} className="services-bottom-front-image" alt="B2B" />
                                            <h4 className="heading4">B2B Lead Generation Campaign Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/digital-marketing-services-in-bristol">    
                                            <img src={bristol} className="services-bottom-front-image" alt="Bristol" />
                                            <h4 className="heading4">Digital Marketing Services in Bristol</h4>
                                        </a>
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

export default DigitalMarketing;