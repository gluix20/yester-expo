import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text, View
  } from 'react-native'

  import { form, struct, String } from 'tcomb-form-native';
  import I18n from 'react-native-i18n';
  import en from '../i18n/locales/en';
  import es from '../i18n/locales/es';

  I18n.fallbacks = true;
  I18n.translations = {en, es};
  
  const Form = form.Form
  
  const newUser = struct({
    email: String,
    password:  String
  })
  
  const options = {
    fields: {
      email: {
        autoCapitalize: 'none',
        autoCorrect: false
      },
      password: {
        autoCapitalize: 'none',
        password: true,
        autoCorrect: false,
        secureTextEntry: true
      }
    }
  }
  
  class StartTrialView extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        value: {
          email: '',
          password: ''
        }
      }
    }
  
    componentWillUnmount() {
      this.setState = {
        value: {
          email: '',
          password: null
        }
      }
    }
  
    _onChange = (value) => {
      this.setState({
        value
      })
    }
  
    _handleAdd = () => {
      const value = this.refs.form.getValue();
      // If the form is valid...
      if (value) {
        const data = {
          email: value.email,
          password: value.password,
        }
        // Serialize and post the data
        const json = JSON.stringify(data);
        fetch('http://localhost:3000/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: json
        })
        .then((response) => response.json())
        .then(() => {
          alert('Success! You may now log in.');
          // Redirect to home screen
          this.props.navigator.pop();
        })
        .catch((error) => {
          alert('There was an error creating your account.');
        })
        .done()
      } else {
        // Form validation error
        alert('Please fix the errors listed and try again.')
      }
    }
  
    render() {
      return (
        <ScrollView style={styles.container}>
          <Text style={[styles.display2, ]}>YESTER</Text>
          <Text style={[styles.title, ]}>We know you have beautiful and interesting story. 
          We want to help you, writing yours.</Text>
          <Text style={[styles.title, ]}>{I18n.t('before_lbl2')}</Text>
          <TouchableHighlight onPress={this._handleAdd} style={[styles.button, styles.filledButton]}>
            <Text style={[styles.buttonText, ]}>START FREE TRIAL</Text>
          </TouchableHighlight>
          <Text style={[styles.body1]}>$4.99/month after trial ends.</Text>
          <TouchableHighlight onPress={this._handleAdd} style={[styles.button, styles.outlinedButton]}>
            <Text style={[styles.buttonText, styles.notColor]}>Log In</Text>
          </TouchableHighlight>
          <View style={{
                borderBottomColor: '#309BF8',
                borderBottomWidth: 1,
          }}/>
          <Text style={[styles.body2]}>Cancel Anytime</Text>
          <Text style={[styles.body1]}>At Tatalapp is recurring subscription. If you decide to purchase a subcription, an initial payment will be...</Text>
        </ScrollView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 30,
      flex: 1,
      flexDirection: 'column'
    },
    display2: {
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 20,
      color: '#000'
    },
    title: {
      fontSize: 20,
      textAlign: 'left',
      marginBottom: 20,
      color: '#000'
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      //marginBottom: 20,
      color: '#fff'
    },
    body1: {
      fontSize: 16,
      textAlign: 'center',
      color: '#000'
    },
    body2: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#000'
    },
    notColor: {
      color: '#309BF8'
    },

    button: {
      padding: 20,
      marginBottom: 20,
    },
    filledButton: {
      backgroundColor: '#309BF8',
      borderRadius: 40,
      borderWidth: 3,
      borderColor: '#fff'
    },
    outlinedButton: {
      backgroundColor: '#fff',
      borderRadius: 40,
      borderWidth: 3,
      borderColor: '#309BF8'
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  
  export default StartTrialView