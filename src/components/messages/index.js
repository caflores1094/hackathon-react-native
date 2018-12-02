import React, { Component } from 'react';
import {
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
    TextInput,
    Text,
    View,
    Button,
} from 'react-native';
import { COLORS } from '../../constants/colors.js';
import channelHelper from '../../utils/channel-helper.js';
import dataApiHelper from '../../utils/data-api-helper.js';
import { styleClasses } from '../../styles/base.js';
import styles from './style.js'

//TODO: Extract out to a container once redux is connected

class MessageScreen extends Component {
    static navigationOptions = {
        title: 'Messages',
    }
    state = {
        messages: [],
        currentMessage: '',
        userName: '',
    }

    componentDidMount() {
        context = this;
        channelHelper.subscribe('/data/forio-dev/carlos-hackathon/messages', (res) => {
            const newMessage = res.data.data;
            if (newMessage.sender !== this.state.userName) {
                this.handleNewMessage(newMessage);
            }
        });

        dataApiHelper.getMessages()
            .then(messages => this.setState({ messages }));

        AsyncStorage.getItem('userName')
            .then((userName) => this.setState({ userName }));
    }

    handleNewMessage(message) {
        const newMessages = this.state.messages;
        newMessages.push(message);
        console.warn('newMessages', newMessages);
        this.setState({ messages: newMessages, currentMessage: '' });
    }

    handleSendMessage() {
        dataApiHelper.sendMessage({ text: this.state.currentMessage, sender: this.state.userName })
            .then((message) => this.handleNewMessage(message))
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput
                    autoCapitalize="none"
                    value={this.state.currentMessage}
                    style={styleClasses.textInput}
                    onChangeText={(message) => this.setState({ currentMessage: message })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.handleSendMessage()}
                >
                    <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity>
                {this.state.messages.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()).map(({ id, text, sender }) => (
                    <View key={id} style={sender === this.state.userName ? styles.myMessageContainer : styles.messageContainer}>
                        <Text style={styles.messageText}>{sender === this.state.userName ? 'Me' : 'From'}: {sender}</Text>
                        <Text style={styles.messageText}>Message: {text}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

export default MessageScreen;
