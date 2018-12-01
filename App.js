import React from 'react';
import AppNavigator from './src/components/app-navigator';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
