import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import AOS from "aos";
import QuizFS from "../database/Quiz";
import {withRouter} from "../functions/withRouter";
import {runTransaction} from "firebase/firestore";
import {db} from "../firebase";
import {getUserData, getUserProgress} from "../database/User";
import {LoadingSpinner} from "./LoadingComponent";
import {Link} from "react-router-dom";

class QuizPage extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        AOS.init();
        this.moduleID = this.props.params.moduleID;
        this.state = {
            questionDOM: [],
            answers: {},
            submitting: true,
            hasGivenQuiz: true,
            marks : "",
        };
        this.quizList = []
    }

    componentDidMount() {
        this.checkifGivenQuiz();
        this.renderQuizList();
    }

    checkifGivenQuiz() {
        getUserProgress(this.context.currentUser.uid).then((progress) => {
            const progressData = progress.data;
            if (!progressData["quiz"][this.moduleID]) {
                // If user hasn't given quiz for this module
                this.setState({
                    hasGivenQuiz: false,
                })
            } else {
                this.setState({
                    submitting: false,
                    hasGivenQuiz: true,
                    marks : progressData["quiz"][this.moduleID],
                })
            }
        });
    }


    renderQuizList() {
        QuizFS.getQuizListAsDict(this.moduleID, this.context.currentUser.uid).then((quizList) => {
            this.quizList = quizList;
            var quizListDom = [];
            Promise.all(quizList).then((quizListVal) => {
                let answers = {};
                quizListVal.forEach((question, index) => {
                    answers[question.id] = {
                        chosen: "",
                        correct: question.correct,
                    }
                    question.index = index + 1;
                    quizListDom.push(this.renderQuiz(question));
                })
                this.setState(
                    {quizListDom: quizListDom, answers: answers, submitting : false}
                );
            });
        })
    }

    #buildOptions(quiz) {
        const row = []
        let ind = "A";
        for (let key in quiz.option) {
            row.push(
                <label className="options" key={key}> {ind} . {quiz.option[key]}
                    <input type="radio" name="radio" value={quiz.option[key]} required={true} onClick={(e) => {
                        let answers = this.state.answers;
                        answers[quiz.id]["chosen"] = quiz.option[key];
                        this.setState((
                            answers
                        ));
                        console.log(this.state.answers);
                    }}/>
                    <span className="checkmark"/>
                </label>
            );
            ind = String.fromCharCode(ind.charCodeAt(0) + 1);
        }
        return row;
    }

    renderQuiz(quiz) {
        console.log(quiz, quiz.id);
        return <div className="containero mt-sm-5 my-1" key={quiz.id}>
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5">
                    <b>{quiz.index + ". " + quiz.question}</b>
                </div>
                {quiz.image &&
                    <div className="quiz-img-container">
                        <img className="quiz-img" src="{quiz.image}" alt=""/>
                    </div>
                }
                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                    {this.#buildOptions(quiz)}
                </div>
            </div>
        </div>
    }

    #submitQuiz(e) {
        e.preventDefault();
        console.log(e);
        this.setState({
            submitting: true
        });
        const answers = this.state.answers;
        let correct = 0, n = 0;
        for (let ques in answers) {
            n++;
            if (answers[ques].chosen === answers[ques].correct) {
                correct++;
            }
        }
        const mark = (correct / n).toFixed(2) * 100;
        console.log(correct / n);
        this.#setQuizProgress(this.context.currentUser.uid, this.moduleID, mark).then((val)=>{
            this.setState({
                submitting : false,
                hasGivenQuiz : true,
                marks : val.marks,
            });
        });
    }

    async #setQuizProgress(userId, moduleID, marks) {
        const userData = await getUserData(userId);
        const courseRef = userData.currentCourseProgress;
        return await runTransaction(db, async (transaction) => {
            const courseDoc = await transaction.get(courseRef);
            let progress = courseDoc.data();
            const quizData = progress["quiz"];
            if (quizData[moduleID]) {
                return {
                    success: false,
                }
            }
            progress["quiz"][moduleID] = marks;
            transaction.update(courseRef, progress);
            console.log(progress);
            return {
                success: true,
                marks: marks,
            };
        })
    }

    render() {
        return (
            <div>
                <main id="main">
                    {/* ======= Breadcrumbs ======= */}
                    <div className="breadcrumbs">
                        <div className="container">
                            <h2>Module 1</h2>
                            <h3>QUIZ</h3>
                        </div>
                    </div>
                    {/* End Breadcrumbs */}
                    {!this.state.submitting ?
                        !this.state.hasGivenQuiz ?
                            (this.state.quizListDom ?
                                    <form onSubmit={this.#submitQuiz.bind(this)}>
                                        {this.state.quizListDom}
                                        <button type="submit" className="get-started-btn"
                                                style={{display: 'block', margin: 'auto'}}>
                                            <h6>SUBMIT ANSWERS</h6>
                                        </button>
                                    </form>
                                    :
                                    LoadingSpinner()
                            )
                            :
                            <div className="containero mt-sm-5 my-1" >
                                <div className="question ml-sm-5 pl-sm-5 pt-2">
                                    <div className="py-2 h5">
                                        <b> You Have Submitted Successfully </b>
                                    </div>
                                    <div className="py-2 h5">
                                        <b> Your Score is { this.state.marks } </b>
                                    </div>
                                    <Link to={"/trainee/courses"}>
                                        <button type="submit" className="get-started-btn"
                                                style={{display: 'block', margin: 'auto'}}>
                                            <h5>Go To Module</h5>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        :
                        LoadingSpinner()
                    }
                </main>
            </div>

        );

    }
}

export default withRouter(QuizPage);
