import React from "react";

import AOS from 'aos';
import main_func from "../assets/js/main";

import "../assets/vendor/aos/aos.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "../assets/css/about_us.css";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        AOS.init();
        this.state = {
            slideIndex: 0,
        }
    }
    componentDidMount() {
        this.showSlides();
        main_func();
    }
    showSlides() {
        let slides = document.getElementsByClassName("mySlides-n");
        console.log(this)
        console.log(this.state)
        let slideIndex = this.state.slideIndex;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        this.setState({slideIndex:slideIndex})
        setTimeout(() => this.showSlides(), 4000); // Change image every 8 seconds
        // Arrow function to preserve this
    }

    plusSlides(position) {
        let slideIndex = this.state.slideIndex;
        slideIndex += position;
        let slides = document.getElementsByClassName("mySlides-n");
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        console.log(slides)
        slides[slideIndex - 1].style.display = "block";
        this.setState({slideIndex:slideIndex})

    }

    currentSlide(index) {
        let slides = document.getElementsByClassName("mySlides-n");
        if (index > slides.length) {
            index = 1
        } else if (index < 1) {
            index = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[index - 1].style.display = "block";

    }

    render() {
        return (<main id="main">
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>
                        Nandi Vishwavidyalaya
                    </h2>
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis.
                    </p>
                </div>
            </div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-left" data-aos-delay={100}>
                            <div id="slide-n">
                                <div className="slideshow-container-n">
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/1.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/2.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/3.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/4.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/5.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/6.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/7.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/8.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/9.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/10.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/11.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/12.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/13.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/14.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/15.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/16.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/17.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/18.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/19.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/20.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/21.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/22.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/23.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/24.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/26.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/27.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/28.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/29.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/30.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/31.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <div className="mySlides-n fade-n">
                                        <img src="./assets/img/about_images/32.png" style={{
                                                width: '100%'
                                            }}/>
                                    </div>
                                    <a className="prev-n" onClick={ () => this.plusSlides(-1) }>❮</a>
                                    <a className="next-n" onClick={ () => this.plusSlides(1) }>❯</a>
                                </div>
                                <br/>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>
                                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle"/>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle"/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit.
                                </li>
                                <li>
                                    <i className="bi bi-check-circle"/>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>);
    }
}
export default AboutUs;
