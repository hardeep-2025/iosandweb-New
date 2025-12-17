import "./ContactForm.css";
import { useState } from "react";
import { Button, Form, Spinner} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import 'react-phone-number-input/style.css';
import axios from "axios";

const ContactForm = ({title}) => {
    const [formerrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState();
    const [formWarning, setFormWarning] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        yourName: "",
        lastName: "",
        emailAddress: "",
        yourMessage: ""
    });

    const handleChange = (event) => {
        setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
    };

    const validate = () => {
    
        let errors = {};
    
        //name field
        if (!values.yourName) {
          errors.yourName = "First Name is required";
        }

        if(!values.lastName) {
            errors.lastName = "Last Name is required";
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
        } else if (!/^[6-9]\d{9}$/.test(phoneValue)) {
            errors.phoneValue = "Invalid Phone number";
        }
    
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          return true;
        } else {
          return false;
        }
    };

    const resetForm = () =>{
        setValues({
            yourName: "",
            lastName: "",
            emailAddress: "",
            yourMessage: ""
        });
        setPhoneValue('');
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (validate(values)) {
            setLoading(true);
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/api/contact-email-api.php`,
                data: JSON.stringify({
                        yourName: values.yourName,
                        lastName: values.lastName,
                        emailAddress: values.emailAddress,
                        phoneValue: phoneValue,
                        yourMessage: values.yourMessage
                    }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    setLoading(false);
                    setFormSuccess("Your message was sent successfully");
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

    const phoneNumberChange = (e) => {
        const onlyDigits = e.target.value.replace(/\D/g, "");
        setPhoneValue(onlyDigits);
    };

    return(
        <>
            <div className="footer_contact_form">
                <p className="paragraph_content">{title ? title : "Partner With Experts Who Leverage AI & Tech To Transform Ideas Into Market-Leading Solutions."}</p>
                <Form className="footer_contactForm" id="footer_contactForm" onSubmit={handleSubmit}>

                    <div className="form_rows">
                        <Form.Group controlId="yourName" className="form-group">
                            <Form.Control type="text" placeholder="First Name" value={values.yourName} name="yourName" onChange={handleChange}  />
                            <p className={`text-danger ${formerrors.yourName && "visible"}`}>{formerrors.yourName ? formerrors.yourName : "First Name is required"}</p>
                        </Form.Group>

                        <Form.Group controlId="lastName" className="form-group">
                            <Form.Control type="text" placeholder="Last Name" value={values.lastName} name="lastName" onChange={handleChange}  />
                            <p className={`text-danger ${formerrors.lastName && "visible"}`}>{formerrors.lastName ? formerrors.lastName : "Last Name is required"}</p>
                        </Form.Group>
                    </div>

                    <Form.Group controlId="emailAddress" className="form-group">
                        <Form.Control type="text" placeholder="Email" value={values.emailAddress} name="emailAddress" onChange={handleChange} />
                        <p className={`text-danger ${formerrors.emailAddress && "visible"}`}>{formerrors.emailAddress ? formerrors.emailAddress : "Email is required"}</p>
                    </Form.Group>

                    <Form.Group controlId="phoneValue" className="form-group">
                        <Form.Control type="text" placeholder="Phone Number" value={phoneValue} name="phoneValue" onChange={(e) => phoneNumberChange(e)} maxLength="10" />

                        <p className={`text-danger ${formerrors.phoneValue && "visible"}`}>{formerrors.phoneValue ? formerrors.phoneValue : "Phone Number is required"}</p>
                    </Form.Group>

                    <Form.Group controlId="yourMessage" className="form-group">
                        <Form.Control as="textarea" rows={6} name="yourMessage" placeholder="Message" value={values.yourMessage} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group form-submit-group">
                        <Button type="submit" className={`form-submit-btn ${loading ? 'disabled' : null }`}> 
                        {
                            loading ?
                            <>
                                Sending 
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                            </>
                            : 
                            <>
                                Let's Contact
                                <FontAwesomeIcon icon={faAnglesRight} /> 
                            </>
                        }
                        </Button>
                        <div className="message">{formSuccess ? <p className="text-success">{formSuccess}</p> : null}{formWarning ? <p className="text-danger visible">{formWarning}</p> : null}</div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
export default ContactForm;