import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// deklarasi component body
export default class Body extends React.Component {

  // initial state
  state = {
    showContent: 'hidden'
  }

  componentDidMount() {
    setTimeout(this.task, 5000)
  }

  task = () => {
    // change variable state
    this.setState({
      showContent: 'show'
    })
  }

  renderContent = () => {
    if (this.state.showContent == 'hidden') {
      return null
    } else {
      return (
        <View>
          <AppChild />
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            onPress={this.onPressButton1}
            title="Button 1"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.onPressButton2}
            title="Button 2"
            color="red"
            accessibilityLabel="Learn more about this purple button"
          />
          {/* pemanggilan component child */}
          <AppChild />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.body}>
        {this.renderContent()}
      </View>
    )
  }
}

// deklarasi component child
class AppChild extends React.Component {
  render() {
    return (
      <View>
        <Text>Child App Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'yellow',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})