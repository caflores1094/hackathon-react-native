import {
    RECEIVE_USER_SESSION,
} from './actions';
import {
    AsyncStorage,
} from 'react-native';

import { getUserToken, ERROR_MESSAGES } from '../utils/login-helper.js';

const handleSessionData = (session) => ({
    type: RECEIVE_USER_SESSION,
    session,
});

export const login = (username, password) => {
    return (dispatch, getState) => {
        console.warn(username, password);
        return getUserToken(username, password)
            .then(({ token, userId, userName }) => {
                dispatch(handleSessionData({
                    userId,
                    userName,
                    token,
                }));
                return AsyncStorage.setItem('userToken', token);
            })
            .catch((err) => {
                return ({ loginError: ERROR_MESSAGES[err] });
            });
    };
}
