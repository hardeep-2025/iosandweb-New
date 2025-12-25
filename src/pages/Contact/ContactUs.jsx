import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import './style.css';

const contactGif = `${process.env.REACT_APP_API_URL}/assests/contactUs/ContactUsGIF1.gif`;
const contactGif1 = `${process.env.REACT_APP_API_URL}/assests/contactUs/ContactUsGIF.gif`;
const check = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const india = `${process.env.REACT_APP_API_URL}/assests/contactUs/india.png`;
const usa = `${process.env.REACT_APP_API_URL}/assests/contactUs/cont-loc-usa.png`;
const uk = `${process.env.REACT_APP_API_URL}/assests/contactUs/cont-loc-uk.png`;
const lock = `${process.env.REACT_APP_API_URL}/assests/contactUs/lock.png`;
const right = `${process.env.REACT_APP_API_URL}/assests/contactUs/right.png`;

const ContactUs = () => (
  <>
    <section className="contact-banner banner-padding text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="heading full-width padding-top">
              <h1 className="heading_main">Let's Start Something Great</h1>

              <div className="paragraph_content">
                Whether you have a detailed project brief or just an idea, we're here
                to help turn your vision into reality.
              </div>

              <div className="paragraph_content paddingTop">
                From small startups to established enterprises, we work with businesses
                of all sizes.
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <img src={contactGif1} alt="Contact animation" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="threeDivSection">
      <Container>
        <Row>
          <Col>
            <div className="threeDivSectionDiv">
              {[
                'Deep-Dive Discovery Call (Within 24 Hours)',
                'Custom Strategy & Roadmap (Within 3–5 Days)',
                "Seamless Project Kickoff (When You're Ready)",
              ].map((title, index) => (
                <div
                  key={index}
                  className={`threeDivSectionContent ${
                    index === 1 ? 'borderTowside' : ''
                  }`}
                >
                  <span className="HeadingThreeSection">
                    <img src={check} alt="" />
                    <span>{title}</span>
                  </span>
                  <span className="features_point">
                    We schedule a comprehensive consultation to understand your goals
                    and execution plan.
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="contactUsSection banner-padding">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="contactusSectionMain">
              <div className="LeftSide">
                <h1 className="heading_main">
                  IosAndWeb Technologies Serving Businesses Worldwide
                </h1>
                <h3 className="mainsubHeading">Global Presence, Local Expertise</h3>
              </div>

              <div className="countrySection">
                {[
                  {
                    img: india,
                    title: 'India (HQ)',
                    address: 'SCO 30, First Floor, VIP Road, Zirakpur, PB (India)',
                  },
                  {
                    img: uk,
                    title: 'United Kingdom',
                    address: 'Sheffield City Centre, Sheffield, S1 1AA',
                  },
                  {
                    img: usa,
                    title: 'United States',
                    address: 'Austin, Texas, United States, 78748',
                  },
                ].map((loc, i) => (
                  <div
                    key={i}
                    className={`coutnactusByCountry ${
                      i === 1 ? 'bordeerTopAndBottom' : ''
                    }`}
                  >
                    <span className="ImagByCountry">
                      <img src={loc.img} alt="" />
                    </span>
                    <div className="headingByCountry">
                      <span className="heading">{loc.title}</span>
                      <span className="subHeading">{loc.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="rightSide">
              <h1 className="mainsubHeading">
                Reach Out & Let's Build Something Exceptional Together
              </h1>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

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

        <div className='black-background section-padding no-top-padding sixMounthCustome'> <Container> 
            <Row className='SixmounthMain'> 
                <Col>
                 <div className='SixmounthDiv'>
                     <div className='sixMounthDivContent'> 
                        <div>
                             <h1 className='heading_main sixMounthDivHeading'>See Your Business 6 Months From Now</h1> 
                             <h3 className='subHeading'>Free Future-State Analysis</h3> 
                        </div> 
                            <div className='regular'>We'll show you exactly where you could be with the right strategy. No pitch, just insights you can act on today.
                        </div> 
                        <button className='btn-gradient-blue'>What Sets Us Apart 
                            <img src={right} alt="" />
                        </button> 
                        </div> 
                        <div className='ContactGif2Container'> 
                            <img className='contactGif2' src={contactGif} alt="" /> 
                        </div> 
                    </div> 
                    </Col> 
                </Row> 
            </Container> 
        </div>
  </>
);

export default ContactUs;
