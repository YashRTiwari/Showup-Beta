import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDZKxoHFvZ0DoDrryhKw9qzU1xTYWnZfmI",
	authDomain: "showup-web.firebaseapp.com",
	databaseURL: "https://showup-web.firebaseio.com",
	projectId: "showup-web",
	storageBucket: "showup-web.appspot.com",
	messagingSenderId: "862339262067",
	appId: "1:862339262067:web:d19c68362e88d44ac8ac06",
	measurementId: "G-7H7MSGBS87",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export { firebase, firestore, auth };
