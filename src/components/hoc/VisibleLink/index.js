import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideMenu } from '../../../actions/menu';
import Link from '../../atoms/Link';

const VisibleLink = connect(
    function ({ isMenuCollapsed, isMenuHidden }) {
        return {
            isMenuCollapsed,
            isMenuHidden
        };
    },
    function (dispatch) {
        return bindActionCreators({
            hideMenu
        }, dispatch);
    }
)(Link);

export default VisibleLink;