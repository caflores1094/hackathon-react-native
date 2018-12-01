import React, { Component } from 'react';
import { AsyncStorage, Text, View, Button, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors.js';
import styles from './style.js'

class MainPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Main',
        headerRight: (
            <Button
                onPress={navigation.getParam('logout')}
                title="Logout"
                color="#000"
            />
        ),
    });
    state = { background: COLORS[0].hexCode, userName: '' }

    componentDidMount() {
        this.props.navigation.setParams({ logout: this._logout });
        this._bootstrapAsync();
    }

    // TODO: THIS WILL BE OBSOLETE ONCE REDUX STORE PROPER INFO, FOR NOW TO SEE IF WORKS
    _bootstrapAsync = async () => {
        const sessionInfo = await new Promise(resolve => {
            //FETCH THE EPICENTER AUTH API STUFF HERE INSTEAD OF THE TIMEOUT
            setTimeout(() => {
                resolve(AsyncStorage.multiGet(['userToken', 'userId', 'userName']));
                // resolve(AsyncStorage.getItem('userToken'));
            }, 0);
        });

        this.setState({ userName: sessionInfo[2][1] });
    };

    _logout = async () => {
        await AsyncStorage.removeItem('userToken').then((result) => console.warn(result, 'done with token'));
        this.props.navigation.navigate('Auth');
    }

    onChooseColor() {
        const randomIdx = Math.floor(Math.random() * (COLORS.length));
        this.setState({ background: COLORS[randomIdx].hexCode});
    }

    render() {
        return (
            <View style={{ ...styles.container, backgroundColor: this.state.background }}>
                <Text style={styles.header}>Welcome, {this.state.userName}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onChooseColor()}
                >
                    <Text fontSize={40}>Choose Color</Text>
                </TouchableOpacity>
                <Button
                  title="Go to Second"
                  color={"#fff"}
                  onPress={() => this.props.navigation.navigate('Second')}
                />
            </View>
        );
    }
}

    export default MainPage;
