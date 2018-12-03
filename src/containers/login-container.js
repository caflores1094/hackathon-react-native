import Login from '../components/login';
import { connect } from 'react-redux';
import {
    login,
} from '../actions'

const mapStateToProps = (state) => {
  return {
      session: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
