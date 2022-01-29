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
import {BrowserRouter as Router, Routes, Route, useRouteMatch, useLocation} from "react-router-dom"

export default function HomePage() {
  const { currentUser } = useAuth()
    const location = useLocation()
    console.log(location)
  console.log(currentUser)
    return (<div className="HomePage">
        <Header></Header>
        <Routes>
            <Route path="aboutus" element={<AboutUs />}/>
            <Route path="home" element={<Home />}/>
            <Route exact path="/courses" element={ <CoursePage /> }/>
            <Route exact path="modules/:moduleID" element={ <ModulePage /> } />
            <Route path="quiz/:moduleID" element={ <QuizPage />}/>
            <Route path="profile" element={ <ProfilePage />}/>
            {/*<Route path="*" element={<Home />}/>*/}
        </Routes>
        <Footer></Footer>
    </div>)
}
