import { db } from "../firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default class Course {
    async getCourseList(){
        const courseSnap = await getDocs(collection(db, "Courses"));
        return courseSnap;
    }

    async addCourse(props){
        const docRef = await addDoc(collection(db, "Courses", props));
        return docRef;
    }
    

}
