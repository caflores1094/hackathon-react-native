import {
    SET_MESSAGES,
    ADD_MESSAGE,
} from './actions';
import dataApiHelper from '../utils/data-api-helper.js';

const setMessages = (messages) => ({
    type: SET_MESSAGES,
    messages,
});

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message,
});

export const getAllMessages = () => {
    return (dispatch, getState) => {
        dataApiHelper.getMessages()
            .then(messages => dispatch(setMessages(messages)));
    };
}
