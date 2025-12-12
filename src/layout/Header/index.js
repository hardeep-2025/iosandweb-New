import React, { useEffect, useState } from "react";
import './style.css';
import {Container} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";

const logo = `${process.env.REACT_APP_API_URL}/assests/images/IAW-logo-white.png`;
// const logoBlack = `${process.env.REACT_APP_API_URL}/assests/images/IAW-black-logo.png`;

// service menu
const mobileApp = `${process.env.REACT_APP_API_URL}/assests/images/home/Mobile-app.svg`;
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/home/Software-Development.svg`;
const digitalTransformation = `${process.env.REACT_APP_API_URL}/assests/images/home/Digital-Transformation.svg`;
const dataScience = `${process.env.REACT_APP_API_URL}/assests/images/home/Data-Science-Analytics.svg`;
const blockChain = `${process.env.REACT_APP_API_URL}/assests/images/home/Blockchain-Services.svg`;
const ideationDesign = `${process.env.REACT_APP_API_URL}/assests/images/home/ideation-design.svg`;

// industries menu
const eCommerceIcon = `${process.env.REACT_APP_API_URL}/assests/images/eCommerce.png`;
const realEstateIcon = `${process.env.REACT_APP_API_URL}/assests/images/real-estate.png`;
const generativeAI = `${process.env.REACT_APP_API_URL}/assests/images/artificial-intelligence.png`;
const healthcareIcon = `${process.env.REACT_APP_API_URL}/assests/images/health-care.png`;

// about menu
const aboutIcon = `${process.env.REACT_APP_API_URL}/assests/images/about-us.png`;
const teamIcon = `${process.env.REACT_APP_API_URL}/assests/images/our-team-icon.png`;
const careerIcon = `${process.env.REACT_APP_API_URL}/assests/images/career-icon.png`;
const howWorkIcon = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work.png`;

// Award images
const goodFirmLogo = `${process.env.REACT_APP_API_URL}/assests/images/awards/good-firms-logo.webp`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/images/awards/appfutura.webp`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/images/awards/itfirm.webp`;
const topDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/awards/top-development.webp`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/images/awards/upwork.webp`;

// Portfolio images
const portfolioIcon = `${process.env.REACT_APP_API_URL}/assests/images/portfolio.png`;
const maprouteIcon = `${process.env.REACT_APP_API_URL}/assests/images/map-route.png`;
const aiIcon = `${process.env.REACT_APP_API_URL}/assests/images/chat-bot.png`;
const xrpIcon = `${process.env.REACT_APP_API_URL}/assests/images/xrp.png`;
const stakeIcon = `${process.env.REACT_APP_API_URL}/assests/images/staking.png`;
const chatbotIcon = `${process.env.REACT_APP_API_URL}/assests/images/chatbot.png`;
const shoesIcon = `${process.env.REACT_APP_API_URL}/assests/images/shoes.png`;
const spaIcon = `${process.env.REACT_APP_API_URL}/assests/images/spa.png`;
const leafIcon = `${process.env.REACT_APP_API_URL}/assests/images/leaf.png`;
const careplanIcon = `${process.env.REACT_APP_API_URL}/assests/images/careplan.png`;
const arabicIcon = `${process.env.REACT_APP_API_URL}/assests/images/arabic.png`;
const onmenIcon = `${process.env.REACT_APP_API_URL}/assests/images/onmen.png`;
const tiaraIcon = `${process.env.REACT_APP_API_URL}/assests/images/lotus.png`;
const signIcon = `${process.env.REACT_APP_API_URL}/assests/images/sign-contract.png`;
const carIcon = `${process.env.REACT_APP_API_URL}/assests/images/car-repair.png`;
const buildingsIcon = `${process.env.REACT_APP_API_URL}/assests/images/buildings.png`;
const procedureIcon = `${process.env.REACT_APP_API_URL}/assests/images/procedure.png`;
const healthIcon = `${process.env.REACT_APP_API_URL}/assests/images/heartbeat.png`;
const groceryIcon = `${process.env.REACT_APP_API_URL}/assests/images/grocery.png`;
const hairIcon = `${process.env.REACT_APP_API_URL}/assests/images/hair.png`;
const beautyIcon = `${process.env.REACT_APP_API_URL}/assests/images/beauty.png`;
const massageIcon = `${process.env.REACT_APP_API_URL}/assests/images/massage.png`;

// Services Menu
const servicesMenu = [
  {
    title: "Software Development",
    url: "/custom-software-development-company",
    image: softwareDevelopment,
    class: "bg-red"
  },
  {
    title: "Web Development",
    url: "/web-development-services",
    image: digitalTransformation,
    class: "bg-purple"
  },
  {
    title: "Mobile App Development",
    url: "/mobile-app-development-services",
    image: mobileApp,
    class: "bg-orange"
  },
  {
    title: "Blockchain Development",
    url: "https://www.blockchain77.com/services/",
    image: blockChain,
    blank: true,
    class: "bg-blue"
  },
  {
    title: "Web / Graphic Design",
    url: "/web-designing-services",
    image: ideationDesign,
    class: "bg-green"
  },
  {
    title: "Digital Marketing",
    url: "/digital-marketing-services",
    image: dataScience,
    class: "bg-pink"
  }
]

// Industries Menu
const industriesMenu = [
  {
    title: "eCommerce",
    url: "/ecommerce-app-development",
    image: eCommerceIcon,
    class: "bg-pink"
  },
  {
    title: "Real Estate",
    url: "/real-estate-app-development",
    image: realEstateIcon,
    class: "bg-green"
  },
  {
    title: "Generative AI",
    url: "/generative-ai-development",
    image: generativeAI,
    class: "bg-orange"
  },
  {
    title: "Healthcare",
    url: "/healthcare-software-development",
    image: healthcareIcon,
    class: "bg-blue"
  }
]

// Company Menu
const companyMenu = [
  {
    title: "About Us",
    url: "/about-us",
    image: aboutIcon,
    class: "bg-pink"
  },
  {
    title: "IAW Team",
    url: "/iaw-team",
    image: teamIcon,
    class: "bg-green"
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    image: portfolioIcon,
    class: "bg-purple"
  },
  {
    title: "Career",
    url: "/careers",
    image: careerIcon,
    class: "bg-orange"
  },
  {
    title: "How We Work",
    url: "/how-we-work",
    image: howWorkIcon,
    class: "bg-blue"
  }
]

// Portfolio Live Menu
const portfolioMenu = [
  {
    title: "Obgyn",
    url: "https://obgyn.com/",
    image: healthIcon,
    class: "bg-pink",
    tech: "wordpress",
  },
  {
    title: "Hair Restoration",
    url: "https://www.hairrestoration.com/",
    image: hairIcon,
    class: "bg-red",
    tech: "wordpress",
  },
  {
    title: "Blepharoplasty",
    url: "https://blepharoplasty.com/",
    image: beautyIcon,
    class: "bg-green",
    tech: "wordpress",
  },
  {
    title: "Body Massage",
    url: "https://bodymassage.com/",
    image: massageIcon,
    class: "bg-orange",
    tech: "wordpress",
  },
  {
    title: "Whopping Seo",
    url: "https://whoppingseo.com/",
    image: signIcon,
    class: "bg-blue",
    tech: "wordpress",
  },
  {
    title: "Block Chain",
    url: "https://blockchain77.com/",
    image: stakeIcon,
    class: "bg-purple",
    tech: "wordpress",
  },
  {
    title: "Silver Street London",
    url: "http://104.156.231.22/silverstreetlondon",
    image: shoesIcon,
    class: "bg-purple",
    tech: "magento",
  },
  {
    title: "Fresh Organic Grocery",
    url: "http://freshorganicgrocery.com/",
    image: groceryIcon,
    class: "bg-purple",
    tech: "React JS & Node JS",
  },
  {
    title: "Ship From Germany",
    url: "https://shipfromgermany.com/",
    image: procedureIcon,
    class: "bg-pink",
    tech: "wordpress",
  },
  {
    title: "SEO Rockers",
    url: "https://seorockers.com/",
    image: signIcon,
    class: "bg-red",
    tech: "PHP",
  },
  {
    title: "Ananta Aspire zirakpur",
    url: "https://anantaaspirezirakpur.co/",
    image: buildingsIcon,
    class: "bg-green",
    tech: "React JS",
  },
  {
    title: "Vamana Residences",
    url: "https://vamanaresidences.com/",
    image: buildingsIcon,
    class: "bg-orange",
    tech: "React JS",
  },
  {
    title: "Ananta Aspire",
    url: "https://anantaaspire.co/",
    image: buildingsIcon,
    class: "bg-blue",
    tech: "React JS",
  },
  {
    title: "Appreciant Realty",
    url: "https://appreciantrealty.com/",
    image: buildingsIcon,
    class: "bg-purple",
    tech: "React JS",
  },
  {
    title: "Printer Not Working",
    url: "https://printernotworking.com/",
    image: signIcon,
    class: "bg-pink",
    tech: "Wordpress",
  },
  // {
  //   title: "Windbooster",
  //   url: "https://iosandweb.net/windbooster/",
  //   image: carIcon,
  //   class: "bg-red"
  // },
  // {
  //   title: "Danube Properties",
  //   url: "https://iosandweb.net/danubeproperties/",
  //   image: buildingsIcon,
  //   class: "bg-green"
  // },
  // {
  //   title: "Simulacrum",
  //   url: "https://iosandweb.net/simulacrum/",
  //   image: procedureIcon,
  //   class: "bg-orange"
  // },
  // {
  //   title: "Surgi Health",
  //   url: "https://iosandweb.com/surgi-health/",
  //   image: healthIcon,
  //   class: "bg-blue"
  // },
  
]

// Portfolio Staging Menu
const portfolioStagingMenu = [
  {
    title: "Map Route",
    url: "https://iosandweb.net/maproute/",
    image: maprouteIcon,
    class: "bg-pink",
    tech: "React JS",
  },
  {
    title: "Chatbot",
    url: "https://iosandweb.net/chatbot/",
    image: chatbotIcon,
    class: "bg-red",
    tech: "Node JS",
  },
  {
    title: "AI Translator",
    url: "https://iosandweb.net/ai/",
    image: aiIcon,
    class: "bg-green",
    tech: "React JS",
  },
  {
    title: "XRP Trade",
    url: "https://iosandweb.com/markets/",
    image: xrpIcon,
    class: "bg-orange",
    tech: "React JS",
  },
  {
    title: "Staking",
    url: "https://iosandweb.net/staking/",
    image: stakeIcon,
    class: "bg-blue",
    tech: "React JS",
  },
  {
    title: "Physicians",
    url: "https://physicians.iosandweb.net/",
    image: healthcareIcon,
    class: "bg-purple",
    tech: "Wordpress",
  },
  {
    title: "The Ten World",
    url: "https://thetenworld.iosandweb.net/",
    image: spaIcon,
    class: "bg-pink",
    tech: "Wordpress",
  },
  {
    title: "The Sprout",
    url: "http://sprout.iosandweb.net/",
    image: leafIcon,
    class: "bg-red",
    tech: "Wordpress",
  },
  {
    title: "Careplans",
    url: "https://careplans.iosandweb.net/",
    image: careplanIcon,
    class: "bg-green",
    tech: "Wordpress",
  },
  {
    title: "Imfreenow",
    url: "https://imfreenow.iosandweb.net/",
    image: arabicIcon,
    class: "bg-orange",
    tech: "Wordpress",
  },
  {
    title: "Onmen",
    url: "https://onmen.iosandweb.net/",
    image: onmenIcon,
    class: "bg-blue",
    tech: "Wordpress",
  },
  {
    title: "Tiara Real Estate",
    url: "https://tiara.iosandweb.com/",
    image: tiaraIcon,
    class: "bg-purple",
    tech: "React JS",
  },
  {
    title: "RDY Signs",
    url: "https://iosandweb.net/rdysigns",
    image: signIcon,
    class: "bg-pink",
    tech: "Wordpress",
  },
  {
    title: "Windbooster",
    url: "https://iosandweb.net/windbooster/",
    image: carIcon,
    class: "bg-red",
    tech: "Wordpress",
  },
  {
    title: "Danube Properties",
    url: "https://iosandweb.net/danubeproperties/",
    image: buildingsIcon,
    class: "bg-green",
    tech: "React JS",
  },
  {
    title: "Simulacrum",
    url: "https://iosandweb.net/simulacrum/",
    image: procedureIcon,
    class: "bg-orange",
    tech: "React JS",
  },
  {
    title: "Surgi Health",
    url: "https://surgi.iosandweb.com/",
    image: healthIcon,
    class: "bg-blue",
    tech: "Perch Runway",
  },
  {
    title: "Buy Token LLC",
    url: "http://buytokenllc.iosandweb.net/",
    image: stakeIcon,
    class: "bg-purple",
    tech: "Wordpress",
  },
  {
    title: "SRGN",
    url: "https://srgn-clinic.webflow.io/",
    image: careplanIcon,
    class: "bg-red",
    tech: "Webflow",
  },
  {
    title: "myGermany",
    url: "http://104.238.180.124/mygermany/",
    image: procedureIcon,
    class: "bg-green",
    tech: "Wordpress",
  },
]

