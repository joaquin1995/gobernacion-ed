import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const CourseCatOne = () => {

    const params = {
        slidesPerView : 6,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 6
            },
            768:{
                slidesPerView : 4
            },
            640:{
                slidesPerView : 3

            },
            320:{
                slidesPerView : 2
            }
        }
    }

    return (
        <section className="thm-gray-bg course-category-one">
            <div className="container-fluid text-center">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Nuestros Aliados</h2>
                </div>
                <div className="course-category-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-one__single ">
                                <div className="">
                                    {/* <i className="kipso-icon-desktop"></i> */}
                                    <img src="/assets/images/gob-scz.jpg" alt="" className="img-aliados" height="100" />
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Gobiero Autónomo Departamental Santa Cruz<br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="">
                                    {/* <i className="kipso-icon-professor"></i> */}
                                    {/* <i className="fab fa-android"></i> */}
                                    <img src="/assets/images/entel.jpg" alt="" className="img-aliados" height="100" />
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Entel  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="">
                                    {/* <i className="kipso-icon-music-player"></i> */}
                                    <img src="/assets/images/seduca.jpg" alt="" className="img-aliados" height="100" />

                                </div>
                                <h3 className="course-category-one__title"><a href="#">Dirección Departamental de Educación Santa Cruz</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="">
                                    {/* <i className="kipso-icon-camera"></i> */}
                                    <img src="/assets/images/innova.jpeg" alt="" className="img-aliados" height="100" />
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Santa Cruz Innova  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-5">
                                <div className="">
                                    {/* <i className="kipso-icon-targeting"></i> */}
                                    <img src="/assets/images/cainco.png" alt="" className="img-aliados" height="100" width="150"/>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">CÁMARA DE INDUSTRIA, COMERCIO, SERVICIOS Y TURISMO DE SANTA CRUZ - BOLIVIA</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-6">
                                <div className="">
                                    {/* <i className="kipso-icon-health"></i> */}
                                    <img src="/assets/images/fundacion-ifra.jpg" alt="" className="img-aliados" height="100" />
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Fundación Fe y Alegria  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="">
                                    {/* <i className="kipso-icon-desktop"></i> */}
                                    <img src="/assets/images/idea-internacional.jpg" alt="" className="img-aliados" height="100" />

                                </div>
                                <h3 className="course-category-one__title"><a href="#">Fundación Idea Internacional Bolivia <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="">
                                    {/* <i className="kipso-icon-web-programming"></i> */}
                                    <img src="/assets/images/tv-universitaria.jpg" alt="" className="img-aliados" height="100" />

                                </div>
                                <h3 className="course-category-one__title"><a href="#">Televisión Universitaria UAGRM  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="">
                                    {/* <i className="kipso-icon-music-player"></i> */}
                                    <img src="/assets/images/facultad-de Ciencias-Econónomicas-y-Empresariales-UAGRM.jpg" alt="" className="img-aliados" height="100" />

                                </div>
                                <h3 className="course-category-one__title"><a href="#">Facultad de Ciencias Económicas UAGRM</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="">
                                    {/* <i className="kipso-icon-camera"></i> */}
                                    <img src="/assets/images/vicerectorado-UAGRM.png" alt="" className="img-aliados" height="100" />

                                </div>
                                <h3 className="course-category-one__title"><a href="#">Vicerrectorado Uagrm  <br /> <br /></a></h3>
                            </div>
                        </div>

                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="">
                                    {/* <i className="kipso-icon-camera"></i> */}
                                    <img src="/assets/images/fundacion-konrad.jpeg" alt="" className="img-aliados" height="100" width="150"/>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Fundación Konrad Adenauer Stiftung - Bolivia</a></h3>
                            </div>
                        </div>
                    </Swiper>
                </div>

                {/* <a href="#" className="thm-btn">View All Categories</a> */}
            </div>
        </section>
    );
}
export default CourseCatOne;