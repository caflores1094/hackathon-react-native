import AuthLoadingScreen from '../components/auth-loading';
import { connect } from 'react-redux';
import {
    checkIfLoggedIn,
} from '../actions'

const mapStateToProps = (state) => {
  return {
      session: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
    checkIfLoggedIn: () => dispatch(checkIfLoggedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
