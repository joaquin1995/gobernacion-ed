import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import FormularioEstudiante from "../components/FormularioEstudiante";


const FormularioEstudiantePage = () => {
    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <FormularioEstudiante />
            <Footer />
        </Layout>
    );
};

export default FormularioEstudiantePage;