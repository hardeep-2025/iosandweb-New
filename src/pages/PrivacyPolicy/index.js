import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

function PrivacyPolicy(){

    const location = useLocation();

    return (
        <>
            <SEO
                title={"IosAndWeb Technologies Privacy Policy. Read Our Policies Briefly"}
                description={"We give authorization keep privacy of our clients' information. Check out Iosandweb privacy policy to ensure you safety and privacy."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="privacy-policy-page section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center pb-4">Privacy Policy</h2>
                            <p className="paragraph">Get content marketing services from one of the leading agencies i.e. IosAndWeb Technologies and increase your website traffic from your online marketing platforms. With these services, you can bring users from your other online channels to your website. Other online marketing channels include social media, search engines or maybe email marketing.</p>

                            <p className="paragraph">IosAndWeb Technologies has one of the best content writers who will create compelling content for your website with their ideation and thoughts.They will add value to your brand and develop trust by providing engaging content to your customers/stakeholders. Hire our content marketing services and we include strategy development, content creation, editing, and publishing content on your website.</p>

                            <h3 className="heading5">Our Commitment to Privacy</h3>
                            <p className="paragraph">IosAndWeb respects the importance of your personal information. Our company assures full protection of your privacy and your personal information uploaded online.</p>

                            <h3 className="heading5">The Information We Collect</h3>
                            <p className="paragraph">If you register on IosAndWeb, we will ask your name, address, email id and some other personal information that will be stored and kept private. Further personal information can be asked by us for any survey or promotions. If you want us to send you newsletters or any other kind of electronic product and service, you have to allow us to use your personal details to provide you any kind of information.</p>

                            <h3 className="heading5">Cookies</h3>
                            <p className="paragraph">Sometimes your cookies can be used by us to track information about you. There are some features of our website which can only be used through your cookies. Basically, cookies are some short amount of data which your browser sent from a web server to your computer hardware. We use your cookies to store your account information so that you do not need to re-enter them again and again.</p>

                            <h3 className="heading5">The Way We Use Information</h3>
                            <p className="paragraph">IosAndWeb uses your personal information to keep you informed about products & services that you need, to improve our marketing and promotional activities to analyze the usage of our site. To inform about product offers and to customize our site's content services and layout. We may also ask you for your personal information to know your personal & business interests, this will help us to customize our services for you.</p>

                            <h3 className="heading5">Information Sharing and Disclosure</h3>
                            <p className="paragraph">IosAndWeb will only share or disclose your personal information to others, only if</p>
                            <p className="paragraph">
                                <ul>
                                    <li>Information is required for the product services you requested.</li>
                                    <li>There is any need for information by court orders or legal proceedings.</li>
                                    <li>Your actions violate our site or terms of use agreement.</li>
                                </ul>
                            </p>

                            <h3 className="heading5">Security</h3>
                            <p className="paragraph">IosAndWeb uses reasonable and latest security methods to protect the information from unauthorized access. We maintain the accuracy of data and ensure the right usage of information. You need to ensure that your information doesn't travel through any third party because misuse, in that case, is not in our hands.</p>

                            <h3 className="heading5">How You Can Update, Correct, or Delete Your Information</h3>
                            <p className="paragraph">IosAndWeb provides you the facilities to correct, delete or update your personal information at any time. You have to just send us an email. In case you don't want to receive any message regarding services or products you can send an email to us and our team will process it as fast as possible and necessary changes will be made in the IosAndWeb database.</p>

                            <h3 className="heading5">Third-Party Practices</h3>
                            <p className="paragraph">Our privacy policy may differ from the policies of advertisers or promotional services appears on our site so we request you to read their policies carefully before giving any response.</p>

                            <h3 className="heading5">Changes to Our Policy</h3>
                            <p className="paragraph">IosAndWeb will inform you 24 hours in advance about any changes to be done in the privacy policy of the company. Any information collected before the changes will be kept secure.</p>

                            <h3 className="heading5">Your Consent</h3>
                            <p className="paragraph">By using our site you agree with our terms & conditions of using your information.</p>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PrivacyPolicy