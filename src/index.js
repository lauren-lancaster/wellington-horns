// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD50OUt469cfIPHpViDXV_5xVgd5lbFmlI",
  authDomain: "welly-horns.firebaseapp.com",
  projectId: "welly-horns",
  storageBucket: "welly-horns.appspot.com",
  messagingSenderId: "1097037308100",
  appId: "1:1097037308100:web:f00451ecce9d2e8736e991",
  measurementId: "G-DYHH3V74ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


async function getCities(db) {
  // const citiesCol = collection(db, 'cities');
  // const citySnapshot = await getDocs(citiesCol);
  // const cityList = citySnapshot.docs.map(doc => doc.data());
  // return cityList;
}