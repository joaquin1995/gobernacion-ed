import React, {Component, useState} from 'react';
import Cookie from "js-cookie";
import cookieParse from 'cookie';
import { parseCookies } from "../lib/parseCookies";
import Link  from 'next/link';
import { useRouter } from 'next/router';


const CountdownKipso = () => {
    const router = useRouter();

    const [registro,guardarRegistro] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        formulario: ''
    });

    const [error, guardarError ] = useState(false);    
    const { nombres,apellidos,email,telefono,formulario } = registro;

    const formularioSeleccionado = e =>{
        console.log(e.target.value);
        guardarRegistro({
            ...registro,
            [e.target.name] : e.target.value
        });
    }


    const enviarFormulario = e =>{


        e.preventDefault();
       
        
        if(nombres.trim() === '' || apellidos.trim() === '' || 
            email.trim() === '' || telefono.trim() === '' || formulario.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
       
        Cookie.set('registro', registro);

        if(formulario === 'docente') router.push('/formulario-docente').then(() => window.scrollTo(0, 0));
        else router.push('/formulario-estudiante').then(() => window.scrollTo(0, 0));;

        
        

    }


    return (
        <section className="countdown-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="countdown-one__content">
                            <h2 className="countdown-one__title">Regístrate Ahora </h2>
                            <p className="countdown-one__tag-line">Para Aprender Nuevos Conocimientos o Compartirlos.</p>
                            <p className="countdown-one__text"></p>
                            {/* <div className="countdown-one__list list-unstyled">

                                <Countdown date={Date.now() + 5000000000} />

                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Aquí Regístrate
                                </h2>
                            </div>
                            <form
                            onSubmit={enviarFormulario}
                            className="become-teacher__form-content contact-form-validated"
                            >
                                <input 
                                onChange={formularioSeleccionado} 
                                type="text" 
                                placeholder="Nombres" 
                                name="nombres" 
                                required/>

                                <input 
                                type="text" 
                                onChange={formularioSeleccionado} 
                                placeholder="Apellidos" 
                                name="apellidos" required/>

                                <input type="text"
                                onChange={formularioSeleccionado}  
                                placeholder="Email" 
                                name="email" required/>

                                <input 
                                type="text" 
                                placeholder="Telefono" 
                                name="telefono" 
                                onChange={formularioSeleccionado}  
                                required/>

                                <div className="form-check frm-radio">
                                    <input 
                                    className="form-check-input frm-radio" 
                                    type="radio" 
                                    name="formulario" 
                                    id="exampleRadios1" 
                                    value="estudiante"
                                    onChange={formularioSeleccionado} 
                                     
                                    />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Querés Aprender
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                    className="form-check-input frm-radio" 
                                    type="radio" 
                                    name="formulario" 
                                    id="exampleRadios2"
                                    onChange={formularioSeleccionado} 
                                    value="docente" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Querés Enseñar
                                    </label>
                                </div>
                         


                                {/* <input type="text" placeholder="Sugerencias" name="message" /> */}
                                <button type="submit"
                                        className="thm-btn become-teacher__form-btn"        
                                        >Continua tu Registros
                                </button>
                                  {/* <div  className="btn_registro">
                                 <a href="/formulario-estudiante" className="">Querés Aprender</a>
                                 <a href="/formulario-docente" className="">Querés Enseñar</a>
                                 </div> */}
                            </form>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


// CountdownKipso.getInitialProps = ({ req }) => {
//     const cookies = parseCookies(req);
   
//     return {
//       initialRememberValue: cookies.rememberMe
//     };
//   };
export default CountdownKipso;