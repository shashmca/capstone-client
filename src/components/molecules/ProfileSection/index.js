import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// import { FIREBASE_CONFIG } from '../../../constants';
import EditButton from '../../atoms/EditButton';
import LogoutButton from '../../atoms/LogoutButton';
import './ProfileSection.scss';

// Configure Firebase.
// firebase.initializeApp(FIREBASE_CONFIG);

const metaData = {
    title: 'Profile',
    link: '/profile',
    isFooterLink: true
};


// const ProfileSection = ({ title, children }) => (
class ProfileSection extends Component {
    constructor(props) {
        super(props);
        this.onLoggedout = this.onLoggedout.bind(this);
    }

    // // Listen to the Firebase Auth state and set the local state.
    // componentDidMount() {
    //   this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    //       (user) => {console.log(user);
    //                 if(!user)
    //                 console.log(this.props.history); this.props.history.push(`/login`); //user logged out
    //         //     } else {
    //         //       this.currentUserEmail = JSON.parse(sessionStorage.getItem('userAuthInfo')).user.email;
    //             }
    //   );
    // }

    // // Make sure we un-register Firebase observers when the component unmounts.
    // componentWillUnmount() {
    //   this.unregisterAuthObserver();
    // }

    // componentDidMount() {

    //     // Get saved userAuthInfo from sessionStorage
    //     if(sessionStorage.getItem('userAuthInfo') === undefined || sessionStorage.getItem('userAuthInfo') === null) {
    //       console.log('is in Logged OUT state!!');
    //       this.router.navigate(['login']);
    //     } else {
    //       this.currentUserEmail = JSON.parse(sessionStorage.getItem('userAuthInfo')).user.email;
    //     }
    // }

    onLoggedout(e) {
        firebase.auth().signOut();
        // Remove saved sessionKey from sessionStorage
        // sessionStorage.removeItem('userAuthInfo');
        // Remove all saved data from sessionStorage
        sessionStorage.clear();
        console.log('signOut called!');
        this.props.history.push(`/login`);
    }
    render() {
        const { title, children } = this.props;
        return (
            <div className="wwn-profile-section">
                <div className="wwn-profile-section-heading clearfix">
                    <h2 className="brewing-head float-left">{title}</h2>
                    <EditButton className="wwn-edit float-left float-md-right" />
                </div>
                <div className="wwn-profile-section-content">
                    {children}
                </div>
                {/* onClick={e => this.onLoggedout()} */}
                <Link to="/" className="signout-btn" onClick={e => this.onLoggedout()}>
                    <i className="fa fa-fw fa-power-off"></i> Sign Out
            </Link>
                <LogoutButton />
            </div>
        );
    }
}

export default ProfileSection;
export { metaData };