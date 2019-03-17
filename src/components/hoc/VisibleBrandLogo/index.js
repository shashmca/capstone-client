import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideMenu } from '../../../actions/menu';
import BrandLogo from '../../atoms/BrandLogo';

const VisibleBrandLogo = connect(
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
)(BrandLogo);

export default VisibleBrandLogo;