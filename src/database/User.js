import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import { runTransaction } from "firebase/firestore";

const getUserProgress = async (userID) => {
    const userData = await getUserData(userID);
    const course = await getDoc(userData.currentCourseProgress);
    const courseData = course.data();
    for (let key in courseData){
        console.log(key, "keeyyyy")
    }
    return {
        ref: userData.currentCourseProgress,
        data: courseData,
    };
}

const setUserModuleProgress = async (courseRef, updatedCourseProgress, moduleID) => {
    return await runTransaction(db, async (transaction) => {

        const courseDoc = await transaction.get(courseRef);
        let progress = courseDoc.data();
        const updateModuleProgress = updatedCourseProgress[moduleID]; 
        for(let key in updateModuleProgress){
            if(!(key in progress[moduleID])){
                progress[moduleID][key] = updateModuleProgress[key];
            } else if(progress[moduleID][key] < updateModuleProgress[key]){
                progress[moduleID][key] = updateModuleProgress[key];
            }
        }
        transaction.update(courseRef, progress);
        console.log(updateModuleProgress);
        console.log(progress);
        return progress;
    })
}

const getUserData = async (userId) => {
    const docRef = await doc(db, "Users", userId);
    const User = await getDoc(docRef);
    return User.data();
}

async function getQuizMarks(userID) {
    const userData = await getUserData(userID);
    const course = await getDoc(userData.currentCourseProgress);
    const courseData = course.data();
    return courseData["quiz"];
}

async function setQuizProgress (userId, moduleID, marks) {
    const userData = await getUserData(userId);
    const courseRef = userData.currentCourseProgress;
    return await runTransaction(db, async (transaction) => {
        const courseDoc = await transaction.get(courseRef);
        let progress = courseDoc.data();
        const quizData = progress["quiz"];
        if(quizData[moduleID]){
            return {
                success : false,
            }
        }
        progress["quiz"][moduleID] = marks;
        transaction.update(courseRef, progress);
        console.log(progress);
        return {
            success : true,
            marks : marks,
        };
    })
}

export { getUserProgress, getUserData, setUserModuleProgress };