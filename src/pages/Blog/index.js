import React, { useRef } from "react";
import './style.css';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from 'axios';
import SEO from "../../components/SEO";

import { useLocation } from "react-router-dom";

const blogImage = `${process.env.REACT_APP_API_URL}/assests/images/blog-banner.webp`;
const defaultImage = `${process.env.REACT_APP_API_URL}/assests/images/placeholder-image.webp`;

function Blog(){

    const location = useLocation();
    const blogRef = useRef();

    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [loading, setLoading] = useState(true);
    const n = 12;

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
        blogRef.current.scrollIntoView();
    }

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/api/blog.php`)
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
        .finally(() => {
            setLoading(false);
        })
    }, [page]);

    return(
        <>
            <SEO
                title={"Latest technologies blogs - Learn More"}
                description={"IAW technologies provide latest technologies blogs. Subscribe IAW Tech blogs for more latest updates. Visit now Iosandweb.net."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="blog-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <h1>We Love To Make Websites That Make A Difference</h1>
                                <div className="heading5">Explore Why Choose IosAndWeb Technologies To Transform Your Business Ideas Into Reality</div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={blogImage} className="responsive-img" alt="Portfolio" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* blog list section */}
            
            <div className="blog-page section-padding" ref={blogRef}>
                <Container>
                    <Row className="blogs-list">
                        {
                            loading ?
                            <>
                                <div className="blog_spinner text-center">
                                    <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" />
                                </div>
                            </>
                            : 
                            <>
                                {filterData && filterData.map((item, index) => 
                            
                                    <Col md={6} lg={4} className="blog-col" key={item.id}>
                                        <div className="blog-list-item">
                                            <a key={index} href={"/blog/"+item.url}>
                                                <img 
                                                    src={item.image ? `${process.env.REACT_APP_BLOG_API_URL}/wp-content/uploads/${item.image}` : defaultImage} 
                                                    className="blog-image" 
                                                    alt={item.imagealt ? item.imagealt : item.title} 
                                                />
                                            </a>
                                            <div className="blog-detail">
                                                <p><span className="blog-date">{item.date}</span></p>
                                                <a key={index} href={"/blog/"+item.url}>
                                                    <h4>{item.title}</h4>
                                                </a>
                                                <p className="paragraph">{item.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )}

                                <ReactPaginate
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    activeClassName={"active"}
                                    onPageChange={(event) => handlePageClick(event.selected)}
                                    pageCount={Math.ceil(data.length / n)}
                                    breakLabel="..."
                                    previousLabel={
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    }
                                    nextLabel={
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    }
                                />
                            </>
                        }
                        

                    </Row>
                </Container>
            </div>

        </>
    )
}
export default Blog