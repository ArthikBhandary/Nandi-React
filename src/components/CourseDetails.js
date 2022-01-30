import React from "react";
import CourseFS from "../database/Course.js";
import AOS from 'aos';

class CourseDOM extends React.Component {
  render() {
    return (<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="course-item">
        <img src="assets/img/module.jpg" className="img-fluid" alt="..."/>
        <div className="course-content">
          <h3>
            <a href="module1.html">
              { this.props.val.title }
            </a>
          </h3>
          <p>
            Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
          </p>
          <div className="trainer d-flex justify-content-between align-items-center">
            {/* <div class="trainer-profile d-flex align-items-center">
                          <img src="assets/img/progress.jpg" class="img-fluid" alt="">
                          <span>Ongoing</span>
                        </div> */
            }
          </div>
        </div>
      </div>
    </div>)
  }
};

export default class CourseDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    AOS.init();

    this.state = {
      course: CourseFS.getSampleDictFormat()
    };
    // console.log(this.props.match)s
    this.renderCourseDetails(this.props.match.params.courseId);
  }

  async renderCourseDetails(courseId) {
    try {
      // console.log(courseId);
      const courseSnap = await CourseFS.getCourse(courseId);
      if (courseSnap.exists()) {
        console.log("Document data:", courseSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        //TODO Redirect to error page here
      }
      // console.log(courseSnap.data());
      this.setState({course: courseSnap.data()});
      // console.log(courseSnap.data().start_date)
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
    return (<main id="main">
      <div className="breadcrumbs">
        <div className="container">
          <h2>Module 1</h2>
        </div>
      </div>
      <button style="display:block;margin:auto;">
        <h3 className="heading">1.Early auto mobile</h3>
      </button>
    </main>);
  }
}
