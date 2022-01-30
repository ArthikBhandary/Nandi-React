import React from "react";

import AOS from 'aos';
import main_func from "../assets/js/main.js";

class Home extends React.Component {
    componentDidMount() {
        AOS.init();
        main_func();
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (<div className="main">
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="{500}">
                    <h1>
                        A GROWTH ORIENTED CORPORATE
                    </h1>
                </div>
            </section>
            <main id="main">
                <section
                    id="counts"
                    className="counts section-bg">
                    <div className="container">
                        <div className="row counters">
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={1232}
                                    data-purecounter-duration={1}
                                    className="purecounter" />
                                <p>Employee</p>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={12}
                                    data-purecounter-duration={1}
                                    className="purecounter" />
                                <p>departments</p>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={42}
                                    data-purecounter-duration={1}
                                    className="purecounter" />
                                <p>Events</p>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={15}
                                    data-purecounter-duration={1}
                                    className="purecounter" />
                                <p>Courses</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{500}">
                                <div className="content text-center">
                                    <h3>Vision</h3>
                                    <p>
                                        To be the most admired fastest growing innovative corporate house committed to customers, employees, shareholders &amp; society
                                        <br />
                                        <br />
                                        Saju Thomas,
                                        <br />Chairman &amp; Managing Director
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{800}">
                                <div className="content text-center">
                                    <h3>Mission</h3>
                                    <p>
                                        "Best ownership experience to customers"
                                        <br />
                                        <br />
                                        All our activities are focused on this key aspect of feel good factor. Hence Recruitment, Induction Training play Crucial role. At recruitment stage we look for people with traits and positive attitude.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>);
    }
}
export default Home;
