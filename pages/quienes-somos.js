import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import QuienesSomos from "../components/QuienesSomos";


const QuienesSomosPage = () => {
    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <QuienesSomos />
            <Footer />
        </Layout>
    );
};

export default QuienesSomosPage;
