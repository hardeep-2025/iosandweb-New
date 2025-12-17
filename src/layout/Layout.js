import React from "react";
import Header from "./Header";
import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";
import FooterContactSection from "../components/FooterContactSection/FooterContactSection";

function Layout(){
    return (
        <>
            <HelmetProvider>
                <Header/>
                <Outlet />
                <FooterContactSection />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default Layout;