import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import { COLORS } from '../constants/colors.js';
import channelHelper from '../utils/channel-helper.js';
import { styleClasses } from '../styles/base.js';

class MessageScreen extends Component {
    static navigationOptions = {
        title: 'Message',
    }
    state = {
        background: COLORS[0].hexCode,
        message: '',
    }

    componentDidMount() {
        channelHelper.subscribe();
    }
    onChooseColor() {
        const randomIdx = Math.floor(Math.random() * (COLORS.length));
        this.setState({ background: COLORS[randomIdx].hexCode});
    }

    render() {
        console.warn(styleClasses);
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: this.state.background }}>
                <Text>Messages</Text>
                <Button
                    onPress={() => this.onChooseColor()}
                    color={"#fff"}
                    title="Choose Color"
                />
                <TextInput
                    autoCapitalize="none"
                    value={this.state.message}
                    style={styleClasses.textInput}
                    onChangeText={(message) => this.setState({ message })}
                />
                <Button
                    onPress={() => channelHelper.publish(this.state.message)}
                    title="Send Message"
                />
            </View>
        );
    }
}

export default MessageScreen;
