import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNUhIGbPRwtMXJpbidaS4kqBn9tLWyqRM",
  authDomain: "dobby-leaderboard.firebaseapp.com",
  projectId: "dobby-leaderboard",
  storageBucket: "dobby-leaderboard.firebasestorage.app",
  messagingSenderId: "184671600483",
  appId: "1:184671600483:web:d19df358ed60a8b183dd56",
  measurementId: "G-WMM797FMF8"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Submit score
export async function submitScore(name, score) {
  try {
    await addDoc(collection(db, "scores"), {
      name,
      score,
      created: Date.now()
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Load leaderboard
export async function loadLeaderboard(limitCount = 10) {
  const q = query(collection(db, "scores"), orderBy("score", "desc"), limit(limitCount));
  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });
  return results;
}