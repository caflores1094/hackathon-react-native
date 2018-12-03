import endpoints from './endpoints.js';
import { decodeString } from './base64-helper.js';

export const ERROR_MESSAGES = {
    AUTHORIZATION_FAILURE: 'The user has no groups associated in this account',
};

export const getUserToken = (userName, password) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const body = {
        account: endpoints.account,
        userName,
        password,
    };

    return fetch('https://api.forio.com/v2/authentication/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
    })
        .then((resp) => resp.json())
        .then((data) => {
            if (data.information && data.information.code === 'AUTHORIZATION_FAILURE') {
                return Promise.reject('AUTHORIZATION_FAILURE');
            }

            var encoded = data.access_token.split('.')[1];
            while (encoded.length % 4 !== 0) { //eslint-disable-line
                encoded += '=';
            }
            const info = JSON.parse(decodeString(encoded))

            return Promise.resolve({
                token: data.access_token,
                userId: info.user_id,
                userName: (info.user_name || '').split('/')[0], //of form <user>/<team>
            });
        })
};
