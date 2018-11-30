import React from 'react';
import { Container, Content, List, ListItem, Text, Fab } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Form extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
        <Fab
          active={true}
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => {}}>
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
