import React, { Component } from 'react';
import firebase from 'firebase';
import {
    // BrowserRouter as Router,
    Route,
    // Link,
    // Redirect,
    withRouter
} from 'react-router-dom';
import OnBeforeLoad from '../../hoc/OnBeforeLoad';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: {}
        }
    }
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                // console.log(user); console.log('bat');
                if (user) {
                    this.setState(
                        {
                            isAuthenticated: !!user,
                            user: {
                                "fullName": user.displayName,
                                "email": user.email
                            }
                        }
                    );
                }
                else {
                    // console.log(this.props.history)
                    this.props.history.push(`/login`); //user logged out
                }
            }
        );
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {

        const { component: Component, ...rest } = this.props;
        // console.log('===', this.props);
        if (this.state.isAuthenticated) {
            return (
                <Route {...rest} render={(props) => (
                    <OnBeforeLoad userEmailId={this.state.user.email} userDataObj={this.state.user} {...props}><Component {...props} /></OnBeforeLoad>
                )} />
            );
        }
        return (<div></div>)
    }
}
//withRouter HOC used to include history as this was a custom Route & was not having history originally
export default withRouter(PrivateRoute);