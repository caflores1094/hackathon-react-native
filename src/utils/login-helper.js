import endpoints from './endpoints.js';

const headers = {
    'Content-Type': 'application/json',
};

export const getUserToken = (body) => {
    console.warn('body: ', { ...body, account: endpoints.account });
    return fetch('https://api.forio.com/v2/authentication/', {
        method: 'POST',
        body: { ...body, account: endpoints.account },
        headers,
    })
        .then((resp) => resp.json())
        .then((data) => {
            // console.warn(data);
            return data;
            //THIS WORKS BELOW FOR GOOD LOGINS
            // AsyncStorage.setItem('userToken', data.access_token)
            //     .then((res) => {
            //         this.props.navigation.navigate('App');
            //     });
        })
        .catch((err, h) => {
            console.error('error with auth: ', err, h);
        });
};
