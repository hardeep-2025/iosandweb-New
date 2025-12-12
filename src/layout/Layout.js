import React from "react";
import Header from "./Header";
import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";

function Layout(){
    return (
        <>
            <HelmetProvider>
                <Header/>
                <Outlet />
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default Layout;