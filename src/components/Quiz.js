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

class QuizPage extends React.Component {
render(){
    return(
        <div>

                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto">
                            <img src="assets/img/Logo.jpg" alt="" className="img-fluid" />
                            <a href="index.html">NANDI TOYOTA</a>
                        </h1>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a className="active" href="courdetail.html">Courses</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>{/* .navbar */}
                        <a href="profile.html" className="get-profile-btn">My Profile</a>
                    </div>
                </header>

                <main id="main" data-aos="fade-in">
                    {/* ======= Breadcrumbs ======= */}
                    <div className="breadcrumbs">
                        <div className="container">
                            <h2>Module 1</h2>
                            <h3>QUIZ</h3>
                        </div>
                    </div>{/* End Breadcrumbs */}
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q1. Calculate the'Curb Weight' of the vehicle by calculating the same from the
                                weight of the items given below. Enter the value given in the box below:
                                </b>
                            </div>
                        </div>
                        <div className="quiz-img-container">
                            <img className="quiz-img" src="./assets/img/quizQues.JPG" alt="" />
                        </div>
                        <div className="quiz-img-textfield">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q2. Which of the following factors are considered while selecting the right
                                tool?
                                </b></div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Type of job
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Speed at which the job can be done
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Torque required to do the job
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">All of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q3. Which of the following combination is suitable to do the job in a narrow
                                space?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Socket wrench and sliding handle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Socket wrench and spinner handle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Socket wrench and Ratchet handle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q4. What is the purpose of brass bar?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">To avoid damage to hammer
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">To avoid injury to user
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">To avoid damage to part
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">To reduce the noise of hammering
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q5. How should we sharpen the blade of Gasket Scarper?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">By oilstone
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By bench grinder
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By sand paper
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Any of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q6. Which of the following factors are considered while selecting the right tool
                                to do the job?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Type of job
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Speed at which the job can be done
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Torque required to do the job
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">All of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q7. Which of the following tool is suitable for applying heavy torque?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Ratchet handle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Spinner handle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Universal joint
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Sliding handle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q8. Which of the following combination should be used to loosen or tighten a
                                pipe joint?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Slip joint plier + open-end wrench
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Needle nose plier + open-end wrench
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Adjustable wrench + open-end wrench
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">open-end wrench + open-end wrench
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q9. What is the purpose of using pin punch?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">To make punch mark on a part
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">To install or remove the lock pins
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">To loosen nuts and bolts
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">To align the parts for installation
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Q10. Which of the following method should be used to apply extra torque on nut
                                and bolt while tightening them?</b>
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Hammering at the end of spanner
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Attaching a pipe to increase the length of spanner
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">None of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2" style={{ width: '100%' }}>
                            <div className="py-2 h5"><b>Q11. Click on the handles, which should be used to apply large torque on nut or bolt?</b>
                            </div>
                            <div className="quiz-img-container">
                                <img className="quiz-img" src="./assets/img/quizQues2.JPG" alt="" />
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">Handle on the left
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Handle in the middle
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Handle on the right
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2" style={{ width: '100%' }}>
                            <div className="py-2 h5"><b>Q12. Which type of plier is used to remove hose clamps?</b>
                            </div>
                            <div className="quiz-img-container">
                                <img className="quiz-img" src="./assets/img/quizQues3.JPG" alt="" />
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">By oilstone
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By bench grinder
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By sand paper
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Any of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2" style={{ width: '100%' }}>
                            <div className="py-2 h5"><b>Q13. Identify the tool which is used to check the preload</b>
                            </div>
                            <div className="quiz-img-container">
                                <img className="quiz-img" src="./assets/img/quizQues4.JPG" alt="" />
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">By oilstone
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By bench grinder
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By sand paper
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Any of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="containero mt-sm-5 my-1">
                        <div className="question ml-sm-5 pl-sm-5 pt-2" style={{ width: '100%' }}>
                            <div className="py-2 h5"><b>Q14. Pick and drop the pictures of hammers to match them with their names
                            </b>
                            </div>
                            <div className="quiz-img-container">
                                <img className="quiz-img" src="././assets/img/quizQues5.JPG" alt="" />
                            </div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label className="options">By oilstone
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By bench grinder
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">By sand paper
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                                <label className="options">Any of the above
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <button onclick="myFunction(this)" className="get-started-btn" style={{ display: 'block', margin: 'auto' }}>
                        <h6>SUBMIT ANSWERS</h6>
                    </button>
                    <div className="res" id="ress" style={{ display: 'none' }}>
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h4> You Have Submitted Successfully </h4>
                            <h4> Your Score is 9 </h4>
                            <h4><a href="module1.html">Go To Module</a></h4>
                        </div>
                    </div>
                </main>
                <footer id="footer">
                    <div className="container d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div className="copyright">
                                © Copyright <strong><span>Nandi</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <a href="https://RVCE.com/">RVCE</a>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                </footer>
          {/* <div id="preloader" />
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" />
          </a> */}
        </div >
        
      );
    
  };
}
export default QuizPage;