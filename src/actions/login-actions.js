import {
    RECEIVE_USER_SESSION,
    LOGOUT,
} from './actions';
import {
    AsyncStorage,
} from 'react-native';

import { getInfoFromToken, getUserToken, ERROR_MESSAGES } from '../utils/login-helper.js';

const handleSessionData = (session) => ({
    type: RECEIVE_USER_SESSION,
    session,
});

export const logout = () => {
    return (dispatch, getState) => {
        return AsyncStorage.removeItem('userToken').then(() => {
            dispatch({
                type: LOGOUT,
            });
            return Promise.resolve({ message: 'Logout successful, userToken removed'});
        });
    };
}


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

export const checkIfLoggedIn = () => {
    return (dispatch, getState) => {
        return AsyncStorage.getItem('userToken')
            .then((token) => {
                if(token && !getState().login.userName) {
                    const sessionInfo = getInfoFromToken(token);
                    dispatch(handleSessionData(sessionInfo));
                }
                return Promise.resolve(token);
            })
    }
}
