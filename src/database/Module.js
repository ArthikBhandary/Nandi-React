import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import {
  getFileUrlFromPath
} from "../functions/firebaseUtilities";
import CourseFS from "../database/Course.js";
import React from "react";
import { getUserProgress } from "./User";

export default class ModuleFS {

  static async getModuleRef(moduleId, userId){
    const courseRef = await CourseFS.getCourseReference(userId);
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
  // static async getSectionListAndDoc(moduleRef) {
  //   const sectionSnapList =await this.getSectionList(moduleRef);
  //   const sections = [];
  //   sectionSnapList.forEach((doc) => {
  //     sections.push({data:getSection(doc), ref:doc});
  //   });
  //   // Returns list of promises of dictionaries
  //   return sections;
  // }
  static async getSectionInfo(moduleRef, userId) {
    let sectionList = await this.getSectionListAsDict(moduleRef);
    const sectionProgress = await getUserProgress(userId, moduleRef);
    return {
      sectionList : sectionList,
      progress : sectionProgress,
    }
  }
  static async getSectionListAsDict(moduleRef) {
    const sectionSnapList =await this.getSectionList(moduleRef);
    const sections = [];
    sectionSnapList.forEach((doc) => {
      sections.push(getSection(doc));
    });
    // Returns list of promises of dictionaries
    return sections;
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

export const getSection = async (sectionRef) => {
  // Accepts a doc (QueryDocumentSnapshot) reference of section from firestore
   let sectionData = sectionRef.data();
   sectionData.id = sectionRef.id;
   const section = {
     id : sectionData.id,
     title : sectionData.title,
     file_type : sectionData.file_type,
     file_url : await getFileUrlFromPath( sectionData.file_path ),
     ref : sectionRef,
   }
   return section;

}