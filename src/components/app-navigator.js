// import React from 'react';
// import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// import MainPage from './main-page';
// import Login from './login';
// import SecondScreen from './second-screen';
//
// const AppStack = createStackNavigator({ Main: MainPage, Second: SecondScreen });
// const AuthStack = createStackNavigator({ Login: Login });
//
// const AppNavigator = createAppContainer(createSwitchNavigator(
//     {
//         // AuthLoading: AuthLoadingScreen,
//         App: AppStack,
//         // Auth: AuthStack,
//         Login: Login,
//     },
//     {
//         initialRouteName: 'Login',
//     }
// ));
//
// export default AppNavigator;

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainPage from './main-page';
import Login from './login';
import SecondScreen from './second-screen';

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Main: MainPage,
        Second: SecondScreen,
    },
    {
        initialRouteName: "Main",
    }
);

export default AppNavigator;
