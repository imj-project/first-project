import firebase from 'firebase/app'
import 'firebase/auth'
import firestore from 'firebase/firestore'

// setup firebase
const Config = {
    apiKey: "AIzaSyCFYiYzNmXIylfkOoeODsQMq0LK5-0k-sM",
    authDomain: "imj-first-project.firebaseapp.com",
    databaseURL: "https://imj-first-project.firebaseio.com",
    projectId: "imj-first-project",
    storageBucket: "",
    messagingSenderId: "804273504480",
    appId: "1:804273504480:web:4f34d7dbd37a9a80"
  }

firebase.initializeApp(Config)

export default {
  // 이메일+패스워드 회원가입
  signUp() {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log("회원가입 성공")

      alert("회원가입을 축하드립니다.")
    }).catch(function(error) {
      console.log("회원가입 실패")
      var errorCode = error.code;
      var errorMessage = error.message;
      
      alert(errorMessage)
    })
  },
  // google, facebook 자동 회원가입 및 로그인
  loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      'login_hint': true
    });
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  },
  loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  },
  // 이메일+패스워드 로그인
  signIn() {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("로그인 성공")

      alert("로그인을 축하드립니다.")
    }).catch(function(error) {
      console.log("로그인 실패")
      var errorCode = error.code;
      var errorMessage = error.message;
      
      alert(errorMessage)
    })
  },
  // 로그아웃
  signOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("로그아웃 되었습니다.")
      alert("로그아웃 성공")
    }).catch(function(error) {
      // An error happened.
    });
  }
}