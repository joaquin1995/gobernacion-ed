import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class AboutTwo extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">¿Cómo Funciona?<br />
                                    </h2>
                                </div>
                                <p className="about-two__text">Santa Cruz Educa es un espacio abierto de fomento al conocimiento. Se construye a partir con aportes voluntarios de expertos en temáticas concretas que desean difundir su experiencia y capacidades...</p>
                                <div className="about-two__single-wrap">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-professor"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Start learning from
                                                our experts</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-knowledge"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Biblioteca Virtual</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/como-funciona" className="thm-btn">Aprede más</a>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
                            <div className="about-two__image">
                                <span className="about-two__image-dots"></span>
                                <img src="/assets/images/about-1-1.jpg" alt="" />
                                    <div className="about-two__count">
                                        <div className="about-two__count-text">Trusted by
                                            <span className="counter">
                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 4890 : 0} /></VisibilitySensor>
                                            </span></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}