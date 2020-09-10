import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import InformacionCurso from "../components/InformacionCurso";
import CalendarioDigital from "../components/CalendarioDigital";
import CourseDetails from "../components/CourseDetails";

const InfoCursoPage = () => {
   
    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            <CourseDetails />
            <CalendarioDigital titulo='Cursos Relacionados'/>
            <Footer />
        </Layout>
    );
};

export default InfoCursoPage;