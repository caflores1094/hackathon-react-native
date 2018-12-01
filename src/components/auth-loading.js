import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Text,
  // StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await new Promise(resolve => {
            //FETCH THE EPICENTER AUTH API STUFF HERE INSTEAD OF THE TIMEOUT
            setTimeout(() => {
                console.warn('done!');
                resolve(AsyncStorage.getItem('userToken'));
            }, 0);
        });

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        console.warn('checking userToken', userToken);
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            // <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading Auth...</Text>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;
