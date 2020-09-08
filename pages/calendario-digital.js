import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import CalendarioDigital from "../components/CalendarioDigital";


const CalendarioPage = () => {

    return (
        <Layout pageTitle="Santa Cruz Educa">
             <Topbar />
            <NavOne />
            {/* <SliderOne /> */}
            <CalendarioDigital titulo='Cursos Actuales'/>
            <CalendarioDigital titulo='Proximos Cursos'/>
            <CalendarioDigital titulo= 'Anteriores Cursos'/>
           
            <Footer />
        </Layout>
    );
};

export default CalendarioPage;
