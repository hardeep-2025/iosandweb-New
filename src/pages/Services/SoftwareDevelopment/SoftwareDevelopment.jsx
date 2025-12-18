import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO";
import Banner from "./Banner/Banner";

const SoftwareDevelopment = () => {

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Custom Software Development Services | IosAndWeb Technologies"}
                description={"Top Custom Software Development Company offering tailored software solutions. Expert in custom software development services for scalable business growth."}
                keywords={"Custom Software Development Company, Custom software development, Custom software development services, Top custom software developer, Software development custom services"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            <Banner />
        </>
    )
}

export default SoftwareDevelopment