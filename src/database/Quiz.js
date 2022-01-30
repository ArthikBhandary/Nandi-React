import { db } from "../firebase.js";
import {
    collection,
    getDocs,
    getDoc,
} from "firebase/firestore";
import ModuleFS from "./Module";

export default class QuizFS {
    static async getQuizList(moduleId, userId) {
        const moduleRef = await ModuleFS.getModuleRef(moduleId, userId);
        const moduleDoc = await getDoc(moduleRef);
        const path = moduleDoc.ref.path;
        const quizSnapList = await getDocs(collection(db, path, "quiz"));
        return quizSnapList;
    }
    static async getQuizListAsDict(moduleId, userId) {
        const quiz =await this.getQuizList(moduleId, userId);
        const quizList = [];
        quiz.forEach((doc) => {
            quizList.push(getQuiz(doc));
        });
        // Returns list of promises of dictionaries
        return quizList;
    }
}

export const getQuiz = async (quizDoc) => {
    // Accepts a doc (QueryDocumentSnapshot) reference of quiz from firestore
    let quizData = quizDoc.data();
    quizData.id = quizDoc.id;
    const quiz = {
        id : quizData.id,
        question : quizData.question,
        option : quizData.option,
        correct : quizData.correct,
        doc : quizDoc,
    }
    return quiz;
}