import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderOne = () => {

    const params = {
        
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    }


    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };


    return (
        <div className="banner-wrapper">
            <section className="banner-one banner-carousel__one no-dots">

                <Swiper 
                getSwiper={setSwiper}
                {...params}
                >
                {/* <Swiper {...params}> */}

                    <div className="banner-one__slide banner-one__slide-one">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            {/* <img src="/assets/images/manchaverdepag.png" alt="" className="banner-one__scratch" /> */}
                            <img src="/assets/images/profesor.png" className="banner-one__person" alt="" />
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">¿Querés <br/>
                                    Enseñar? </h3>
                                    <p className="banner-one__tag-line">Queres Compartir tus Conocimientos?</p>
                                    <a href="/formulario-docente" className="thm-btn banner-one__btn">Aprende más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-one__slide banner-one__slide-two">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            {/* <img src="/assets/images/manchaverdepag.png" alt="" className="banner-one__scratch" /> */}
                            <img src="/assets/images/alumnos.png" className="banner-one__person" alt="" />
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">¿Querés<br />
                                    Aprender? </h3>
                                    <p className="banner-one__tag-line">Estas Listo para
                                    Aprender?</p>
                                    <a href="/formulario-estudiante" className="thm-btn banner-one__btn">Aprende más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </section>
            <div className="banner-carousel-btn">
                <div onClick={goPrev} className="banner-carousel-btn__left-btn banner-arrow"><i className="kipso-icon-left-arrow"></i></div>
                <div onClick={goNext} className="banner-carousel-btn__right-btn banner-arrow"><i className="kipso-icon-right-arrow"></i></div>
            </div>
            {/* <div className="banner-one__cta">
                <div className="banner-one__cta-icon">
                    <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
                </div>
                <div className="banner-one__cta-title">
                    <h3 className="banner-one__cta-text"><a href="#">Read how we encourage our
                        students to learn</a></h3>
                </div>
                <div className="banner-one__cta-link">
                    <a href="#"><i className="kipso-icon-right-arrow"></i></a>
                </div>
            </div> */}
        </div>
    );
}
export default SliderOne;