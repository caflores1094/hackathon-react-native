//TODO: Include logout
import {
    RECEIVE_USER_SESSION,
} from '../actions';

const initialState = {};

export function login(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USER_SESSION:
            return action.session;
        default:
            return state;
    }
}
