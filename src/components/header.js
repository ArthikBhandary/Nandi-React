import React from "react";
import logoImage from "../assets/img/Logo.jpg"
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

export default function Header() {
    return (<header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
                <img src={ logoImage } alt="alt" className="img-fluid"/>
                <a href="index.html">
                    NANDI TOYOTA
                </a>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li>
                        <a className="active" href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="courdetail.html">Courses</a>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"/>
            </nav>
            <a href="profile.html" className="get-profile-btn">
                My Profile
            </a>
        </div>
    </header>);
}
