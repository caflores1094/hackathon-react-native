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
                    style={styles.textInput}
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._signInAsync}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;
