import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();

        //Search Toggle
        this.serachButton();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    serachButton = () => {
        let searchToggle = document.querySelector(".search-toggle");
        let searchPopup = document.querySelector(".search-popup");
        let searchClose = document.querySelector(".cancel");
        let searchOverlay = document.querySelector(".search-overlay");

        searchToggle.addEventListener("click", function () {
            searchPopup.classList.add('active');
        });

        searchClose.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });

        searchOverlay.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });
    }

    render() {
        return (
            <header className="site-header site-header__header-one ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/assets/images/Recurso4.png" className="main-logo" width="120" 
                                         alt="Awesome Image" />
                                </a>
                            </Link>
                            {/* <div className="header__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div> */}
                            <button className="menu-toggler">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className="navigation-box">
                                <li className="current">
                                    <Link href="/"><a>Inicio</a></Link>
                                    <ul className="sub-menu">
                                    <li><Link href="/santa-cruz"><a>¿Qué es Santa Cruz Educa?</a></Link></li>

                                        <li><Link href="/quienes-somos"><a>¿Quiénes Somos?</a></Link></li>
                                        <li><Link href="/index-2"><a>Nuestros Aliados</a></Link></li>
                                        {/* <li><Link href="/index-3"><a>Home 03</a></Link></li> */}
                                        {/* <li><a href="#">Header Versions</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Header 01</a></Link></li>
                                                <li><Link href="/index-2"><a>Header 02</a></Link></li>
                                                <li><Link href="/index-3"><a>Header 03</a></Link></li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                </li>
                                <li>
                                    <a href="/formulario-estudiante">¿Quiéres Aprender?</a>
                                    {/* <ul className="sub-menu">
                                        <li><Link href="/about"><a>About Page</a></Link></li>
                                        <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                        <li><Link href="/pricing"><a>Pricing Plans</a></Link></li>
                                        <li><Link href="/faq"><a>FAQ'S</a></Link></li>
                                    </ul> */}
                                </li>
                                <li>
                                    <a href="/formulario-docente">¿Quiéres Enseñar?</a>
                                    {/* <ul className="sub-menu">
                                        <li><Link href="/courses"><a>Courses</a></Link></li>
                                        <li><Link href="/course-details"><a>Courses Details</a></Link></li>
                                    </ul> */}
                                </li>
                                <li>
                                    <Link href="/teachers"><a>Biblioteca Digital</a></Link>
                                    <ul className="sub-menu">
                                    <li><a href="#">Salud</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Medicina</a></Link></li>
                                                <li><Link href="/"><a>Bioquimica</a></Link></li>
                                                <li><Link href="/"><a>Cirugias</a></Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Educación</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Educación Primaria</a></Link></li>
                                                <li><Link href="/"><a>Educación Secundaria</a></Link></li>
                                                <li><Link href="/"><a>Educación Superior</a></Link></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Cultura</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/"><a>Historia del Oriente Boliviano</a></Link></li>
                                                <li><Link href="/"><a>Ciencias del Arte</a></Link></li>
                                                <li><Link href="/"><a>Lenguaje</a></Link></li>
                                                <li><Link href="/"><a>Politicá</a></Link></li>
                                            </ul>
                                        </li>
                                       

                                     
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/news"><a>Calendario Digital</a></Link>
                                    {/* <ul className="sub-menu">
                                        <li><Link href="/news"><a>News Page</a></Link></li>
                                        <li><Link href="/news-details"><a>News Details</a></Link></li>
                                    </ul> */}
                                </li>
                                <li>
                                    <Link href="/contact"><a>Noticias</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="header__search-btn search-popup__toggler search-toggle" href="#"><i
                                className="kipso-icon-magnifying-glass"></i>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavOne;