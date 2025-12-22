import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import TypeWritter from "../../components/TypeWritter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const notFound = `${process.env.REACT_APP_API_URL}/assests/404-error.webp`;

function NoPage(){
    return(
        <>
            <SEO
                title={"404 Page Not Found - IosAndWeb Technologies"}
                name={"IosAndWeb Technologies"}
            />

            <div className="nopage section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="not-found"><TypeWritter text="Oops!" delay={400} infinite  /></h1>
                            <h2 className="heading2">The Page You Are Looking For Is Not Available.</h2>
                            <div className="heading5">The link you followed may be broken, or the page may have been removed.</div>
                            <div className="apply-btn btn-section">
                                <a href="/" className="btn btn-blue-border">Homepage <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={notFound} className="responsive-img" alt="404 Page Not Found" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NoPage