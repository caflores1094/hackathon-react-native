import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { COLORS } from '../constants/colors.js';

class SecondScreen extends Component {
    static navigationOptions = {
        title: 'Second',
    }
    state = { background: COLORS[0].hexCode }
    onChooseColor() {
        const randomIdx = Math.floor(Math.random() * (COLORS.length));
        this.setState({ background: COLORS[randomIdx].hexCode});
    }

    render() {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: this.state.background }}>
                <Text>SECOND SCREEN</Text>
                <Button
                    onPress={() => this.onChooseColor()}
                    color={"#fff"}
                    title="Choose Color"
                />
            </View>
        );
    }
}

export default SecondScreen;
