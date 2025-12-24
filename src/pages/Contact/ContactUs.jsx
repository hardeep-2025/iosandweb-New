import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import './style.css';
const contactGif1 = `${process.env.REACT_APP_API_URL}/assests/contactUs/ContactUsGIF1.gif`;
const check = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const india = `${process.env.REACT_APP_API_URL}/assests/contactUs/india.png`;
const usa = `${process.env.REACT_APP_API_URL}/assests/contactUs/cont-loc-usa.png`;
const uk = `${process.env.REACT_APP_API_URL}/assests/contactUs/cont-loc-uk.png`;
const lock = `${process.env.REACT_APP_API_URL}/assests/contactUs/lock.png`;


const ContactUs = () => {
    return (
        <>
            <div className="contact-banner banner-padding text-white">
                    <Container>
                    <Row className="align-items-center ">
                        <Col lg={7}>
                            <div className="heading- full-width padding-top">
                                <h1 className='heading_main'>Let's Start Something Great </h1>

                                <div className="paragraph_content ">Whether you have a detailed project brief or just an idea, we're here to help turn your vision into reality. Reach out today and let's discuss how we can drive your digital growth.</div>
                                <div className="paragraph_content paddingTop">From small startups to established enterprises, we work with businesses of all sizes. Tell us about your project, and we'll show you what's possible.</div>

                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={contactGif1} alt="" />
                        </Col>
                    </Row>
                </Container>
        </div>
        <div className='threeDivSection'>
            <Container>
                <Row>
                    <Col>
                        <div className='threeDivSectionDiv'>
                            <div className='threeDivSectionContent'>
                            <span className='HeadingThreeSection'>
                           <img src={check} alt="" />
                            <span> Deep-Dive Discovery Call (Within 24 Hours)</span>
                            </span>
                            <span class="features_point">
                            We schedule a comprehensive consultation to understand your business, goals, challenges, and vision.                           
                             </span>
                            </div>

                            <div className='threeDivSectionContent borderTowside'>                            
                            <span className='HeadingThreeSection'>
                            <img src={check} alt="" />
                            <span> Custom Strategy & Roadmap (Within 3-5 Days)</span>
                            </span>
                            <span class="features_point">
                             Our team analyzes your requirements and creates a detailed proposal with clear deliverables and realistic timelines.
                            </span>
                            </div>

                            <div className='threeDivSectionContent'>                            
                            <span className='HeadingThreeSection'>
                            <img src={check} alt="" />
                            <span> Seamless Project Kickoff (When You're Ready)</span>
                            </span>
                            <span class="features_point">
                             Once approved, we assign a dedicated team, set up communication channels, and begin execution immediately
                            </span>
                            </div>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='contactUsSection banner-padding'>
            <Container>
                <Row>
                    <Col lg={7}>
                    <div className='contactusSectionMain'>
                      <div className='LeftSide '>
                        <h1 className='heading_main'>IosAndWeb Technologies Serving Businesses Worldwide</h1>
                        <h3 className='mainsubHeading'>Global Presence, Local Expertise</h3>
                      </div>
                      <div className='countrySection'>
                        <div className='coutnactusByCountry'>
                            <span className='ImagByCountry'>
                                <img src={india} alt="" />
                            </span>
                            <div className='headingByCountry'>
                                <span className='heading'>India (HQ)</span>
                                <span className='subHeading'>SCO 30, First Floor, <br /> Near Devaji Plaza, VIP Road,<br /> Zirakpur, PB (India)</span>
                            </div>
                        </div>

                        <div className='coutnactusByCountry bordeerTopAndBottom'>
                            <span className='ImagByCountry'>
                                <img src={uk} alt="" />
                            </span>
                            <div className='headingByCountry'>
                                <span className='heading'>United Kingdom</span>
                                <span className='subHeading'>Sheffield City Centre, <br /> Sheffield, S1 1AA,<br /> United Kingdom</span>
                            </div>
                        </div>

                        <div className='coutnactusByCountry'>
                            <span className='ImagByCountry'>
                                <img src={usa} alt="" />
                            </span>
                            <div className='headingByCountry'>
                                <span className='heading'>United States</span>
                                <span className='subHeading'>Suite #304, <br /> 11200 Manchaca,<br /> Austin, Texas,<br /> United States, 78748</span>
                            </div>
                        </div>
                      </div>
                    </div>
                        
                    </Col>
                    <Col lg={5}>
                    <div className='rightSide'>
                        <h1 className='mainsubHeading'>Reach Out & Let's Build Something Exceptional Together</h1>
                        <div>
                            <ContactForm ></ContactForm>
                        </div>
                    </div>

                    </Col>
                </Row>
            </Container>
            <div className='black-background section-padding no-bottom-padding'>
                <Container>
                    <Row>
                        <Col>
                             <h1 className='heading_main displayFlex'><img src={lock} alt="" />Let's Talk Growth- Schedule Your Free Call NoW</h1>
                             <span className='calanderSubHeading less-top-padding less-bottom-padding'>Start Your Growth Journey With a Free Strategy Session</span>
                                                         <iframe src="https://calendly.com/iawtech/free-consultation?embed_domain=iosandweb.net&embed_type=Inline" width="100%" height="100%" title="Select a Date & Time - Calendly" data-origwidth="100%" data-origheight="100%" className="session-iframe"></iframe>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='black-background section-padding no-top-padding'>
                <Container>
                    <Row>
                        <Col>
                            <div >
                               <div >
                                <h1 className='heading_main'>See Your Business 6 Months From Now</h1>
                                <h3 className='subHeading'>Free Future-State Analysis</h3>
                                <div className='regular'>We'll show you exactly where you could be with the right strategy. No pitch, just insights you can act on today.</div>
                                <button>What Sets Us Apart</button>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    );
}

export default ContactUs;
