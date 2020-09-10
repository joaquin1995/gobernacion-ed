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
                    <h2 className="block-title__title">Nuestros Cursos  <br />
                       Digitales</h2>
                </div>
                <div className="course-category-one__carousel">
                    <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Artes y Humanidades <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                    {/* <i className="kipso-icon-professor"></i> */}
                                    <i className="fab fa-android"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Negocios  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Ciencia de la Computación</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Ciencia de los Datos  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-5">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-targeting"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Tecnologia de la Información</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-6">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-health"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Salud  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-1">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Matemáticas y Lógicas <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Desarrollo Personal  <br /> <br /></a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Ciencias Físicas e Ingeniería</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Ciencias Sociales  <br /> <br /></a></h3>
                            </div>
                        </div>

                        <div className="item">
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Aprendisaje de un Idioma</a></h3>
                            </div>
                        </div>
                    </Swiper>
                </div>

                <a href="#" className="thm-btn">View All Categories</a>
            </div>
        </section>
    );
}
export default CourseCatOne;