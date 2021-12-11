import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc
} from "firebase/firestore";

export default class CourseFS {
  static async getCourseList() {
    const courseSnaps = await getDocs(collection(db, "Courses"));
    return courseSnaps;
  }

  static async addCourse(props) {
    const docRef = await addDoc(collection(db, "Courses", props));
    return docRef;
  }

  static async getCourse(courseId) {
    const courseSnap = await getDoc(doc(db, "Courses", courseId));
    return courseSnap;
  }
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
// let CourseFS = new CourseFireBaSe();
// export default CourseFS;
