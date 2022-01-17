import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import CourseFS from "../database/Course.js";
export default class ModuleFS {

  static async getModuleRef(moduleId, userId){
    const courseRef = await CourseFS.getCourseReference(userId);
    // console.log(courseRef);
    const path = courseRef.ref.path;
    const moduleRef = await doc(db, path + "/Modules/", moduleId);
    return moduleRef;
  }
  static async getSectionList(moduleRef) {
    const moduleDoc = await getDoc(moduleRef)
    const path = moduleDoc.ref.path;
    const sectionSnapList = await getDocs(collection(db, path, "Sections"));
    return sectionSnapList;
  }

  // static async getCourse(courseId) {
  //   const courseSnap = await getDoc(doc(db, "Courses", courseId));
  //   return courseSnap;
  // }

  static getSampleDictFormat() {
    /* Returns empty dict with the same format/keys as a course doc on firebase
      Used to know/maintain which data are to be stored/ are there on firebase
    */
    return {
      title: "",
      description: "",
      trainer: "",
      image_url: "",
      start_date: {}, //{seconds:0, nanoseconds:0},
      end_date: {}, // seconds: 0, nanoseconds: 0 },
    }
  }
}
