import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text
  } from 'react-native'
  
  import { form, struct, String } from 'tcomb-form-native';
  
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
  
  class RegisterView extends Component {
  
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
          <Form
            ref='form'
            type={newUser}
            options={options}
            value={this.state.value}
            onChange={this._onChange}
          />
          <TouchableHighlight onPress={this._handleAdd}>
            <Text style={[styles.button, styles.greenButton]}>Create account</Text>
          </TouchableHighlight>
        </ScrollView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
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
    centering: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  
  export default RegisterView