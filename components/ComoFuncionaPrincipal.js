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
                        <div className="col-xl-12">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">¿Qué es Santa Cruz Educa?</h2>
                                </div>
                                <p className="about-two__text">
                                Santa Cruz Educa es una plataforma de enseñanza y aprendizaje de implementación progresiva y que surje a partir de la necesidad de aportar al acceso a la educación por parte de la población de una manera practica y sencilla.
                                </p>
                                
                                
                            </div>
                        </div>
                        {/* <div className="col-xl- d-flex justify-content-xl-end justify-content-sm-center">
                            <div className="about-two__image">
                                <span className="about-two__image-dots"></span>
                                <img src="/assets/images/como-funciona.png" height="529" width="529" alt="" />
                                    <div className="about-two__count">
                                        <div className="about-two__count-text">Trusted by
                                            <span className="counter">
                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 4890 : 0} /></VisibilitySensor>
                                            </span></div>
                                    </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}