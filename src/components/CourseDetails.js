import React from "react";
import CourseFS from "../database/Course";
import AOS from 'aos';
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";


export default class CourseDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    AOS.init();

    this.state = {course: CourseFS.getSampleDictFormat()};
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
getDate(timeStamp){
  if(timeStamp){
    var date = new Date(timeStamp.seconds * 1000);
    return date.toLocaleDateString();
  }
}

  render() {
    return (<main id="main">
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>
            { this.state.course.title }
          </h2>
        </div>
      </div>
      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <img src={ this.state.course.image_url} className="img-fluid" alt="alt"/>
              <h3>
                { this.state.course.title } - Course details
              </h3>
              <p>
                { this.state.course.description }
              </p>
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
              <a href="allmodules.html" className="get-started-btn">
                Go To Modules
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  }
}
