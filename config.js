import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyANaBxBXivKeZ0lc6ghybf2i2QgUB35h58",
  authDomain: "wireless-library-ba232.firebaseapp.com",
  databaseURL: "https://wireless-library-ba232.firebaseio.com",
  projectId: "wireless-library-ba232",
  storageBucket: "wireless-library-ba232.appspot.com",
  messagingSenderId: "693192320830",
  appId: "1:693192320830:web:83cd92bc15af1cd348ae6f"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
