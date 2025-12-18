import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const bannerBG = `${process.env.REACT_APP_API_URL}/assests/services/software-development/banner_bg.webp`;
const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/software-development/banner_image.webp`;
const bannerBox = `${process.env.REACT_APP_API_URL}/assests/services/software-development/banner_box.webp`;

const Banner = () => {
    return(
        <div className="software_banner_section section-padding no-bottom-padding">
            <img src={bannerBG} alt="Custom Software Development Services" className="software_bannerbg" />
            <Container>
                <Row>
                    <Col>
                        <div className="software_banner_flexs">
                            <div className="software_banner_cols contents_block">
                                <h1 className="heading_main">Searching for a Reliable Tech Partner?</h1>
                                <p className="paragraph_content">IosAndWeb Tech delivers cutting-edge custom software, AI-driven tools, blockchain security, and digital strategies to propel your business forward.</p>
                                <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Launch Your Future <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                            <div className="software_banner_cols">
                                <div className="software_banner_images">
                                    <img src={bannerImage} alt="Custom Software Development Services" className="software_bannerImage" />
                                    <img src={bannerBox} alt="Custom Software Development Services" className="software_bannerBox" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner