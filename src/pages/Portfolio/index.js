import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from 'axios';
import SEO from "../../components/SEO";
import TypeWritter from "../../components/TypeWritter";
import { useLocation } from "react-router-dom";

const portfolioImage = `${process.env.REACT_APP_API_URL}/assests/images/Project-Portfolio.webp`;

function Portfolio(){

    const location = useLocation();

    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 8

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/portfolio.json`)
        .then(res => {
            setData(res.data);
            setFilterData(
                res.data.filter((item, index) => {
                  return (index >= page * n) & (index < (page + 1) * n);
                })
            );
        })
        .catch(() => {
            console.log('Error')
        })
    }, [page]);

    const pageChangeHandle =(event) =>{
        setPage(event.selected)
        // window.scrollTo({
        //     top: document.querySelector("#portfolio_section").offsetTop,
        //     behavior: "smooth",
        // });
    }

    return(
        <>
            <SEO
                title={"Checkout our Web Development and Digital Marketing Portfolio"}
                description={"IosAndWeb Technologies: Visit and review our work of Web Development and Digital Marketing Portfolio. We have huge case to show our work."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="portfolio-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <h1>We Love To Make <TypeWritter text="Websites" delay={300} infinite  /><br/>That Make A Difference</h1>
                                <div className="heading5">Explore Why Choose IosAndWeb Technologies To Transform Your Business Ideas Into Reality</div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={portfolioImage} className="responsive-img" alt="Portfolio" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* portfolio list section */}

            <div className="portfolio-page section-padding" id="portfolio_section">
                <Container>
                    <Row className="portfolio-list">
                        {filterData && filterData.map((item, index) => 
                            <Col md={12} className="portfolio-col" key={item.id}>
                                <div className="portfolio-list-item">
                                    <a href={item.url} rel="noreferrer" target="_blank" className="portfolio-link">
                                        <img src={item.image} alt={item.title} className="portfolio-image responsive-img" />
                                    </a>
                                    <div className="portfolio-detail">
                                        <h2 className="portfolio-title heading2">{item.title}</h2>
                                        <p className="paragraph">{item.description}</p>
                                        <a href={item.url} rel="noreferrer" target="_blank" className="btn btn-white-border portfolio-btn">View Case Study <FontAwesomeIcon icon={faChevronRight} /></a>
                                    </div>
                                </div>
                            </Col>
                        )}

                        <ReactPaginate
                            containerClassName={"pagination"}
                            pageClassName={"page-item"}
                            activeClassName={"active"}
                            onPageChange={pageChangeHandle}
                            pageCount={Math.ceil(data.length / n)}
                            breakLabel="..."
                            previousLabel={
                                <FontAwesomeIcon icon={faChevronLeft} />
                            }
                            nextLabel={
                                <FontAwesomeIcon icon={faChevronRight} />
                            }
                        />

                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Portfolio