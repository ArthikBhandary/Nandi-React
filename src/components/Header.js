import React from "react";
import { Link } from 'react-router-dom'
import logoImage from "../assets/img/Logo.jpg"
import main_func from "../assets/js/main.js";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavbarDisplay : false
        }
    }

    componentDidMount(){
        main_func();
    }
    navBarToggle(){
        this.setState({mobileNavbarDisplay : !this.state.mobileNavbarDisplay});
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
            <nav id="navbar" className= { "navbar order-last order-lg-0 " + (this.state.mobileNavbarDisplay ? " bi-list bi-x navbar-mobile " : " ") } >
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
                <i className="bi bi-list mobile-nav-toggle" onClick={ this.navBarToggle.bind(this) }/>
            </nav>
            <Link to={"/trainee/profile"} className="get-profile-btn">
                My Profile
            </Link>
        </div>
    </header>);
    }
}
