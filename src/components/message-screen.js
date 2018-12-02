import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { COLORS } from '../constants/colors.js';
import channelHelper from '../utils/channel-helper.js';

class MessageScreen extends Component {
    static navigationOptions = {
        title: 'Message',
    }
    state = { background: COLORS[0].hexCode }

    componentDidMount() {
        channelHelper.subscribe();
    }
    onChooseColor() {
        const randomIdx = Math.floor(Math.random() * (COLORS.length));
        this.setState({ background: COLORS[randomIdx].hexCode});
    }

    render() {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: this.state.background }}>
                <Text>Messages</Text>
                <Button
                    onPress={() => this.onChooseColor()}
                    color={"#fff"}
                    title="Choose Color"
                />
                <Button
                    onPress={() => channelHelper.publish(`hello there, testing with color: ${this.state.background}`)}
                    title="test channel"
                />
            </View>
        );
    }
}

export default MessageScreen;
