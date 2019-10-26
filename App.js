/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ListChatRoom, QiscusInit, QiscusLoginRegister} from 'react-native-qiscus-ui';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  register = () => QiscusLoginRegister('testRn', 'testRn', 'testRn');

  render() {
    return (
      <>
        <Button title={'Login'} onPress={() => this.register()}/>

        <Button title={'Home'} onPress={() => {
          this.props.navigation.navigate('ChatScreen');
        }} style={{marginTop: 20}}/>
      </>
    );

  }
}

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <>
        <ListChatRoom/>
      </>
    );

  }
}

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ChatScreen: {
    screen: ChatScreen,
  },
}));

class App extends React.Component {
  componentDidMount() {
    QiscusInit();
  }

  render() {
    return <AppNavigator/>;
  }
}


export default App;
