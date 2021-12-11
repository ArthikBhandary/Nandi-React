import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';
import QuizPage from './Quiz';
import ProfilePage from './Profile';
import CoursePage from './CoursePage';
import CourseDetailsPage from './CourseDetails';
import { AuthProvider, useAuth } from "../contexts/AuthContext"
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
            <Route exact path="/trainee/courses/:courseId" component={ CourseDetailsPage } />
            <Route path="/trainee/quiz" component={ QuizPage }/>
            <Route path="/trainee/profile" component={ ProfilePage }/>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer></Footer>
    </div>)
}
