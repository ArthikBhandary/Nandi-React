import React from 'react';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AboutUs from './AboutUs.js';
import QuizPage from './Quiz.js';
import ProfilePage from './Profile.js';
import CoursePage from './CoursePage.js';
import ModulePage from "./ModulePage.js";
import { AuthProvider, useAuth } from "../contexts/AuthContext.js"
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom"

export default function HomePage() {
  const { currentUser } = useAuth()
  console.log(currentUser)
    return (<div className="HomePage">
        <Header></Header>
        <Switch>
            <Route path="/trainee/aboutus" component={AboutUs}/>
            <Route path="/trainee/home" component={Home}/>
            <Route exact path="/trainee/courses" component={ CoursePage }/>
            <Route exact path="/trainee/modules/:moduleID" component={ ModulePage } />
            <Route path="/trainee/quiz/:moduleID" component={ QuizPage }/>
            <Route path="/trainee/profile" component={ ProfilePage }/>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer></Footer>
    </div>)
}
