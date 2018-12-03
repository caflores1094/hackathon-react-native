//TODO: Include logout
import {
    SET_MESSAGES,
    ADD_MESSAGE,
} from '../actions';

const initialState = [];

const addNewMessage = (message, state) => {
    const newMessages = JSON.parse(JSON.stringify(state));
    newMessages.push(message);
    return newMessages;
};

export function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return addNewMessage(action.message, state);
        case SET_MESSAGES:
            return action.messages;
        default:
            return state;
    }
}
