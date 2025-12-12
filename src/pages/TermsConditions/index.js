import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SEO from '../../components/SEO';
import { useLocation } from 'react-router-dom';

function TermsConditions(){

    const location = useLocation();

    return (
        <>
            <SEO
                title={"Read IosAndWeb Terms and Conditions - IosAndWeb Technologies"}
                description={"To complete the project on time must or read acknowledge the Iosandweb terms and conditions clearly ,if face any problems with our terms."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="privacy-policy-page section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center pb-4">Terms & Conditions</h2>

                            <h3 className="heading5">Acknowledgment of our terms</h3>
                            <p className="paragraph">To visit our website, view, access, collect, compile, submit any information you are bound to agree to the terms & conditions of service. If you don't want to bound yourself or agree to our terms & conditions then do not visit our website and collect the information. When you acknowledge, accept, and agree to our terms & conditions then there will be a legally binding agreement between you and our website. With your use of our website's information, it will indicate your acceptance of the agreement.</p>

                            <h3 className="heading5">Provision of Services</h3>
                            <p className="paragraph">You acknowledge our terms & conditions and we are not entitled to inform the users before modifying, improving, or discontinuing any of our services. It's our sole discretion and we are not bound to notify you.</p>

                            <h3 className="heading5">Proprietary Rights</h3>
                            <p className="paragraph">You acknowledge that our website may have some confidential information like trademarks. Patents, service marks. These will be protected by intellectual property laws or other treaties. We provide you the authority to use our website content offline for your personal or non-commercial use. You cannot use our content for earning purposes without our written permission.</p>

                            <h3 className="heading5">Submitted Content</h3>
                            <p className="paragraph">When you write content for us that means you are granting irreversibility, globally, license to publish, display, alter, and syndicate your content throughout the world. You have to confirm that you have all the above-required authorities that you will grant us.</p>

                            <h3 className="heading5">Termination of agreement</h3>
                            <p className="paragraph">Until one party terminates the agreement for any reason all the conditions will be applied in eternity. Terms & Conditions will remain unaffected even after the termination of the contract with the user.</p>

                            <h3 className="heading5">Disclaimer of Warranties</h3>
                            <p className="paragraph">You are using our website at your own risk, all the services provided by our company are mentioned on our website. Our website does not provide any guarantee or endorsements.</p>

                            <h3 className="heading5">Limitation of Liability</h3>
                            <p className="paragraph">Our company subsidiaries or affiliates will not be liable directly or indirectly, incidental, exemplary, consequential damage if any, by using our website. Not just this our website will also not be liable for the loss or profit of the business, business interruption, goodwill, and other tangible as well as intangible losses that your business suffers by using our website. Whether these limitations mentioned elsewhere or not, you should be aware of all the possible damages that may occur.</p>

                            <h3 className="heading5">External Content</h3>
                            <p className="paragraph">Our website uses hyperlinks to third-party content, advertising, websites. You agree that our company does not confirm any product or services, resources, and advertisements.</p>

                            <h3 className="heading5">Jurisdiction</h3>
                            <p className="paragraph">You agree to resolve any legal matter that occurs from this agreement of our company will be submitted to the jurisdiction of the court of the country or the territory. If the court finds that any agreement in our terms is invalid then it will be removed but all the other terms will remain to continue and valid.</p>

                            <h3 className="heading5">Entire Agreement</h3>
                            <p className="paragraph">You understand & agree with all the terms & conditions in our agreement between you and our website. After using our services you may enter in other terms & conditions that are affiliated to different services or any third-party content or matter.</p>

                            <h3 className="heading5">Changes to the Terms</h3>
                            <p className="paragraph">Our company modifies terms & conditions periodically according to the requirement without any notice. All the changes will be effective from the date of their posting. If you choose to continue with our website after all the changes then you agree with all the new terms & conditions also.</p>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TermsConditions;