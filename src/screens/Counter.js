import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from '../components/Header';
import BodyCounting from '../components/BodyCounting';

export default class Counter extends React.Component {

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

  render() {
    console.log('ini render');
    return (
      <View style={styles.container}>

        {/* pemanggilan component header */}
        {/* <Header title="NUMBER COUNTER" /> */}

        {/* pemanggilan component body */}
        <BodyCounting />

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
