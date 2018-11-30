import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// deklarasi component header
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        {/* pemanggilan component left */}
        <NavButton text="Back" />
        <Text style={styles.textHeader}>{this.props.title}</Text>
        {/* pemanggilan component right */}
        <NavButton text="Next" />
      </View>
    )
  }
}

// deklarasi component left
class NavButton extends React.Component {
  render() {
    return (
      <View style={styles.containerButton}>
        <Text style={styles.textButton}>{this.props.text}</Text>
      </View>
    )
  }
}

// deklarasi component right
// class Right extends React.Component {
//   render() {
//     return (
//       <View style={styles.containerButton}>
//         <Text style={styles.textButton}>Right</Text>
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textHeader: {
    color: '#fff',
    fontSize: 20
  },
  textButton: {
    color : '#fff'
  },
  containerButton: {
    margin: 10
  }
})