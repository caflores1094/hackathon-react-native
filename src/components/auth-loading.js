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
        this.props.checkIfLoggedIn()
            .then((sessionInfo) => this.props.navigation.navigate(sessionInfo ? 'App' : 'Auth'));
    }

    // Render any loading content here
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading Auth...</Text>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;
