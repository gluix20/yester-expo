import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
  } from 'react-native'
  
  import StartTrialView from './StartTrialView';
  import LoginView from './LoginView';
  import RegisterView from './RegisterView';
  import ProtectedView from './ProtectedView';
  
  class HomeView extends Component {

    constructor(props){
        super(props)
    }

    _handleStartTrialView = () => {
        this.props.navigator.push({
          title: 'Start Trial',
          component: StartTrialView,
          backButtonTitle: 'Back'
        })
      }

    _handleRegisterView = () => {
      this.props.navigator.push({
        title: 'Register',
        component: RegisterView,
        backButtonTitle: 'Back'
      })
    }
    _handleLoginView = () => {
      this.props.navigator.push({
        title: 'Login',
        component: LoginView,
        backButtonTitle: 'Back'
      })
    }
    _handleProtectedView = () => {
      this.props.navigator.push({
        title: 'Protected Content',
        component: ProtectedView,
        backButtonTitle: 'Back'
      })
    }
    _handleLogOut = () => {
      AsyncStorage.removeItem('jwt');
      alert('You have been logged out.');
    }

    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this._handleStartTrialView}>
            <Text style={[styles.button, styles.blueButton]}>
              Start Trial
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._handleRegisterView}>
            <Text style={[styles.button, styles.blueButton]}>
              Register
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._handleLoginView}>
            <Text style={[styles.button, styles.greenButton]}>
              Log In
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._handleLogOut}>
            <Text style={[styles.button, styles.greyButton]}>
              Log Out
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._handleProtectedView}>
            <Text style={[styles.button, styles.redButton]}>
              Protected Content
            </Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      padding: 80,
      flex: 1,
      flexDirection: 'column'
    },
    button: {
      borderRadius: 4,
      padding: 20,
      textAlign: 'center',
      marginBottom: 20,
      color: '#fff'
    },
    greenButton: {
      backgroundColor: '#4CD964'
    },
    blueButton: {
      backgroundColor: '#34AADC'
    },
    redButton: {
      backgroundColor: '#FF3B30',
      color: '#fff'
    },
    greyButton: {
      backgroundColor: '#777',
      color: '#fff'
    }
  })
  
  export default HomeView