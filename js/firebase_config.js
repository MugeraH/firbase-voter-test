
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAy-gnBdyMC9TPMyHXF6xuX5CT1Xv79ggQ",
    authDomain: "votersystem-test.firebaseapp.com",
    projectId: "votersystem-test",
    storageBucket: "votersystem-test.appspot.com",
    messagingSenderId: "699765836267",
    appId: "1:699765836267:web:5128f71f39b998e14071ae",
    measurementId: "G-CCFMND4ER7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

