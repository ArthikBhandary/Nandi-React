import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';
import CoursePage from './CoursePage';
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom"

export default function HomePage() {
    return (<div className="HomePage">
        <Header></Header>
        <Switch>
            <Route path="/trainee/aboutus" component={AboutUs}/>
            <Route path="/trainee/home" component={Home}/>
            <Route path="/trainee/courses" component={ CoursePage }/>
            <Route exact path="/trainee" component={Home}/>
        </Switch>
        <Footer></Footer>
    </div>)
}
