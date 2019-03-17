import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../../actions/user';

class OnBeforeLoad extends Component {
    componentDidMount() {
        // console.log(this.props);
        // console.log('I am firing');
        let { actions, userEmailId, userDataObj } = this.props;
        actions.getUser(userEmailId, userDataObj);
    }
    render() {
        // const { user } = this.props;
        // if (user.id) {
            return (
                <div>
                    {this.props.children}
                </div>

            );
        // }
        // return <React.Fragment />;
    }

}
const mapStateToProps = (state) => ({
    // ... computed data from state and optionally ownProps
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ getUser }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(OnBeforeLoad);