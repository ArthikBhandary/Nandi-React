import React from "react";
import { Link } from 'react-router-dom'
import logoImage from "../assets/img/Logo.jpg"
import main_func from "../assets/js/main.js";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

export default class Header extends React.Component {
    componentDidMount(){
        main_func();
    }
    render(){
    return (<header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
                <img src={ logoImage } alt="alt" className="img-fluid"/>
                <Link to={"/trainee/home"}>
                    NANDI TOYOTA
                </Link>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li>
                        <Link to={"/trainee/home"} className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/trainee/aboutus"} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/trainee/courses"} >
                            Courses
                        </Link>
                    </li>

                </ul>
                <i className="bi bi-list mobile-nav-toggle"/>
            </nav>
            <Link to={"/trainee/profile"} className="get-profile-btn">
                My Profile
            </Link>
        </div>
    </header>);
    }
}
