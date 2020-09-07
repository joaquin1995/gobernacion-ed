import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import FormularioDocente from "../components/FormularioDocente";


const FormularioDocentePage = () => {

    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <FormularioDocente />
            <Footer />
        </Layout>
    );
};

export default FormularioDocentePage;