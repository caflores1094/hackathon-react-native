import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View>
                <Text>LOGIN</Text>
                <Button
                  title="Go to main"
                  color={"#000"}
                  onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        );
    }
}

export default Login;
