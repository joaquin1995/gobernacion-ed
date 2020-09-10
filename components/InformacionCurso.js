import React from 'react';

const InfoCurso = () => {
    return ( 
        <div className=" ">
            <br></br>
             <h1>Curso</h1>
            <div className="info-cursos">
               

                <div className="categoria">
                    <p>Enseñanzas y disciplinas académicas &gt; Ingeniería &gt; SAP2000</p>
                </div>

                <div className="info-categoria">
                    <p className="titulo-curso">SAP2000 para Análisis y Diseño de Estructuras</p>
                    <p className="descripcon-curso">Aprendiendo desde cero a modelar estructuras en SAP2000</p>
                    <p className="calificacion-curso"> (185 calificaciones) 788 students</p>

                </div>

                <div className="info-btn">
                    <p>BTN1</p>
                    <p>BTN2</p>
                    <p>BTN3</p>
                </div>

                <div className="info-contenido">
                    <h2>Lo que aprenderás</h2>
                    <ul>
                        <li><span>Manejo de SAP2000 para Análisis y Diseño de Estructuras</span></li>
                        <li><span>La importancia del Mesh o Mallado en el análisis</span></li>
                        <li><span>Definición de casos de carga para análisis gravitacional, lateral y dinámico</span></li>
                        <li><span>Definición de áreas, inercias y otros parámetros de elementos</span></li>
                        <li><span>Definición de Diafragmas, apoyos  y apoyos deformables</span></li>
                        <li><span>Análisis de sensibilidad en el modelado</span></li>
                    </ul>
                </div>

                <div className="card" >
                    <img src="https://blogempresas.yoigo.com/embed/bdf342c08b7db389923df3680512f611e4033301553707053/portada-post_blog_YG_criptomonedas.png?imagick=1&size=350" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-dark">Ingresar</a>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default InfoCurso;