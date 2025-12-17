import { Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css";
import SubHeading from "../../../components/SubHeading/SubHeading";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const testimonialBG = `${process.env.REACT_APP_API_URL}/assests/images/home-new/testimonials/testimonials_bg.webp`;
const video1 = `${process.env.REACT_APP_API_URL}/assests/images/home-new/testimonials/Video_Generation_From_User_Feedback.mp4`;
const video2 = `${process.env.REACT_APP_API_URL}/assests/images/home-new/testimonials/Positive_SEO_Service_Review_and_Video.mp4`;
const testimonial1 = `${process.env.REACT_APP_API_URL}/assests/images/home-new/testimonials/testimonial1.webp`;
const testimonial2 = `${process.env.REACT_APP_API_URL}/assests/images/home-new/testimonials/testimonial2.webp`;

const testimonials = [
    {
        name: "Geema",
        content: "“Thanks to IosAndWeb team for Swiss Swaps. You guys managed a lot of functions that I thought weren't quite possible. The best thing I liked is that you guys never stopped until I was satisfied with the product.”",
        video: video1,
        image: testimonial1,
    },
    {
        name: "Marty James",
        content: "“Amazing experience! The team genuinely cares about delivering results and the way of reports like every single link you can check where they promote our website. I have been working with the Iosandweb team for 1.8 year now. I think my search for SEO is over and I can assure my further work with Utkarsh and his team. Satisfied with the results and professional behavior. I will recommend Iosandweb team.”",
        video: video2,
        image: testimonial2,
    },
    {
        name: "Lorem Ipsum",
        content: "“Amazing experience! The team genuinely cares about delivering results and the way of reports like every single link you can check where they promote our website. I have been working with the Iosandweb team for 1.8 year now. I think my search for SEO is over and I can assure my further work with Utkarsh and his team. Satisfied with the results and professional behavior. I will recommend Iosandweb team.”",
        video: video1,
        image: testimonial1,
    }
]

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

const Testimonials = () => {

    const testimonialRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const isMobile = windowWidth < 992;
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const testimonialSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return(
        <div className="testimonials_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="testimonials_section_block">
                            <img src={testimonialBG} alt="Testimonials" className="testimonials_bg" />
                            <div className="testimonials_contents">
                                <div className="testimonials_headings">
                                    <SubHeading text={"Testimonials"} />
                                    <h2 className="heading_main">Don't Just Take Our Word for It—See What Our Clients Say</h2>
                                </div>
                            </div>
                            <Slider 
                                className="testimonials_slider_carousel" 
                                {...testimonialSetting}
                                ref={testimonialRef}
                            >
                                {testimonials.map((item,i) => (
                                    <div className="item" key={i}>
                                        <div className="testimonials_flex">
                                            <div className="testimonials_video">
                                                <img src={item.image} alt={item.name} className="testimonials_image" />
                                                <div className="testimonials_name_div">
                                                    <FontAwesomeIcon icon={faCirclePlay} />
                                                    <span className="testimonials_name">{item.name}</span>
                                                </div>
                                            </div>
                                            <div className="testimonials_content">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials