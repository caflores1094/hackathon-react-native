import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { COLORS } from '../constants/colors.js';

class MainPage extends Component {
    static navigationOptions = {
        title: 'main',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
            />
        ),
    };
    state = { background: COLORS[0].hexCode }
    onChooseColor() {
        const randomIdx = Math.floor(Math.random() * (COLORS.length));
        this.setState({ background: COLORS[randomIdx].hexCode});
    }

    render() {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: this.state.background }}>
                <Button
                    onPress={() => this.onChooseColor()}
                    color={"#fff"}
                    title="Choose Color"
                />
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
