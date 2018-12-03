import Messages from '../components/messages';
import { connect } from 'react-redux';
import {
    getAllMessages,
    addMessage,
} from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => ({
    getAllMessages: () => dispatch(getAllMessages()),
    addMessage: (message) => dispatch(addMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
