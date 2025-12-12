import React, {useRef, useState} from "react";
import './style.css';
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber} from "react-phone-number-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function JoinOurTeam(){

    const [formerrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState();
    const [formWarning, setFormWarning] = useState();
    const [loading, setLoading] = useState(false);
    const [phoneValue, setPhoneValue] = useState();
    const [file, setFile] = useState(null);
    const fileInputRef = useRef();

    const [values, setValues] = useState({
        yourFirstName: "",
        yourLastName: "",
        emailAddress: "",
        yourLocation: "",
        applyingFor: ""
    });

    const handleChange = (event) => {
        setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
    };

    const validate = () => {
    
        let errors = {};
    
        //first name field
        if (!values.yourFirstName) {
          errors.yourFirstName = "First name is required";
        }

        //last name field
        if (!values.yourLastName) {
            errors.yourLastName = "Last name is required";
        }

        //location field
        if (!values.yourLocation) {
            errors.yourLocation = "Location is required";
        }
    
        //email field
        if (!values.emailAddress) {
          errors.emailAddress = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
          errors.emailAddress = "Email address is invalid";
        }

        //Phone number field
        if (!phoneValue) {
            errors.phoneValue = "Phone number is required";
        } else if (isPossiblePhoneNumber(phoneValue) === false) {
            errors.phoneValue = "Phone number is invalid";
        }

        // Apply for field
        if (!values.applyingFor) {
            errors.applyingFor = "Please select profile to apply";
        }

        // File upload
        if(file === null || file === undefined){
            errors.resume = "Please upload your resume";
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
            yourFirstName: "",
            yourLastName: "",
            emailAddress: "",
            yourLocation: "",
            applyingFor: ""
        });
        setPhoneValue('');
        setFile(null);
        fileInputRef.current.value = null;
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (validate(values)) {

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = async (e) => {
                    
                setLoading(true);

                axios({
                    method: "post",
                    url: `${process.env.REACT_APP_API_URL}/api/join-team-email-api.php`,
                    data: JSON.stringify({
                        yourFirstName: values.yourFirstName,
                        yourLastName: values.yourLastName,
                        emailAddress: values.emailAddress,
                        yourLocation: values.yourLocation,
                        applyingFor: values.applyingFor,
                        phoneValue: phoneValue,
                        resume: reader.result
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
        }
    };

    return (
        <>
            {/* Join Our Team section */}
            <div className="join-our-team-section section-padding">
                <Container>
                    <Row>
                        <Col md={12} lg={8} className="m-auto">
                            <h2 className="heading2 text-center">Join the IosAndWeb Technologies team!</h2>
                            <p className="paragraph text-center">We are a global technology company that offers team members great potential for professional growth. Would you like to become part of our team? Then we look forward to getting to know you personally. We provide a supportive and inclusive environment with some perks.</p>

                            <div className="join-our-team-form">
                                <Form className="joinOurTeamForm" id="joinOurTeamForm" onSubmit={handleSubmit}>
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourFirstName" className="form-group">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" value={values.yourFirstName} name="yourFirstName" onChange={handleChange} />
                                                {formerrors.yourFirstName && (
                                                    <p className="text-danger">{formerrors.yourFirstName}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourLastName" className="form-group">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" value={values.yourLastName} name="yourLastName" onChange={handleChange} />
                                                {formerrors.yourLastName && (
                                                    <p className="text-danger">{formerrors.yourLastName}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="emailAddress" className="form-group">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="text" value={values.emailAddress} name="emailAddress" onChange={handleChange} />
                                                {formerrors.emailAddress && (
                                                    <p className="text-danger">{formerrors.emailAddress}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="phoneValue" className="form-group">
                                                <Form.Label>Phone Number</Form.Label>
                                                <PhoneInput 
                                                international 
                                                id="phoneValue"
                                                name="phoneValue"
                                                defaultCountry="IN" 
                                                value={phoneValue}
                                                onChange={setPhoneValue}
                                                className="form-control" 
                                                />
                                                
                                                {formerrors.phoneValue && (
                                                    <p className="text-danger">{formerrors.phoneValue}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourLocation" className="form-group">
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control type="text" value={values.yourLocation} name="yourLocation" onChange={handleChange} />
                                                {formerrors.yourLocation && (
                                                    <p className="text-danger">{formerrors.yourLocation}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="applyingFor" className="form-group">
                                                <Form.Label>Applying for</Form.Label>
                                                <Form.Control as="select" type="select" value={values.applyingFor} name="applyingFor" onChange={handleChange}>
                                                    <option value="">Select Your Profile</option>
                                                    <option value="PHP Developer (WordPress):- 2 to 6 years">PHP Developer (WordPress):- 2 to 6 years</option>
                                                    <option value="Quality Analyst :- 1 to 3 years">Quality Analyst :- 1 to 3 years</option>
                                                    <option value="UI/UX Designer:- 2 to 5 years">UI/UX Designer:- 2 to 5 years</option>
                                                    <option value="Magento Developer:- 1 to 5 years">Magento Developer:- 1 to 5 years</option>
                                                    <option value="Business Analyst:- 1 to 3 years">Business Analyst:- 1 to 3 years</option>
                                                    <option value="BDM :- 5 to 8 years">BDM :- 5 to 8 years</option>
                                                    <option value="BDE :- 6 months to 2 years">BDE :- 6 months to 2 years</option>
                                                    <option value="Frontend Developer :- 3 to 5 years">Frontend Developer :- 3 to 5 years</option>
                                                    <option value="MEAN Stack Developer :- 3 to 5 years">MEAN Stack Developer :- 3 to 5 years</option>
                                                    <option value="Content Writer :- 2 to 5 years">Content Writer :- 2 to 5 years</option>
                                                </Form.Control>

                                                {formerrors.applyingFor && (
                                                    <p className="text-danger">{formerrors.applyingFor}</p>
                                                )}

                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="form-row">
                                        <Col md={12} className="form-col">
                                            <Form.Group controlId="yourResume" className="form-group">
                                                <Form.Label>Upload your resume</Form.Label>
                                                <Form.Control type="file" name="yourResume" onChange={(e) => setFile(e.target.files[0])} ref={fileInputRef} />
                                                {formerrors.resume && (
                                                    <p className="text-danger">{formerrors.resume}</p>
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

export default JoinOurTeam