function Header() {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");
  const [image, setImage] = useState(logo);
  const [fixed, setFixed] = useState("sticky-top");
  const [headerbg, setHeaderbg] = useState("white text-white");
  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const listenScrollEvent = () => {
    if (locationValue[1] === "") {
      if (window.scrollY > 50) {
        setImage(logo);
        setHeaderbg("white text-white border-bottom");
      } else {
        setImage(logo);
        setHeaderbg("transparent text-white");
        handleResize();
      }
    } else {
      setHeaderbg("white text-white border-bottom");
    }
  };

  const changeheaderclass = () => {
    if (locationValue[1] === "") {
      setFixed("fixed-top text-white");
      setHeaderbg("transparent text-white");
      setImage(logo);
      handleResize();
    } else {
      setFixed("sticky-top text-white");
      setHeaderbg("white text-white border-bottom");
      setImage(logo);
    }
  }
  const handleResize = () => {
    if(locationValue[1] === ""){
      if (window.innerWidth <= 991) {
        setFixed("sticky-top text-white");
        setHeaderbg("white text-white border-bottom");
        setImage(logo);
      } else {
        setFixed("fixed-top text-white");
        setHeaderbg("transparent text-white");
        setImage(logo);
      }
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    changeheaderclass();
    window.addEventListener("resize", handleResize)
    // eslint-disable-next-line
  }, []);
  

  return (
    <Navbar collapseOnSelect expand="lg" className={`header ${fixed} ${headerbg}`}>
      <Container className="header-container">
        <Navbar.Brand href="/">
          <img src={image} alt="IosAndWeb logo" className="responsive logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} className="bars-icon" />
          <FontAwesomeIcon icon={faClose} className="close-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="container">
            <Dropdown 
              as={NavItem} 
              show={show}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              onToggle={() => setShow(!show)}
            >
              <Dropdown.Toggle as={NavLink}>Services</Dropdown.Toggle>
              <Dropdown.Menu>
                
                <div className="header-submenu-wrap">
                  <div className="header-submenu-left">
                    <ul className="header-submenu-items">
                      {servicesMenu.map((link, i) => (
                        <li className="submenu-item" key={i}>
                          <Dropdown.Item href={link.url} target={link.blank ? "_blank" : "_self"} rel="noreferrer">
                            <div className={`${link.class} submenu-img`}>
                              <img src={link.image} className="service-img" alt={link.title} /> 
                            </div>
                            {link.title}
                            <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                          </Dropdown.Item>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header-submenu-right">
                    <OwlCarousel className="owl-theme header-awards-carousel" loop autoplay={true} autoplayTimeout={1500} nav={false} dots={true} items={1} center={true} >
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
                  </div>
                </div>
                
              </Dropdown.Menu>
            </Dropdown>

            {/* <Nav.Link href="/portfolio" className={locationValue[1] === "portfolio" ? "active" : ""}>Portfolio</Nav.Link> */}

            <Dropdown 
              className="portfolio-dropdown"
              as={NavItem} 
              show={showPortfolio}
              onMouseEnter={() => setShowPortfolio(true)}
              onMouseLeave={() => setShowPortfolio(false)}
              onToggle={() => setShowPortfolio(!showPortfolio)}
            >
              <Dropdown.Toggle as={NavLink}>Portfolio</Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="header-submenu-wrap">
                  <div className="header-submenu-left">
                    <ul className="header-submenu-items">

                      {portfolioMenu.map((link, i) => (
                        <li className="submenu-item" key={i}>
                          <Dropdown.Item href={link.url} target={"_blank"} rel="noreferrer">
                            <div className={`${link.class} submenu-img`}>
                              <img src={link.image} className="service-img" alt={link.title} /> 
                            </div>
                            <p>{link.title} <span>({link.tech})</span></p>
                            <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                          </Dropdown.Item>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown 
              className="portfolio-dropdown"
              as={NavItem} 
              show={showProducts}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
              onToggle={() => setShowProducts(!showProducts)}
            >
              <Dropdown.Toggle as={NavLink}>Products</Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="header-submenu-wrap">
                  <div className="header-submenu-left">
                    <ul className="header-submenu-items">

                      {portfolioStagingMenu.map((link, i) => (
                        <li className="submenu-item" key={i}>
                          <Dropdown.Item href={link.url} target={"_blank"} rel="noreferrer">
                            <div className={`${link.class} submenu-img`}>
                              <img src={link.image} className="service-img" alt={link.title} /> 
                            </div>
                            <p>{link.title} <span>({link.tech})</span></p>
                            <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                          </Dropdown.Item>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown 
              className="less-dropdown"
              as={NavItem} 
              show={showIndustry}
              onMouseEnter={() => setShowIndustry(true)}
              onMouseLeave={() => setShowIndustry(false)}
              onToggle={() => setShowIndustry(!showIndustry)}
            >
              <Dropdown.Toggle as={NavLink}>Industries</Dropdown.Toggle>
              <Dropdown.Menu>
                
                <ul className="header-submenu-items">
                  {industriesMenu.map((link, i) => (
                    <li className="submenu-item" key={i}>
                      <Dropdown.Item href={link.url}>
                        <div className={`${link.class} submenu-img`}>
                          <img src={link.image} className="service-img" alt={link.title} /> 
                        </div>
                        {link.title}
                        <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                      </Dropdown.Item>
                    </li>
                  ))}
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown 
              className="less-dropdown"
              as={NavItem} 
              show={showAbout}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
              onToggle={() => setShowAbout(!showAbout)}
            >
              <Dropdown.Toggle as={NavLink}>Company</Dropdown.Toggle>
              <Dropdown.Menu>
                <ul className="header-submenu-items">
                  {companyMenu.map((link, i) => (
                    <li className="submenu-item" key={i}>
                      <Dropdown.Item href={link.url}>
                        <div className={`${link.class} submenu-img`}>
                          <img src={link.image} className="service-img" alt={link.title} /> 
                        </div>
                        {link.title}
                        <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                      </Dropdown.Item>
                    </li>
                  ))}
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="/blog" className={locationValue[1] === "blog" ? "active" : ""}>Blog</Nav.Link>
            <Nav.Link href="/contact-us" className={locationValue[1] === "contact" ? "btn active" : "btn"}>
              Get In Touch
              <FontAwesomeIcon icon={faAnglesRight} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;