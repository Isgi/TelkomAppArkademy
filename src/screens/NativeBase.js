import React from 'react';
import { Container, Content, List, ListItem, Text, Fab, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios'; // lib untuk get data

export default class NativeBase extends React.Component {

  // deklarasi data kosong
  state = {
    data: [],
    isLoading: false
  }

  componentDidMount() {
    // set loading true
    this.setState({
      isLoading: true
    })
    // get data online dari api
    axios({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET', // enum POST, PUT, GET, DELETE
    }).then((succResult) => {
      console.log(succResult)
      // set state data kosong ke data online api
      this.setState({
        data: succResult.data,
        isLoading: false
      })

    }).catch((errResult) => {
      alert(errResult)
    })
  }

  handleNavForm = () => {
    this.props.navigation.navigate('Form');
  }

  renderList = (item, index) => {
    return (
      <ListItem key={item.id}>
        <Text>{item.title}</Text>
      </ListItem>
    )
  }

  render() {
    return (
      <Container>
        {this.state.isLoading === true ? <Spinner /> : null}
        <Content>
          <List>
            {this.state.data.map(this.renderList)}
          </List>
        </Content>
        <Fab
          active={true}
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={this.handleNavForm}>
          <MaterialIcons name="add" />
        </Fab>
      </Container>
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
