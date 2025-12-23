import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO"
import SolutionsSection from "./SolutionsSection/SolutionsSection";
import ExpertiseSection from "./ExpertiseSection/ExpertiseSection";
import WeDesignSection from "./WeDesignSection/WeDesignSection";
import OurMarketingSection from "./OurMarketingSection/OurMarketingSection";
import WhyChoose from "../../Home/WhyChoose/WhyChoose";
import IndustriesWeTransform from "../../../components/IndustriesWeTransform/IndustriesWeTransform";
import UnlockExclusiveSection from "./UnlockExclusiveSection/UnlockExclusiveSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

const ServicesPage = () => {

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Web development services- IAW Technologies"}
                description={"Looking for high-quality web development services for your business? Look no further than IAW Technologies. Contact us Today."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            <ServiceBanner />

            {/* Solutions Section */}
            <SolutionsSection />

            {/* Expertise section */}
            <ExpertiseSection />

            {/* We Design Section */}
            <WeDesignSection />

            {/* Our Marketing */}
            <OurMarketingSection />

            {/* Industries we transform */}
            <IndustriesWeTransform />

            {/* Unlock Exclusive */}
            <UnlockExclusiveSection />

            {/* Why Choose */}
            <WhyChoose />

            {/* Animated Text */}
            <AnimatedText />
        </>
    )
}

export default ServicesPage