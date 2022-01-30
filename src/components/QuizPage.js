import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import AOS from "aos";
import QuizFS from "../database/Quiz";
import {withRouter} from "../functions/withRouter";

class QuizPage extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        AOS.init();
        this.moduleID = this.props.params.moduleID
        this.state = {
            questionDOM : [],
            answers : {},
            submitting : false,
        };
        this.quizList = []
    }

     componentDidMount() {
        this.renderQuizList();
     }


    renderQuizList(){
        QuizFS.getQuizListAsDict(this.moduleID, this.context.currentUser.uid).then((quizList) => {
            this.quizList = quizList;
            var quizListDom = [];
            Promise.all(quizList).then((quizListVal) => {
                let answers = {};
                quizListVal.forEach((question, index) => {
                    answers[question.id] = {
                        chosen : "",
                        correct : question.correct,
                    }
                    question.index = index + 1;
                    quizListDom.push(this.renderQuiz(question));
                })
                this.setState(
                    {quizListDom : quizListDom, answers : answers}
                );
            });
        })
    }
    #buildOptions(quiz){
        const row = []
        for(let key in quiz.option){
            row.push(
                <label className="options" key={key}> { key } . { quiz.option[key] }
                    <input type="radio" name="radio" value={ quiz.option[key] } required={true} onClick={(e)=>{
                        console.log(e);
                        let answers = this.state.answers;
                        answers[quiz.id]["chosen"] = quiz.option[key];
                        this.setState((
                            answers
                        ));
                        console.log(this.state.answers);
                    }} />
                    <span className="checkmark"/>
                </label>
            );
        }
        return row;
    }
    renderQuiz(quiz){
        console.log(quiz,quiz.id);
        return  <div className="containero mt-sm-5 my-1" key={quiz.id}>
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5">
                    <b>{ quiz.index + ". " + quiz.question }</b>
                </div>
                { quiz.image &&
                    <div className="quiz-img-container">
                        <img className="quiz-img" src="{quiz.image}" alt=""/>
                    </div>
                }
                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                    { this.#buildOptions(quiz)}
                </div>
            </div>
        </div>
    }

    #submitQuiz(e) {
        e.preventDefault();
        console.log(e);
        this.setState({
            submitting:true
        });
        const answers = this.state.answers;
        let correct = 0, n = 0;
        for(let ques in answers){
            n++;
            if(answers[ques].chosen === answers[ques].correct){
                correct++;
            }
        }
        console.log(correct/n);

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
                    { this.state.quizListDom && !this.state.submitting ?
                        <form onSubmit={ this.#submitQuiz.bind(this) }>
                            {this.state.quizListDom}
                            <button type="submit" className="get-started-btn"
                                    style={{display: 'block', margin: 'auto'}}>
                                <h6>SUBMIT ANSWERS</h6>
                            </button>
                        </form> :
                        <div className="d-flex justify-content-center" style={{padding : "10%"}}>
                            <div className="spinner-border text-danger" role="status" style={{height : "5rem", width : "5rem", padding:"10px"}}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }

                    <div className="res" id="ress" style={{display: 'none'}}>
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h4> You Have Submitted Successfully </h4>
                            <h4> Your Score is 9 </h4>
                            <h4><a href="module1.html">Go To Module</a></h4>
                        </div>
                    </div>
                </main>
            </div>

        );

    }
}

export default withRouter(QuizPage);
