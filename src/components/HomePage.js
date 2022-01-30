import React, {Suspense} from 'react';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
// import AboutUs from './AboutUs.js';
// import QuizPage from './QuizPage.js';
// import ProfilePage from './Profile.js';
import CoursePage from './CoursePage.js';
// import ModulePage from "./ModulePage.js";
// import { useAuth } from "../contexts/AuthContext.js"
import { Routes, Route} from "react-router-dom"
import {LoadingSpinner} from "./LoadingComponent";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/animate.css/animate.min.css";
// import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

const LazyAboutUs = React.lazy(()=>import('./AboutUs.js'));
const LazyModulePage = React.lazy(()=>import('./ModulePage.js'));
const LazyQuizPage = React.lazy(()=>import('./QuizPage.js'));
const LazyProfilePage = React.lazy(()=>import('./Profile.js'));

export default function HomePage() {
    return (<div className="HomePage">
        <Header></Header>
        <Suspense fallback={ <LoadingSpinner />}>
            <Routes>
                <Route path="aboutus" element={<LazyAboutUs />}/>
                <Route path="home" element={<Home />}/>
                <Route exact path="/courses" element={ <CoursePage /> }/>
                <Route exact path="modules/:moduleID" element={ <LazyModulePage /> } />
                <Route path="quiz/:moduleID" element={ <LazyQuizPage />}/>
                <Route path="profile" element={ <LazyProfilePage />}/>
                {/*<Route path="*" element={<Home />}/>*/}
            </Routes>
        </Suspense>
        <Footer></Footer>
    </div>)
}
