import React from "react";
import { AuthContext } from "../contexts/AuthContext.js";
import AOS from "aos";
import ModuleFS from "../database/Module.js";
import CourseFS from "../database/Course.js";
import { getSection } from "../database/Module.js";
import {
  getUserProgress,
  getUserData,
  setUserModuleProgress,
} from "../database/User.js";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "../assets/css/about_us.css";

class ProfilePage extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    AOS.init();
    this.state = {
      username: "",
      email: "",
      phone: "",
      address: "",
      empid: "",

      module1: 0,
      module2: 0,
      module3: 0,
      module4: 0,
      module5: 0,
    };
  }
  componentDidMount() {
    const context = this.context;
    const uid = context.currentUser.uid;
    this.setState({ userID: uid });
    this.getUserName(uid);
    this.getProgress(uid);
  }
  async getUserName(uid) {
    try {
      if (!uid) {
        return;
      }
      const user = await getUserData(uid);
      this.setState({
        username: user.username,
        email: user.emailid,
        phone: user.mobile,
        empid: user.empid,
        address: user.address,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getProgress(uid) {
    try {
      console.log(uid);
      if (!uid) {
        return;
      }
      const prog = await getUserProgress(uid);

      const userData = prog["data"];
      let collectionref = await CourseFS.getCourseReference(uid);
      let modulelist = await CourseFS.getModuleList(collectionref);
      var i = 1;
      modulelist.forEach(async (moduleref) => {
        console.log("HHHHHHHHHH");
        let moduleProgress = userData[moduleref.id];
        console.log(moduleProgress, "PRogress");
        let sectionList = await ModuleFS.getSectionListAsDict(moduleref.ref);
        Promise.all(sectionList).then((sectionListRes) => {
          var counter = 0;
          var temp = 0;

          sectionListRes.forEach((section) => {
            const sectionProgress = moduleProgress[section.id];

            counter += 1;
            temp += (sectionProgress * 100) / section.total;
            console.log(section);
          });
          if (i === 1) this.setState({ module1: temp / counter });
          if (i === 2) this.setState({ module2: temp / counter });
          i = i + 1;
          console.log(this.state.module1);
          console.log(this.state.module2);
          // console.log(temp / countere, "%");
        });
        // console.log(counter, " CCCCC");
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <main id="main" data-aos="fade-in">
          {/* ======= Breadcrumbs ======= */}
          <div className="breadcrumbs">
            <div className="container">
              <h2>Trainee Profile</h2>
            </div>
          </div>
          {/* End Breadcrumbs */}
          <div className="container">
            <div className="main-body">
              {/* /Breadcrumb */}
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          className="rounded-circle"
                          width={150}
                        />
                        <div className="mt-3">
                          <h4>{this.state.username}</h4>
                          <p className="text-secondary mb-1">
                            Genral body technician
                          </p>
                          <p className="text-muted font-size-sm">
                            {this.state.address}
                          </p>
                          <button className="btn btn-primary">Progress</button>
                          <button className="btn btn-outline-primary">
                            Certificates
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <img src="../assets/img/badge.jpg" alt="Badge earned" />
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
                          {this.state.username}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {this.state.email}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Employee ID</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {this.state.empid}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {this.state.phone}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {this.state.address}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <a
                            className="btn btn-info "
                            target="__blank"
                            href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gutters-sm">
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="d-flex align-items-center mb-3">
                            <h4>Module Progress</h4>
                          </h6>
                          <small>
                            Module1 : {parseInt(this.state.module1)}%
                          </small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: this.state.module1 + "%" }}
                              aria-valuenow={10}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>
                            Module2 : {parseInt(this.state.module2)}%
                          </small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: this.state.module2 + "%" }}
                              aria-valuenow={72}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>
                            Module 3: {parseInt(this.state.module3)}%
                          </small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: this.state.module3 + "%" }}
                              aria-valuenow={89}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>
                            Module 4 {parseInt(this.state.module4)}%
                          </small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: this.state.module4 + "%" }}
                              aria-valuenow={55}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <small>
                            Module 5 {parseInt(this.state.module5)}%
                          </small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: this.state.module5 + "%" }}
                              aria-valuenow={66}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ProfilePage;
