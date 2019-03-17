import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainMenu from '../../organisms/MainMenu';
import { hideMenu } from '../../../actions/menu';

const VisibleMenu = connect(
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
)(MainMenu);

export default VisibleMenu;