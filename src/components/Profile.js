
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


class ProfilePage extends React.Component{
    render() {
      return (
        <div>
          {/* ======= Header ======= */}
          <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
              <h1 className="logo me-auto">
                <img src="assets/img/Logo.jpg" alt="" className="img-fluid" />
                <a href="index.html">NANDI TOYOTA</a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
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
          {/* End Header */}
          <main id="main" data-aos="fade-in">
            {/* ======= Breadcrumbs ======= */}
            <div className="breadcrumbs">
              <div className="container">
                <h2>Trainee Profile</h2>
              </div>
            </div>{/* End Breadcrumbs */}
            <div className="container">
              <div className="main-body">
                {/* /Breadcrumb */}
                <div className="row gutters-sm">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                          <div className="mt-3">
                            <h4>John Doe</h4>
                            <p className="text-secondary mb-1">Genral body technician</p>
                            <p className="text-muted font-size-sm">Kanakapura Road, Bengaluru, KA</p>
                            <button className="btn btn-primary">Progress</button>
                            <button className="btn btn-outline-primary">Certificates</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">
                      <img src="assets/img/badge.png" alt="Badge earned" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            John doe
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            nandi@toyoto.com
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Employee ID</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            33774377878
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            +9187875863783
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Kanakapura Rd,Bengaluru,KA
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-12">
                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row gutters-sm">
                      <div className="col-sm-6 mb-3">
                        <div className="card h-100">
                          <div className="card-body">
                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Module Status</i></h6>
                            <small>Module 1</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 2</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 3</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 4</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 5</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="card h-100">
                          <div className="card-body">
                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Module Status</i></h6>
                            <small>Module 1</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 2</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 3</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 4</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <small>Module 5</small>
                            <div className="progress mb-3" style={{height: '5px'}}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
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
          </footer>{/* End Footer */}
          
        </div>
      );
    }
  };
  export default ProfilePage;