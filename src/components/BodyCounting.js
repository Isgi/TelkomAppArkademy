import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class BodyCounting extends React.Component {

  // deklarasi state counter
  state = {
    counter: 0,
    backgroundColor: '#fff'
  }

  componentDidMount() {
    setInterval(this.handleChangeBacgroundColor, 2000)
  }

  handleChangeBacgroundColor = () => {
    this.setState({
      backgroundColor: this.getRandomColor()
    })
  }

  handlePressButtonPLUS = () => {
    // alert('Button PLUS');
    const currentCounter = this.state.counter;
    this.setState({
      counter: currentCounter + 1
    })
  }

  handlePressButtonMINUS = () => {
    // alert('Button MINUS');
    const currentCounter = this.state.counter;
    this.setState({
      counter: currentCounter - 1
    })
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.backgroundColor }
        ]}
      >
        <Text style={styles.number}>
          {/* pemanggilan state counter */}
          {this.state.counter}
        </Text>
        <Button
          title="PLUS"
          color="yellow"
          onPress={this.handlePressButtonPLUS}
        />
        <Button
          title="MINUS"
          color="green"
          onPress={this.handlePressButtonMINUS}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontSize: 200,
    margin: 20,
    color: 'yellow'
  }
})