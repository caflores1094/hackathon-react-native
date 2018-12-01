import React, { Component } from 'react';
import styles from './style.js'
import endpoints from '../../utils/endpoints.js';
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
    }


    handleLogin = () => {
        const headers = {
            'Content-Type': 'application/json',
        };

        const body = {
            account: endpoints.account,
            userName: this.state.username,
            password: this.state.password,
        };

        fetch('https://api.forio.com/v2/authentication/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers,
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.warn('from api call: ', data);
                // AsyncStorage.setItem('userToken', data.access_token)
                //     .then((res) => {
                //         this.props.navigation.navigate('App');
                //     });
            })
            .catch((err) => {
                console.error('error with auth: ', err);
            });
    }

    _signInAsync = async () => {
        const userToken = await new Promise(resolve => {
            //FETCH THE EPICENTER AUTH API STUFF HERE INSTEAD OF THE TIMEOUT
            setTimeout(() => {
                console.warn('sent username and password: ', this.state.username, this.state.password);
                AsyncStorage.setItem('userToken', `token-${this.state.username}-${this.state.password}`)
                    .then((res) => {
                        console.warn(res);
                        this.props.navigation.navigate('App');
                    });
            }, 1000);
        });
    };

    render() {
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
            </View>
        );
    }
}

export default Login;
// <TouchableOpacity
// style={styles.button}
// onPress={this._signInAsync}
// >
// <Text style={styles.buttonText}>Login</Text>
// </TouchableOpacity>
