import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';

const CourseOne = () => {

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2

            },
            320:{
                slidesPerView : 1
            }
        }
    }
    return (
        <div>
        <section className="course-one__top-title home-one">
            <div className="container">
                <div className="block-title mb-0">
                    <h2 className="block-title__title">¿Quiénes somos?</h2>
                    <br />
                    <br />

                        <p className="text_quienes_somos">
                        Santa Cruz Educa es una iniciativa del Gobierno Autónomo Departamental de Santa Cruz en alianza con distintas instituciones y organizaciones internacionales, nacionales y locales. Este emprendimiento está y seguirá abierto a involucrar apoyos individuales y colectivos.
                        </p>
                </div>
            </div>
            <div className="course-one__top-title__curve"></div>
        </section>

      
        </div>
    );
}
export default CourseOne;