import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Aliados from "../components/Aliados";


const AliadosPage = () => {

    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <Aliados />
            <Footer />
        </Layout>
    );
};

export default AliadosPage;