import React from "react";
import { Document } from "react-pdf";
import { getDoc } from "firebase/firestore";
import AOS from 'aos';
import ModuleFS from "../database/Module.js";
import {AuthContext} from "../contexts/AuthContext.js";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/css/style.css";


class SectionDOM extends React.Component {
  render() {
    let file_type = this.props.val.file_type;
    let file_path = this.props.val.file_path;
    let buttonStyle = {display:"block", margin:"auto"};
    return (<>
      <button style={ buttonStyle }>
        <h3 className="heading">1.Early auto mobile</h3>
      </button>
      { (file_type == "pdf") &&
        <Document
            file={"https://drive.google.com/file/d/1x2GnSUq0dgxXQCZ93hOl01xnBAaZKgqe/export?format=pdf"}
        >
        </Document>
      }
    </>)
  }
};


export default class ModulePage extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    AOS.init();
    this.moduleID = this.props.match.params.moduleID
    this.state = {};
  }

  componentDidMount() {
    const context = this.context;
    const uid = context.currentUser.uid;
    this.setState({userID: uid});
    this.renderModuleList(uid);
  }

  async renderModuleList(uid) {
    try {
      console.log(uid);
      if (!uid) {
        return;
      }
      const moduleRef = await ModuleFS.getModuleRef(this.moduleID, uid);
      // this.setState({title: module.id, module: module});

      const sectionSnap = await ModuleFS.getSectionList(moduleRef)
      const sections = [];
      sectionSnap.forEach((doc) => {
        sections.push(<SectionDOM val={doc.data()} key={doc.id} doc_id={doc.id}/>);
      });
      const moduleDoc = await getDoc(moduleRef)
      // console.log(moduleDoc);
      this.setState({sections: sections, module: moduleDoc.data(), title:module.id});
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
            : <div className="d-flex justify-content-center" style={{ "padding" : "10%"}}>
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

        // <ModuleTile val={title:"TTTT"}/>
      }
    </main>);
  }
}
