import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import SantaCruzEducaInfo from "../components/SantaCruzEducaInfo";


const SantaCruz = () => {
    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <SantaCruzEducaInfo />
            <Footer />
        </Layout>
    );
};

export default SantaCruz;
