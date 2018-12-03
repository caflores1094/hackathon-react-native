import React, { Component } from 'react';
import styles from './style.js'
import endpoints from '../../utils/endpoints.js';
import { getUserToken, ERROR_MESSAGES } from '../../utils/login-helper.js';
import {
    AsyncStorage,
    Text,
    View,
    Button,
    TextInput,
    Label,
    TouchableOpacity,
} from 'react-native';

class Login extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    state = {
        username: '',
        password: '',
        loginError: null,
    }


    handleLogin = () => {
        this.props.login(this.state.username, this.state.password)
            .then((res) => {
                if (res && res.loginError) {
                    this.setState({ loginError: res.loginError });
                } else {
                    this.props.navigation.navigate('App');
                }
            });
    }

    render() {
        console.warn('session: ', this.props.session);
        return (
            <View style={styles.container}>
                <TextInput
                    autoCapitalize="none"
                    style={styles.textInput}
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder="Username"
                />
                <TextInput
                    autoCapitalize="none"
                    style={styles.textInput}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                { this.state.loginError ? <Text style={styles.error}>{this.state.loginError}</Text> : null}
            </View>
        );
    }
}

export default Login;
