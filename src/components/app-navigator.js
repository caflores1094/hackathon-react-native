import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoading from './auth-loading';
import {
    MainContainer,
    LoginContainer,
    MessagesContainer,
} from '../containers';

const AppStack = createStackNavigator({
    Main: MainContainer,
    Message: MessagesContainer,
});
const AuthStack = createStackNavigator({
    Login: LoginContainer,
});

const AppNavigator = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

export default AppNavigator;
