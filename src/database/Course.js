import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

export default class CourseFS {

  static async getCourseReference(userID) {
    const docRef = await doc(db, "Users", userID);
    const User = await getDoc(docRef);
    const userData = User.data();
    const path = userData.moduleRef;
    const moduleCollectionRef = await getDoc(path);
    return moduleCollectionRef;
  }

  static async getModuleList(moduleCollectionRef) {
    const path = moduleCollectionRef.ref.path;
    const moduleSnapList = await getDocs(collection(db, path, "Modules"));
    return moduleSnapList;
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
