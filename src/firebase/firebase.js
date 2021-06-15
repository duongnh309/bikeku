import firebase from 'firebase/app'
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAIdBQiT_yloEWIq4e7QjrerkE19rAsYLE",
    authDomain: "store-image-b8b45.firebaseapp.com",
    projectId: "store-image-b8b45",
    storageBucket: "store-image-b8b45.appspot.com",
    messagingSenderId: "72198775167",
    appId: "1:72198775167:web:101ba237725aad49b3fa4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }