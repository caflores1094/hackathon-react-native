import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import MainPage from './main';
import Login from './login';
import MessageScreen from './message-screen';
import AuthLoading from './auth-loading';

const AppStack = createStackNavigator({ Main: MainPage, Message: MessageScreen });
const AuthStack = createStackNavigator({ Login: Login });

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
