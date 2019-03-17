// Import FirebaseAuth and firebase.
import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
import { FIREBASE_CONFIG } from '../../../constants';
firebase.initializeApp(FIREBASE_CONFIG);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

const metaData = {
    title: 'Login',
    link: '/login',
    isFooterLink: false
  };
  

class Login extends Component {
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => {
              if (user) {
                  // console.log(this.props.history)
                  this.props.history.push(`/home`); //user logged in
              }
          }
      );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
      this.unregisterAuthObserver();
  }
  render() {
    return (
      <div>
        <h1>Capstone: Gift-It</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}
  export default Login;
  export { metaData };