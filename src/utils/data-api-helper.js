import endpoints from './endpoints.js';
import { AsyncStorage } from 'react-native';

class DataApiHelper {
    constructor(options = {}) {
        this.options = Object.assign({
            account: endpoints.account,
            project: endpoints.project,
        }, options);
    }

    getMessages() {
        //Ideally save this in redux i think so that we dont have to call this getItem for every API call
        return AsyncStorage.getItem('userToken')
            .then((token) => {
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                };
                return fetch(`https://api.forio.com/v2/data/${endpoints.account}/${endpoints.project}/messages` , {
                    method: 'GET',
                    headers,
                }).then((res) => res.json());
            });
    }

    sendMessage(message) {
        return AsyncStorage.getItem('userToken')
            .then((token) => {
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                };
                return fetch(`https://api.forio.com/v2/data/${endpoints.account}/${endpoints.project}/messages/` , {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(message),
                }).then((res) => res.json())
                .catch(err => console.error('ERROR SENDING MESSAGE: ', err));
            });
    }
}

const dataApiHelper = new DataApiHelper();
export default dataApiHelper;
