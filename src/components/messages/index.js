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

class MessageScreen extends Component {
    static navigationOptions = {
        title: 'Messages',
    }
    state = {
        currentMessage: '',
        userName: '',
    }

    componentWillMount() {
        this.props.getAllMessages();
    }

    componentDidMount() {
        context = this;
        channelHelper.subscribe('/data/forio-dev/carlos-hackathon/messages', (res) => {
            const newMessage = res.data.data;
            if (newMessage.sender !== this.state.userName) {
                this.handleNewMessage(newMessage);
            }
        });

        AsyncStorage.getItem('userName')
            .then((userName) => this.setState({ userName }));
    }

    handleNewMessage(message) {
        this.props.addMessage(message);
        this.setState({ currentMessage: '' });
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
                    style={{ ...styleClasses.textInput, backgroundColor: '#fff', margin: 10, height: 50, padding: 5 }}
                    onChangeText={(message) => this.setState({ currentMessage: message })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.handleSendMessage()}
                >
                    <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity>
                {this.props.messages.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()).map(({ id, text, sender }) => (
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
