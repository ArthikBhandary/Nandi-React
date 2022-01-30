import React from "react";
import CourseFS from "../database/Course.js";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext.js";
import AOS from 'aos';

class ModuleTile extends React.Component {
  render() {
    return (<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="course-item">
        <img src={this.props.val.image_url} className="img-fluid" alt="..."/>
        <div className="course-content">
          <h3>
            <Link to={`/trainee/modules/${this.props.doc_id}`}>
              {this.props.doc_id}
            </Link>
          </h3>
        </div>
      </div>
    </div>)
  }
};

export default class CoursePage extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    AOS.init();
    this.state = {course : {}, modules:[], title:""};

  }
  componentDidMount() {
    const context = this.context;
    const uid = context.currentUser.uid;
    this.setState({userID: uid});
    this.renderModuleList(uid);
    //It will get the data from context, and put it into the state.
    // this.setState({ profile: context.profile });
  }

  async renderModuleList(uid) {
    try {
      console.log(uid);
      if (!uid) {
        return;
      }
      const module = await CourseFS.getCourseReference(uid);
      this.setState({title: module.id, module: module});

      const moduleSnap = await CourseFS.getModuleList(module)
      const modules = [];
      moduleSnap.forEach((doc) => modules.push(<ModuleTile val={doc.data()} key={doc.id} doc_id={doc.id}/>));
      console.log(modules);
      this.setState({modules: modules, course: module.data(), title:module.id});
    } catch (err) {
      console.log(err);
    }
  }

  getDate(timeStamp) {
    if (timeStamp) {
      var date = new Date(timeStamp.seconds * 1000);
      return date.toLocaleDateString();
    }
  }

  render() {
    return (<main id="main" data-aos="fade-in">
      <div className="breadcrumbs">
        <div className="container">
          <h2>
            { this.state.title } - Modules
          </h2>
        </div>
      </div>
      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">
          <div className="row" id="courselist" data-aos="zoom-in" data-aos-delay={100}>
            <div className="col-lg-8">
              <div class="row">
                {
                  this.state.modules
                    ? this.state.modules
                    : <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>

                    // <ModuleTile val={title:"TTTT"}/>
                }
              </div>
            </div>
            <div className="col-lg-4">

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Trainer</h5>
                <p>
                  <a href="#">
                    { this.state.course.trainer }
                  </a>
                </p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Schedule</h5>
                <p>
                  { this.getDate( this.state.course.start_date )} to { this.getDate( this.state.course.end_date ) }
                </p>
              </div>
              {/*<Link to={"get-started-btn"} className="get-started-btn">*/}

              {/*</Link>*/}
            </div>
          </div>
        </div>
      </section>
    </main>);
  }
}
