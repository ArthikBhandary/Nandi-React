import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

const getFileUrlFromPath = async(path : string) => {
    const fileRef = ref(storage, path);
    return await getDownloadURL(fileRef)
}

export { getFileUrlFromPath };