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
        console.log("Transaction started");
        console.log(courseRef);
        const courseDoc = await transaction.get(courseRef);
        let progress = courseDoc.data();
        console.log(progress);
        console.log("Here\n");
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

export { getUserProgress, getUserData, setUserModuleProgress };