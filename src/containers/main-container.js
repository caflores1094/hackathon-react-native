import Main from '../components/main';
import { connect } from 'react-redux';
import {
    logout,
} from '../actions'

const mapStateToProps = (state) => {
  return {
      session: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
