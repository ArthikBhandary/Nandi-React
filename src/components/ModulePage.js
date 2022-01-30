import React from "react";
import {getDoc} from "firebase/firestore";
import {withRouter} from "../functions/withRouter";
import AOS from 'aos';
import ModuleFS from "../database/Module.js";
import {AuthContext} from "../contexts/AuthContext.js";
import PDFViewer from 'pdf-viewer-reactjs/dist/pdf-viewer-reactjs';
import 'video-react/dist/video-react.css';
import ReactPlayer from 'react-player'
import 'bulma/css/bulma.css';
import 'material-design-icons/iconfont/material-icons.css';
import {getUserProgress, setUserModuleProgress} from "../database/User";
import {Link} from "react-router-dom";

class SectionDOM extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.section = this.props.val;
        this.doc_ref = this.props.doc_ref;
        this.start_at = this.props.start_at;
        if(this.section.file_type === "pdf") {
            this.start_at = this.props.start_at < 1 ? 1 : this.props.start_at;
        }
        this.updateOnce = true;
        this.state = {
            start_at : this.start_at,
            updateOnce: true, // For pdf
        }
    }


    render() {
        let file_type = this.section.file_type;
        let title = this.section.title;
        console.log(this.props.start_at, "PAGE");
        let buttonStyle = {display: "block", margin: "auto"};
        return (<>
            <button style={buttonStyle}>
                <h3 className="heading">{title}</h3>
            </button>
            {(file_type === "pdf") &&
                this.getPDFelement()
            }
            {(file_type === "video") &&
                this.getVideoElement()
            }

        </>)
    }

    getVideoElement(){
        console.log(this.start_at);
        return (
            <div
            >
                <ReactPlayer
                    url={this.section.file_url}
                    controls={true}
                    ref={(player) => {
                        this.player = player;
                        if(this.player) {
                            this.player.seekTo(this.start_at, "seconds");
                        }
                    }}
                    width={"100%"}
                    height={"500px"}
                    progressInterval={10000}
                    onProgress={(val) => {
                        this.props.onProgress(val.playedSeconds);
                    }}
                    onEnded={() => {
                        if(this.player) {
                            this.props.onProgress(this.player.getDuration());
                        }
                    }}
                />
            </div>

        );
    }

    getPDFelement(){
        // this.resetBtnClassUnique = " reset-btn-" + this.section.id;
        // this.canvasClass = " section-cnv-class";
        return this.renderPDFdom(this.state.start_at) ;
    }

    updatePages(val){
        this.updatePages = ()=>{};
        this.maxNoPages = val;
        setTimeout(() => {
            if(this.updateOnce) {
                this.updateOnce = false;
                console.log(this.props.start_at, this.section.id);
                if (this.props.start_at >= val) {
                    // console.log(val, "MAX UPDATE PAGESS")
                    this.setState({
                        start_at: val,
                        updateOnce : false
                    })
                } else {
                    // console.log(this.page, "UPDATE PAGESS")
                    if(this.props.start_at == 1) {
                        // Canvas is empty if page isn't changed once there's a state change
                        this.state.updateOnce = false;
                        console.log(this.state);
                        return;
                    }
                    this.setState({
                        start_at: this.props.start_at,
                        updateOnce : false
                    })
                }
            }
        }, 0); // Don't know why but doesn't work without timeout
    }

    renderPDFdom(page) {
        let fileUrl = this.section.file_url;
        // console.log(page, "PAGES INSIDE THE")
        return <PDFViewer
            document={{
                url: fileUrl
            }}
            getMaxPageCount={()=>{
                this.updatePages();
            }
            }
            onNextBtnClick={(val) => {
                this.props.onProgress(val);
            }}
            hideNavbar={false}
            externalInput={false}
            page={page}
            // canvasCss = { this.canvasClass }
            minScale={0.5   }
            scaleStep={0.25}
            scale={1}
        />
    }
}



class ModulePage extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        AOS.init();
        this.moduleID = this.props.params.moduleID
        this.state = {
            hasGivenQuiz : true,
        };
        this.hasProgressed = false;
    }

    componentDidMount() {
        const context = this.context;
        const uid = context.currentUser.uid;
        let progressPromise = getUserProgress(uid);
        // Needed rendering to check if progress is loaded so, this seemed easiest so O.O
        progressPromise.then((progressInfo) => {
            this.progress = progressInfo.data;
            console.log(this.progress);
            if(! this.progress["quiz"][this.moduleID]){
                this.setState({
                    hasGivenQuiz : false,
                })
            }
            this.progress.quiz = {};
            this.courseProgressRef = progressInfo.ref;
            this.updateProgressInterval = setInterval(() => {
                this.uploadProgress()
            }, 30000)
        })
        this.setState({userID: uid});
        this.renderModuleList(uid, progressPromise);
    }

    uploadProgress() {
        if (!this.hasProgressed) {

        } else {
            setUserModuleProgress(this.courseProgressRef, this.progress, this.moduleID).then((progress) => {
                this.progress = progress;
                this.hasProgressed = false;
            }).catch((error) => {
                console.log("SetUserModuleProgress Failed", error);
            })
        }
    }

    updateProgress(sectionId, newValue) {
        const currProgress = this.progress[this.moduleID];

        if (!(sectionId in currProgress)) {
            this.progress[this.moduleID][sectionId] = newValue;
            this.hasProgressed = true;
        } else {
            let curSectionValue = this.progress[this.moduleID][sectionId];
            if (newValue > curSectionValue) {
                this.progress[this.moduleID][sectionId] = newValue;
                this.hasProgressed = true;
            }
        }
        // console.log(this.progress);
        this.uploadProgress();
    }

    async renderModuleList(uid, progressPromise) {
        try {
            if (!uid) {
                return;
            }
            const moduleRef = await ModuleFS.getModuleRef(this.moduleID, uid);
            const moduleDoc = await getDoc(moduleRef)
            this.setState({module: moduleDoc.data(), title: module.id});

            ModuleFS.getSectionListAsDict(moduleRef, uid).then((sectionList) => {
                progressPromise.then((progressInfo) => {
                    if(!(this.moduleID in progressInfo)) {
                        this.progress[this.moduleId] = {}
                    }
                    let moduleProgress = this.progress[this.moduleID] ?? {};
                    Promise.all(sectionList).then((sectionListResolved) => {
                        let sectionDOMList = [];
                        sectionListResolved.forEach((section) => {
                            if( !(section.id in moduleProgress)) {
                                this.progress[this.moduleID][section.id] = 0;
                            }
                            sectionDOMList.push(
                                <SectionDOM
                                    val={section}
                                    key={section.id}
                                    doc_id={section.id}
                                    doc_ref={section.ref}
                                    start_at={moduleProgress[section.id]??0}
                                    onProgress={(progress) => {
                                        this.updateProgress(section.id, progress)
                                    }}
                                />
                            );
                        });
                        this.setState({sections: sectionDOMList});
                    })
                })
            })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (<main id="main" data-aos="fade-in">
            <div className="breadcrumbs">
                <div className="container">
                    <h2>
                        Modules - {this.moduleID}
                    </h2>
                </div>
            </div>

            {
                this.state.sections
                    ? this.state.sections
                    : <div className="d-flex justify-content-center" style={{"padding": "10%"}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>

                // <ModuleTile val={title:"TTTT"}/>
            }
            <br/><br/>

            <Link to={`/trainee/quiz/${this.moduleID}`}>
                {this.state.hasGivenQuiz ? "Quiz Status" : "Give Quiz"}
            </Link>
        </main>);
    }
}


export default withRouter(ModulePage);