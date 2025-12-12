import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import OwlCarousel from "react-owl-carousel";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Award
import AwardsSlider from "../../components/AwardsSlider";

// partners section
import Partners from "../../components/Partners";

// why choose section
import WhyChoose from "../../components/WhyChoose";

const homeBanner = `${process.env.REACT_APP_API_URL}/assests/images/home/home-banner.webp`;

// services images
const aiml = `${process.env.REACT_APP_API_URL}/assests/images/home/service-ai-ml.svg`;
const mobileApp = `${process.env.REACT_APP_API_URL}/assests/images/home/Mobile-app.svg`;
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/home/Software-Development.svg`;
const digitalTransformation = `${process.env.REACT_APP_API_URL}/assests/images/home/Digital-Transformation.svg`;
const dataScience = `${process.env.REACT_APP_API_URL}/assests/images/home/Data-Science-Analytics.svg`;
const cloudServices = `${process.env.REACT_APP_API_URL}/assests/images/home/Cloud-Services.svg`;
const blockChain = `${process.env.REACT_APP_API_URL}/assests/images/home/Blockchain-Services.svg`;
const ideationDesign = `${process.env.REACT_APP_API_URL}/assests/images/home/ideation-design.svg`;

// industries images
const healthCare = `${process.env.REACT_APP_API_URL}/assests/images/home/health-care.png`;
const finance = `${process.env.REACT_APP_API_URL}/assests/images/home/finance.png`;
const restaurant = `${process.env.REACT_APP_API_URL}/assests/images/home/restaurant.png`;
const ecommerce = `${process.env.REACT_APP_API_URL}/assests/images/home/ecommerce-indus.svg`;
const realEstate = `${process.env.REACT_APP_API_URL}/assests/images/home/real-estate.png`;
const banking = `${process.env.REACT_APP_API_URL}/assests/images/home/banking.png`;
const travel = `${process.env.REACT_APP_API_URL}/assests/images/home/travel.png`;
const entertainment = `${process.env.REACT_APP_API_URL}/assests/images/home/entertainment.png`;
const onDemand = `${process.env.REACT_APP_API_URL}/assests/images/home/on-demand-indus.svg`;
const socialMedia = `${process.env.REACT_APP_API_URL}/assests/images/home/social-networking-indus.svg`;
const generativeAI = `${process.env.REACT_APP_API_URL}/assests/images/home/artificial-intelligence.png`;
const edtech = `${process.env.REACT_APP_API_URL}/assests/images/home/education-indus.svg`;

// Partnership images
const awsLogo = `${process.env.REACT_APP_API_URL}/assests/images/home/aws-partner.svg`;
const mongoDB = `${process.env.REACT_APP_API_URL}/assests/images/home/mongodb-partner.svg`;
const googleCloud = `${process.env.REACT_APP_API_URL}/assests/images/home/google-cloud-partner.svg`;
const cloudinary = `${process.env.REACT_APP_API_URL}/assests/images/home/cloudinary-partner.svg`;

// Testimonial images
const danKurth = `${process.env.REACT_APP_API_URL}/assests/images/home/dan-kurth.png`;
const josh = `${process.env.REACT_APP_API_URL}/assests/images/home/josh-testimonial.png`;
const geema = `${process.env.REACT_APP_API_URL}/assests/images/home/geema-testimonial.png`;
const ericBakey = `${process.env.REACT_APP_API_URL}/assests/images/home/eric-bakey.png`;
const paulAzzurro = `${process.env.REACT_APP_API_URL}/assests/images/home/Paul-Azzurro.png`;
const kevinTang = `${process.env.REACT_APP_API_URL}/assests/images/home/kevin-tang.png`;
const martyJames = `${process.env.REACT_APP_API_URL}/assests/images/home/Marty-James.png`;
const robertTa = `${process.env.REACT_APP_API_URL}/assests/images/home/Robert-Ta.png`;

// Home video
const homeVideo = `${process.env.REACT_APP_API_URL}/assests/home-video.mp4`;

function HomeOld() {

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "IOSAndWeb Technologies",
        "image": "https://iosandweb.net/static/media/IAW-black-logo.c17961e0b493c00d409f.png",
        "@id": "",
        "url": "https://iosandweb.net/",
        "telephone": "099158 41204",
        "priceRange": "$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "SCO No. 30, First Floor, VIP Shopping Centre",
            "addressLocality": "Zirakpur",
            "postalCode": "140603",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.638054,
            "longitude": 76.8156075
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
        }
    };

    const organisationalSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IOSAndWeb Technologies",
        "url": "https://iosandweb.net/",
        "logo": "https://iosandweb.net/static/media/IAW-black-logo.c17961e0b493c00d409f.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/iosandwebtechnologies/",
            "https://www.instagram.com/iosandwebtechnologies/",
            "https://twitter.com/Iosandwebtech",
            "https://www.linkedin.com/company/iosandweb-technologies"
        ]
    }


    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does IOSAndWeb provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IOSAndWeb offers digital marketing, web development, mobile app development, SEO, and PPC services."
                }
            },
            {
                "@type": "Question",
                "name": "Where is IOSAndWeb located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IOSAndWeb is located in Zirakpur, Punjab, India."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact IOSAndWeb?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact them via their website, email, or phone at +91-9054305995."
                }
            }
        ]
    }


    return (
        <>
            <SEO
                title={"IosAndWeb Technologies | Expert App, Web Development & Marketing Services"}
                description={"Transform your business with IosAndWeb Technologies— experts in mobile apps, web solutions, and digital marketing tailored to your needs. Get started today!"}
                name={"IosAndWeb Technologies"}
                keywords={"software development, mobile app development, web development, blockchain services, custom software solutions, digital transformation, POC & ICO development, PPC services, generative AI, business innovation, tech solutions, app design, cloud services, eCommerce development, real estate software, healthcare apps, fintech solutions, mobile app design, software integration, IT services, digital marketing, mobile app solutions"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
                organisationalSchema={organisationalSchema}
                faqSchema={faqSchema}
            />

            {/* Banner */}
            <div className="home-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="intro-content">
                                <h1 className="banner-heading">Welcome to <span>IosAndWeb Technologies</span> <br /> Where Innovation Collaborates With Technology </h1>
                                <p className="banner-text">Your partner in Custom Software Development Solutions</p>
                                <a href="/contact-us" className="consult-expert-btn">Let's Collaborate <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                            <video className="intro_video" poster={homeBanner} autoPlay={true} muted={true} loop={true}>
                                <source src={homeVideo} type="video/mp4"></source>
                            </video>
                            <div className="home-banner-overlay"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services panel */}
            <div className="services-panel section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt">
                                <h2>
                                    We specialize in crafting software solutions tailored to your unique business needs. With our expertise, innovation and commitment to excellence, we empower businesses to thrive in today's competitive digital landscape.
                                </h2>
                            </div>
                            <div className="btn-section">
                                <a href="/services" className="btn btn-blue-border">Explore our Services <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>

                            <div className="services-cards">

                                <div className="service-card">
                                    <a href="/custom-software-development-company" className="bg-orange">
                                        <div className="service-icon">
                                            <img src={softwareDevelopment} className="service-img" alt="Software" />
                                        </div>
                                        <p className="service-text">Software<br />Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/mobile-app-development-services" className="bg-purple">
                                        <div className="service-icon">
                                            <img src={mobileApp} className="service-img" alt="Mobile App" />
                                        </div>
                                        <p className="service-text">Mobile App<br />Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/web-development-services" className="bg-blue">
                                        <div className="service-icon">
                                            <img src={digitalTransformation} className="service-img" alt="Web" />
                                        </div>
                                        <p className="service-text">Web<br />Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="https://www.blockchain77.com/services/" target="_blank" rel="noreferrer" className="bg-red">
                                        <div className="service-icon">
                                            <img src={aiml} className="service-img" alt="Development POC" />
                                        </div>
                                        <p className="service-text">Development of <br />POC & ICO</p>
                                    </a>
                                </div>

                                <div className="service-card">
                                    <a href="/digital-marketing-services" className="bg-green">
                                        <div className="service-icon">
                                            <img src={dataScience} className="service-img" alt="Digital" />
                                        </div>
                                        <p className="service-text">Digital <br />Transformation</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/ppc-services" className="bg-gray">
                                        <div className="service-icon">
                                            <img src={cloudServices} className="service-img" alt="PPC" />
                                        </div>
                                        <p className="service-text">Pay Per Click <br />Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="https://www.blockchain77.com/services/" target="_blank" rel="noreferrer" className="bg-pink">
                                        <div className="service-icon">
                                            <img src={blockChain} className="service-img" alt="Blockchain" />
                                        </div>
                                        <p className="service-text">Blockchain<br />Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/web-designing-services" className="bg-yellow">
                                        <div className="service-icon">
                                            <img src={ideationDesign} className="service-img" alt="Ideation and Design" />
                                        </div>
                                        <p className="service-text">Ideation and <br />Design Strategy</p>
                                    </a>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries panel */}
            <div className="industries-panel section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center">
                                <h3>We Cater to a Wide Variety of <br />Industry Demands
                                </h3>
                            </div>
                            <div className="grid_colm_panel">
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/ecommerce-app-development">
                                        <figure>
                                            <img src={ecommerce} alt="Commerce" />
                                        </figure>
                                        <div className="grid_colm_head">eCommerce</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/real-estate-app-development">
                                        <figure>
                                            <img src={realEstate} alt="Real Est" />
                                        </figure>
                                        <div className="grid_colm_head">Real Estate</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/generative-ai-development">
                                        <figure>
                                            <img src={generativeAI} alt="AI" />
                                        </figure>
                                        <div className="grid_colm_head">Generative AI</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/healthcare-software-development">
                                        <figure>
                                            <img src={healthCare} alt="Health" />
                                        </figure>
                                        <div className="grid_colm_head">Healthcare</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={finance} alt="Money" />
                                        </figure>
                                        <div className="grid_colm_head">Finance</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={restaurant} alt="Rest" />
                                        </figure>
                                        <div className="grid_colm_head">Restaurant</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={banking} alt="Bank" />
                                        </figure>
                                        <div className="grid_colm_head">Banking</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={travel} alt="Tour" />
                                        </figure>
                                        <div className="grid_colm_head">Travel</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={entertainment} alt="Entertain" />
                                        </figure>
                                        <div className="grid_colm_head">Entertainment</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={onDemand} alt="Demand" />
                                        </figure>
                                        <div className="grid_colm_head">On-Demand</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={socialMedia} alt="Social" />
                                        </figure>
                                        <div className="grid_colm_head">Social Media</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a className="grid_colm_item_link" href="/">
                                        <figure>
                                            <img src={edtech} alt="Study" />
                                        </figure>
                                        <div className="grid_colm_head">Education</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Business partners*/}
            <Partners />

            {/* Testimonial section */}
            <div className="testimonial-panel section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center max-width-70 mx-auto">
                                <h3>You've Heard Enough From the Horse's Mouth Curious About What Our Clients Have to Say?</h3>
                            </div>
                            <div className="leadsubtxt text-center max-width-70 mx-auto">
                                We are a software and mobile application development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its clients.
                            </div>
                        </Col>
                    </Row>
                </Container>

                <OwlCarousel className="owl-theme client_says" loop autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true} margin={80} nav={true} dots={false} items={1} responsive={
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
                            stagePadding: 200
                        },
                        '1200': {
                            items: 1,
                            stagePadding: 250
                        },
                        '1400': {
                            items: 1,
                            stagePadding: 300
                        },
                        '1600': {
                            items: 1,
                            stagePadding: 350
                        },
                        '1800': {
                            items: 1,
                            stagePadding: 400
                        }
                    }
                }>
                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">I have tried several different website developers for our Legacy Alpha site and the service we received from losAndWeb Technology was more specific, accurate and timely than any we have gotten from other service. If you are serious about getting your website done the way you want it, in a direct and timely way, there is no better service available that I have found. I will be recommending him to my business clients.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={danKurth} alt="Dan Kurth" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Dan Kurth</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">losAndWeb Technologies is well versed and extremely professional. They are committed to excellence. The company is well spoken, eager to please and super responsive. First class! Highly recommended.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={josh} alt="Josh" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Josh</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Thanks to IosAndWeb team for Swiss Swaps. You guys managed a lot of functions that I thought weren't quite possible. The best thing I liked is that you guys never stopped until I was satisfied with the product.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={geema} alt="Geema" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Geema</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Very Happy. Utkarsh also circled back to ensure I was happy with my website and went above and beyond to ensure I knew how to use it. I'm not tech-savvy that's why I hired him. He more than understood that. Even though he was in another country, he ensured he communicated with me quickly and by 7am EST I always had a response to my questions. His design is unique and user-friendly. Absolutely recommended.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={ericBakey} alt="Eric Bakey" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Eric Bakey</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Hi Finally I found a web designer who has created me the coolest designed chess site ever love it (chessondemand.com). I have had several developers throughout the years some good most just hold you hostages and never seem to finish what they started. Utkarsh and his team have exceeded my expectations great service honest affordable pricing and their skill level with web design and seo is top notch. I highly recommend them they are the real deal. Thank you</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={paulAzzurro} alt="Paul Azzurro" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Paul Azzurro</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">He was a pleasure to work with! He was accommodating to all changes along the way and did a great job. Will work with him again.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={kevinTang} alt="Kevin Tang" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Kevin Tang</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Amazing experience! The team genuinely cares about delivering results and the way of reports like every single link you can check where they promote our website. I have been working with the losandweb team for 1.8 year now. I think my search for SEO is over and I can assure my further work with Utkarsh and his team. Satisfied with the results and professional behavior. I will recommend losandweb team.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={martyJames} alt="Marty James" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Marty James</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Yea Good experience. No complains, job done on time. This is by far the best web development team I hired. Thank you for your attitude and commitment.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={robertTa} alt="Robert Ta." />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Robert Ta.</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>

            {/* why choose section */}
            <WhyChoose />

            {/* Partnership section */}
            <div className="partnership-panel section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="leadtxt">
                                <h3>Our Strategic Partners Include</h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="card_grid_panel">
                                <div className="card_logo">
                                    <img src={awsLogo} alt="aws" />
                                </div>
                                <div className="card_logo">
                                    <img src={mongoDB} alt="Mongo DB" />
                                </div>
                                <div className="card_logo">
                                    <img src={googleCloud} alt="Google Cloud" />
                                </div>
                                <div className="card_logo">
                                    <img src={cloudinary} alt="Cloudinary" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Award Panel */}
            <AwardsSlider />

            {/* contact us home */}
            <div className="home-contact-us section-padding text-white text-center">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt max-width-70 m-auto">
                                <h4>Let IAW Technologies be your trusted partner in custom software development. </h4>
                                <h4>Whether you're a startup looking to disrupt the market or an established enterprise seeking to innovate, we have just the solutions you need to succeed!</h4>

                                <div className="home-contact-us-btn mt-5">
                                    <a href="/contact-us" className="btn btn-white-border">Contact Us <FontAwesomeIcon icon={faChevronRight} /></a>
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
                                        <Accordion.Header>What is custom software development? </Accordion.Header>
                                        <Accordion.Body>
                                            <p><a href="/custom-software-development-company">Custom software development</a> is the process of creating software specifically designed to meet the unique needs of your business. Unlike off-the-shelf software, custom software is built from the ground up to address your specific workflows, challenges, and goals.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Do you offer ongoing maintenance and support?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes, as a custom software development company we offer ongoing maintenance and support plans to ensure the smooth operation of your software and address any future needs.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How do I know if custom software is right for me?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>  If you have unique business needs that are not met by off-the-shelf software, or if you are looking to improve efficiency, gain a competitive edge, or integrate with existing systems, then custom software development might be a good fit for you. </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>

                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>How do you ensure the security and quality of the software you develop?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We prioritize security and quality from the start. We sign NDAs to protect your confidentiality, adhere to industry security standards (like GDPR), and implement rigorous testing to deliver exceptional, secure software.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What services does a mobile application development company offer?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>At IAW Technologies, we're a team of passionate mobile app developers specializing in bringing your ideas to life. We offer a full suite of custom software development services, including:</p>
                                            <ul>
                                                <li>Native App and Software Development: Build best-in-class apps for iOS and Android, optimized for each platform's unique features and user experience.</li>
                                                <li>Cross-Platform App Development: Reach a wider audience with cost-effective solutions using frameworks like Flutter and React Native.</li>
                                                <li>Web App Development: Extend your digital reach with web applications that seamlessly complement your mobile strategy.</li>
                                            </ul>
                                            <p>Our commitment goes beyond just coding. We take a client-centric approach, partnering with you every step of the way. From validating your initial concept to post-launch support, we ensure a smooth and successful journey and we also offer blockchain development services.</p>
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

export default HomeOld;