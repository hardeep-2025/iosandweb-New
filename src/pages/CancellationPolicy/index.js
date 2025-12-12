import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SEO from '../../components/SEO';
import { useLocation } from 'react-router-dom';

function CancellationPolicy(){

    const location = useLocation();
    
    return(
        <>
            <SEO
                title={"IosAndWeb's Services Cancellation Policy - Check Now"}
                description={"If any party face issue in completion of project than both party is able to cancel the contracts. Read about our cancellation policy."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="privacy-policy-page section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center pb-4">Cancellation Policy</h2>

                            <p className="paragraph">Iosandweb Technologies makes it a priority to meet and even surpass the requirements set forth by every one of their clients. Nevertheless, it is equally important to write down the specifics so that both you and I are aware of what is occurring, who is responsible for what, when it will take place, and what will occur if something goes wrong. We would never intentionally mislead one of our valued clients who uses our services and pays for them since we do not want them to be let down. We are looking for a situation in which both our customers and we may come out ahead, not only in the present but also in the future. The policy for refunds and cancellations that <b>Iosandweb Technologies</b> adheres to is straightforward and basic. The following is a list of the terms of the policy:</p>

                            <p className="paragraph">
                                <ul>
                                    <li>If you would like to cancel your account, please get in touch with our billing department or your Account Manager. It will no longer be possible for a department to change its mind once it has verified the cancellation.</li>
                                    <li>A request to cancel an order will only be considered if it is submitted within the first 12 hours after placing the order unless work on the project has already begun.</li>
                                    <li>For instance, <b>Iosandweb Technologies</b> will not accept responsibility for any services a third party provides, such as website hosting or web development.</li>
                                </ul>
                            </p>

                            <h3 className="heading5">Refund policy</h3>
                            <p className="paragraph">There is no assurance that you will receive a refund if you decide to cancel your membership with <b>Iosandweb Technologies</b>. If you have made a payment every month, it stands to reason that the current month's performance will affect the payment for the following month. Because of this, our refund policy does not consider criteria such as traffic or ranking. Because of the services provided, Iosandweb Technologies cannot promise that a refund will be issued in the event of a cancellation.</p>

                            <p className="paragraph">In the case of a payment that is paid consistently once per month, it is assumed that a fee will not be made until after an analysis of how well the most recent month has been performed. <b>Iosandweb Technologies</b> will not be held liable for refund claims determined by factors like traffic or rankings, and the company does not provide guarantees. White label services are the only ones supplied for digital marketing and web development everywhere in India. You have the right to a refund following the terms and circumstances outlined above if you are unhappy with the products or services we provide.</p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CancellationPolicy;