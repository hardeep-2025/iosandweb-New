import React, {useState} from "react";
import './style.css';
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import 'react-phone-number-input/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function BlogDetailsForm(){

    const [formerrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState();
    const [formWarning, setFormWarning] = useState();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        yourName: "",
        emailAddress: "",
        phoneValue: "",
        yourCompany: "",
        message: ""
    });

    const handleChange = (event) => {
        setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
    };

    const validate = () => {
    
        let errors = {};
    
        //Name field
        if (!values.yourName) {
          errors.yourName = "Name is required";
        }

        //location field
        if (!values.yourCompany) {
            errors.yourCompany = "Location is required";
        }
    
        //email field
        if (!values.emailAddress) {
          errors.emailAddress = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
          errors.emailAddress = "Email address is invalid";
        }

        //Phone number field
        if (!values.phoneValue) {
            errors.phoneValue = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(values.phoneValue)) {
            errors.phoneValue = "Phone number is invalid";
        }

        // Apply for field
        if (!values.message) {
            errors.message = "Please select profile to apply";
        }

        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          return true;
        } else {
          return false;
        }
    };

    const resetForm = () => {
        setValues({
            yourName: "",
            emailAddress: "",
            phoneValue: "",
            yourCompany: "",
            message: ""
        });
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (validate(values)) {  
                    
            setLoading(true);

            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/api/project-requirement-form.php`,
                data: JSON.stringify({
                    yourName: values.yourName,
                    emailAddress: values.emailAddress,
                    yourCompany: values.yourCompany,
                    message: values.message,
                    phoneValue: values.phoneValue,
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    setLoading(false);
                    setFormSuccess("Your request was sent successfully");
                    resetForm();
                    setTimeout(() => {
                        setFormSuccess('');
                    }, 5000);
                } else {
                    setLoading(false);
                    setFormWarning("Some error occured");
                    resetForm();
                    setTimeout(() => {
                        setFormWarning('');
                    }, 5000);
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                setLoading(false);
                setFormWarning("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormWarning('');
                }, 5000);
            });
                
        }
    };

    return (
        <>
            {/* Join Our Team section */}
            <div className="blog_details_form_section section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col md={12} lg={9} className="m-auto">
                            <h2 className="heading2 text-center">Share Your Project Requirements with us!</h2>

                            <div className="join-our-team-form blog_details_form">
                                <Form className="blogDetailsForm" id="blogDetailsForm" onSubmit={handleSubmit}>
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourName" className="form-group">
                                                <Form.Control type="text" value={values.yourName} name="yourName" onChange={handleChange} placeholder="Name*" />
                                                {formerrors.yourName && (
                                                    <p className="text-danger">{formerrors.yourName}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="emailAddress" className="form-group">
                                                <Form.Control type="email" value={values.emailAddress} name="emailAddress" onChange={handleChange} placeholder="Email*" />
                                                {formerrors.emailAddress && (
                                                    <p className="text-danger">{formerrors.emailAddress}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="phoneValue" className="form-group">
                                                <Form.Control type="text" value={values.phoneValue} name="phoneValue" onChange={handleChange} placeholder="Phone*" />
                                                
                                                {formerrors.phoneValue && (
                                                    <p className="text-danger">{formerrors.phoneValue}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourCompany" className="form-group">
                                                <Form.Control type="text" value={values.yourCompany} name="yourCompany" onChange={handleChange} placeholder="Company*" />
                                                {formerrors.yourCompany && (
                                                    <p className="text-danger">{formerrors.yourCompany}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="form-row">
                                        <Col md={12} className="form-col">
                                            <Form.Group controlId="message" className="form-group">
                                                <Form.Control as={"textarea"} rows={5} value={values.message} name="message" onChange={handleChange} placeholder="How can i help you?*" />
                                                {formerrors.message && (
                                                    <p className="text-danger">{formerrors.message}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="form-row">
                                        <Col md={12} className="form-col">
                                            <Form.Group className="form-group form-submit-group">
                                                <Button type="submit" className={`form-submit-btn btn btn-blue-border ${loading ? 'disabled' : null }`}> 
                                                    {
                                                        loading ?
                                                            <>
                                                                Sending 
                                                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                            </>
                                                        : 
                                                        <>
                                                            Submit
                                                            <FontAwesomeIcon icon={faChevronRight} /> 
                                                        </>
                                                    }
                                                    
                                                </Button>
                                                <div className="message">{formSuccess ? <p className="text-success">{formSuccess}</p> : null}{formWarning ? <p className="text-danger">{formWarning}</p> : null}</div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                </Form> 
                            </div>
                        </Col>
                    </Row>  
                </Container>
            </div>
        </>
    )
}

export default BlogDetailsForm