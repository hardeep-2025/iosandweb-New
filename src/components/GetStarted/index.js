import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function GetStarted({title, buttonText, link}){
    return(
        <>
            {/* get started section */}
            <div className="get-started section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={9}>
                            <h3 className="heading2">{title}</h3>
                        </Col>
                        <Col lg={3}>
                            <div className="get-started-btn">
                               <a href={link} className="btn btn-white-border">{buttonText} <FontAwesomeIcon icon={faChevronRight} /></a> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default GetStarted;