import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Header from '../components/Header';
import Body from '../components/Body';

export default class Home extends React.Component {

  // constructor() {
  //   super();
  // }

  // // dieksekusi sebelum render
  // componentWillMount() { // deprecated
  //   console.log('ini will mount');
  // }

  // componentDidMount() {
  //   console.log('ini did mount');
  // }

  // onPressButton1 = () => {
  //   alert('pressed1!');
  // }

  // onPressButton2 = () => {
  //   alert('pressed2!');
  // }

  handleNav = () => {
    this.props.navigation.navigate('Counter');
  }

  handleNavNativeBase = () => {
    this.props.navigation.navigate('NativeBase');
  }

  render() {
    console.log('ini render');
    return (
      <View style={styles.container}>

        {/* pemanggilan component header */}
        {/* <Header title="HOME" /> */}

        <Button
          title="Nav to Counter Page"
          color="black"
          onPress={this.handleNav}
        />

        <Button
          title="Nav to Native Base"
          color="black"
          onPress={this.handleNavNativeBase}
        />

        {/* pemanggilan component body */}
        <Body />

      </View>
    );
  }

}

// deklarasi styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // flexDirection: 'row' for orientation
  }
});

// ref
// https://facebook.github.io/react-native
