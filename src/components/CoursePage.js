import React from "react";
import Course from "../database/Course";
import AOS from 'aos';
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

class CourseDOM extends React.Component {
    render() {
        return (<div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={this.props.val.id}>
            <div className="course-item">
                <img src={this.props.val.image_url} className="img-fluid" alt="..."/>
                <div className="course-content">
                    <h3>
                        <a href="">
                            {this.props.val.title}
                        </a>
                    </h3>
                    <p>{this.props.val.description}
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                            <span>Ongoing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
};

export default class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        AOS.init();
        this.state = {};
        this.renderCourseList();
    }

    async renderCourseList() {
        try {
            const course = new Course;
            const courseSnap = await course.getCourseList();
            const courses = [];
            courseSnap.forEach((doc) => courses.push(
                <CourseDOM val={doc.data()} key={doc.id}/>
            ));
            this.setState({courses: courses});
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        return (<main id="main" data-aos="fade-in">
            <div className="breadcrumbs">
                <div className="container">
                    <h2>
                        General Technician - Modules
                    </h2>
                </div>
            </div>
            <section id="courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="row" id="courselist" data-aos="zoom-in" data-aos-delay={100}>
                        {
                            this.state.courses
                                ? this.state.courses
                                : <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>

                                // <CourseDOM val={title:"TTTT"}/>
                        }
                    </div>
                </div>
            </section>
        </main>);
    }
}
