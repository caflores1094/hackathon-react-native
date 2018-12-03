import Main from '../components/main';
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
