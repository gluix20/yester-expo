import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import HomeView from './views/HomeView';

class Client extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: 'JWT Auth Example',
        component: HomeView,
      }}/>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('client', () => Client);

export default Client;