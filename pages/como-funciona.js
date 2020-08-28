import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import ComoFunciona from "../components/ComoFunciona";


const ComoFuncionaPage = () => {
    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <ComoFunciona />
            <Footer />
        </Layout>
    );
};

export default ComoFuncionaPage;
