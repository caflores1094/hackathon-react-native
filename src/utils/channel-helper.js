// // Obtain the CometD APIs.
// var lib = require('cometd');
//
// // Create the CometD object.
// var cometd = new lib.CometD();
import endpoints from './endpoints.js';
import lib from 'cometd';
const cometd = new lib.CometD();
import { AsyncStorage } from 'react-native';

class CometdHelper {
    constructor(options = {}) {
        this.options = Object.assign({
            account: endpoints.account,
            project: endpoints.project,
            // groupId: session.groupId,
            // groupName: session.groupName,
        }, options);
    }

    subscribe(channelName) {
        AsyncStorage.multiGet(['userToken', 'userName'])
            .then((result) => {
                const token = result[0][1];
                const userName = result[1][1];

                const cometdOptions = {
                    ext: {
                        authorization: `Bearer ${token}`,
                        userName,
                    },
                };

                cometd.configure({ url: 'https://api.forio.com/v2/channel/subscribe' });
                cometd.addListener('/meta/handshake', function(handshake) {
                    if (handshake.successful === true) {
                        console.log('Success: now you may listen on channels');
                    }
                });

                cometd.addListener('/meta/connect', function(message) {
                   if (message.successful === true) { console.log('Connected'); }
               });

               cometd.handshake(cometdOptions);

               //Now Subscribe to the channels you need
               //TODO REMOVE: DEFAULT NAME TO TEST
               channelName = '/group/forio-dev/carlos-hackathon/';
               this.registerChannel(channelName);

               //TESTING THE PUBLISH
               setTimeout(() => this.publish('testing testing testing'), 5000);
           });
    }

    registerChannel(channel) {
        cometd.subscribe(channel, function(message) {
            console.log('in channel: ', channel);
            console.warn('new message: ', JSON.stringify((message.data)));
        });
    }

    publish(message) {
        const channel = '/group/forio-dev/carlos-hackathon/';
        cometd.publish(channel, message);
    }

}

const channelHelper = new CometdHelper();
export default channelHelper;
