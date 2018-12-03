import React from 'react';
import AppNavigator from './src/components/app-navigator';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducerList from './src/reducers'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

const middleware = [thunk];
const store = createStore(
    combineReducers(reducerList),
    compose(applyMiddleware(...middleware),
));


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
  }
}
