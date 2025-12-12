import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktopAlt, faCode, faShoppingBag, faGlobeAsia, faMobileScreen, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Services includes images
const security = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/more-secure.png`;
const architecture = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/routine-tasks.png`;
const costSaving = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/lower-costs.png`;
const support = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/instant-support.png`;

// final reflection images
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/software-development.png`;
const crmDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/crm-development.png`;
const magento = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/magento.png`;
const shopify = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/shopify.png`;


function WebDevelopment() {

    const location = useLocation();

    return (
        <>
            <SEO
                title={"Professional Web Development Services | Custom Web Development Services"}
                description={" IosandWeb offers professional web development services, full-stack and custom web solutions by expert website developers for web and app development needs."}
                keywords={"Web development services, Full-stack Development Services, Custom web development services, Professional website developers, Web and app development services"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Web Development Banner */}
            <div className="web-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Web </span>Development Services
                                </h1>
                                <div className="heading5">Let's build your dream website. IosAndWeb Technologies delivers the best web
                                    development services by having front end developer and back end developer expert
                                    and professional team of web developers and designers. As professional website
                                    developers we are especially known for its effective knowledge in creating virtual
                                    branding and standardized websites compatible with all the devices and delivering
                                    full-stack development services
                                    <br />We also offer Website security, smart application architecture, ecommerce developer
                                    for <a href="/magento-development-services">Magento development services</a>, long-term cost saving and great support.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-40"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Web Development Company</h2>
                            <div className="heading5 text-center">IosAndWeb Technologies delivers the best <b>web and app development services</b> in
                                London,Birmingham and many areas of the United Kingdom by having an expert
                                and professional team of web developers.
                            </div>

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
                                <h2>Custom Web And App Development Services
                                </h2>
                            </div>
                            <div className="leadsubtxt">
                                For over a decade, we have been serving with our custom web development
                                services
                                <br />in the UK as well as abroad. While developing your website, our team uses the latest
                                techniques like ultra-clean and bold styles for the standard-based markup codes of
                                the websites that help in improving the position in SERPs and increase conversions.
                                As a web development company, we know that it is important to have a great
                                website for a good online presence and it leaves the first impression on your website
                                visitors. Some people consider a website just as a virtual representation of their
                                company but it is not only that. Your website is the reflector of your business
                                objectives and goals. That's why having an appealing, attractive, informative website
                                is necessary for a great online presence.

                            </div>
                            <ul className="services-listing">
                                <li>Magento Development</li>
                                <li>PHP Frameworks</li>
                                <li>Asp.net</li>
                                <li>WordPress</li>
                                <li>WooCommerce</li>
                                <li>Shopify</li>
                            </ul>
                        </Col>
                        <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project
                            </div>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services includes */}
            <div className="section-why-choose services-includes-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Web Development Services Includes</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={security} alt="Website Security" className="why-choose-icon" />
                                <h3 className="heading4">Website Security
                                </h3>
                                <p className="paragraph">We web development agency providing security assistance to the websites of our
                                    clients is our priority. To make the website safe & secure, we implement all the
                                    security layers and make the entire web experience effective.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={architecture} alt="Architecture" className="why-choose-icon" />
                                <h3 className="heading4">Smart Application Architecture</h3>
                                <p className="paragraph">Our frontend developer and backend developer make apps and websites with a
                                    systematic approach and plan the project from its initial to the final stage. With this,
                                    it becomes easy to analyze the complexity and technical needs of the project.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={costSaving} alt="Cost Saving" className="why-choose-icon" />
                                <h3 className="heading4">Long Term Cost Saving
                                </h3>
                                <p className="paragraph">Our expert team of developers does coding in such a flexible way that in the future if
                                    you need to upgrade ecommerce magento development the features then you do
                                    not need to do any major changes.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={support} alt="Great Support" className="why-choose-icon" />
                                <h3 className="heading4">Great Support</h3>
                                <p className="paragraph">Our work doesn't get completed with the submission of the final project. We provide promising support after services for the maintenance of delivered projects</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Specification section */}
            <div className="sepcification-section text-white section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Web Application Solutions Will Perfectly <br /> Conforming Your Specifications</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faDesktopAlt}></FontAwesomeIcon>
                                <h4 className="heading4">Front-End Development
                                </h4>
                                <p className="paragraph">Get End-To-End Solutions for your web development needs from our expert and
                                    professional developers.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <h4 className="heading4">Custom Web Development</h4>
                                <p className="paragraph">Hire our expert developers to get customized and tailored websites as per your
                                    requirements with high-reliability and advanced technology.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                <h4 className="heading4">E-Commerce Development
                                </h4>
                                <p className="paragraph">We provide you with custom eCommerce Web Development and Magento website
                                    design solutions to make your customers experience better and increase sales of
                                    your brand. We add value to your products by delivering flexible platforms.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon>
                                <h4 className="heading4">Web Application Frameworks
                                </h4>
                                <p className="paragraph">Our Web application solutions use the PHP framework which is best till now and
                                    satisfy the client's needs and increase the performance of the website.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faGlobeAsia}></FontAwesomeIcon>
                                <h4 className="heading4">Open Source Platform Development
                                </h4>
                                <p className="paragraph">We have great expertise in content management services so that we provide some
                                    out of the range of custom solutions to our esteemed clients. We include WordPress,
                                    magento web development, Joomla, Drupal and many more in our open-source
                                    platform development services.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Development process section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Here’s the Process That We As Professional Website Developers Follow</h2>
                            <div className="heading5 text-center">An impressive Web Development needs Design, user experience, and path. The
                                experienced team of our company makes a plan, develops and then executes the
                                business objectives to satisfy the customers.
                            </div>
                        </Col>
                    </Row>
                    <div className="development-process-blocks mt-4">
                        <Row className="no-gutters">
                            <div className="col-lg"></div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Project Scope & Planning</h4>
                                        <p className="card-text">Our experts conduct a deep study of your business and understand the
                                            requirements of your business. After reviewing the needs, we decide the technology
                                            and the framework that will be used for your site.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Design & Coding</h4>
                                        <p className="card-text">At this step, we code the website efficiently and avoid the unnecessary code inclusions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>

                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg"></div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Testing & Launch
                                        </h4>
                                        <p className="card-text">Before making any site live on the internet, we make it bug-free and conduct testing
                                            on various platforms to enhance the user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Maintenance</h4>
                                        <p className="card-text">We provide after-service support & maintenance to the client's project and ensure its smooth working.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>

                        </Row>

                    </div>

                </Container>
            </div>

            {/* get started section */}
            <GetStarted
                title="Let's Start Building Web Solutions of Getting Full-stack Development Services All in One Place To Help Achieve Your Business Goal"
                buttonText="Get Started"
                link="/contact-us"
            />

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Final Reflections
                            </h2>
                            <div className="heading5">IosAndWeb Technologies is a leading Website Development Company that will help
                                you to make your visions into reality. Get our affordable web development services
                                and get an interactive online presence on the web.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/custom-software-development-company">
                                            <img src={softwareDevelopment} className="services-bottom-front-image" alt="Software Development" />
                                            <h4 className="heading4">Software Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/crm-development-for-healthcare-industry">
                                            <img src={crmDevelopment} className="services-bottom-front-image" alt="CRM Development" />
                                            <h4 className="heading4">CRM Development For Healthcare Industry</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/magento-development-services">
                                            <img src={magento} className="services-bottom-front-image" alt="Magento Development" />
                                            <h4 className="heading4">Magento Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/shopify-development-services">
                                            <img src={shopify} className="services-bottom-front-image" alt="Shopify Development" />
                                            <h4 className="heading4">Shopify Development</h4>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* FAQ section */}
            <div className="faq-panel section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> What types of websites do you develop at IosAndWeb Technologies? </Accordion.Header>
                                        <Accordion.Body>
                                            <p>We build a wide range of websites—from simple business sites and blogs to complex web applications, eCommerce platforms (Magento, WooCommerce, Shopify), and custom CMS solutions. Our team of expert front-end and back-end developers ensures your site meets your unique business needs and goals.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How do you ensure my website is secure?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Website security is a top priority for us. We implement SSL, firewalls, data encryption, secure coding practices, and regular updates to protect your website from threats. Our team follows industry-standard security protocols to ensure safe and reliable online experiences.

                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What platforms and frameworks do you specialize in?

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our web development services include PHP frameworks, ASP.NET, WordPress, Magento, Shopify, Joomla, and Drupal. We choose the most suitable platform based on your project’s complexity, scalability, and customization requirements.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>

                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Do you provide post-launch support and maintenance?

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes, we offer comprehensive support and maintenance services after your website goes live. From performance monitoring and bug fixing to feature upgrades and security patches, we ensure your website remains up-to-date and efficient.

                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header> How much does a custom website development project cost?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The cost varies depending on your website’s features, complexity, design elements, and technology stack. We provide tailored quotes based on your requirements and offer cost-effective solutions that ensure long-term value and scalability.
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default WebDevelopment;