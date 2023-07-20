import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, list, listAll } from "firebase/storage";
import { v4 } from "uuid";
const firebaseConfig = {
  apiKey: "AIzaSyCkp4r6e9-pt1sU9h_5Gd68XQtGjtLRB48",
  authDomain: "termisur-913bd.firebaseapp.com",
  projectId: "termisur-913bd",
  storageBucket: "termisur-913bd.appspot.com",
  messagingSenderId: "41186696067",
  appId: "1:41186696067:web:34bdb718f082bfc9f5b4b6",
  measurementId: "G-PGSFM1MSWN",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage }

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
}

export async function getListadoCarpeta(folder) {
  const listRef = ref(storage, folder);
  return await list(listRef);
}

export async function getListadoImagenesCarpeta(folder) {
  const listRef = ref(storage, folder);
  return await listAll(listRef);
}
