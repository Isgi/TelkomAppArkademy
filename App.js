import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Counter from './src/screens/Counter';
import NativeBase from './src/screens/NativeBase';
import Form from './src/screens/Form';

// deklarasi router
const App = createStackNavigator({
  Home: { // route name
    screen: Home, // screen
    navigationOptions: { // styling
      title: 'Home'
    }
  },
  Counter: { // route name
    screen: Counter, // screen
    navigationOptions: { // styling
      title: 'Counter'
    }
  },
  NativeBase: { // route name
    screen: NativeBase, // screen
    navigationOptions: { // styling
      title: 'Native Base'
    }
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: 'Form'
    }
  }
});

export default createNavigationContainer(App);