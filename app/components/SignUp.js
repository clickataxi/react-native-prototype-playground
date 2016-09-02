import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class SignUp extends Component {
  _onSignUp () {
    console.log('_onSignUp Pressed!')
  }

  _onLogin () {
    console.log('_onLogin Pressed!')
  }

  _onSkip () {
    console.log('_onLogin Pressed!')
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'http://fleets.drivr.com/wp-content/uploads/sites/5/2015/02/drivr_logo_white.png'}} />
        <Text style={styles.text}>
          Sign up...
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2D62B4'
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 200
  },
  button: {
    height: 50,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'stretch',
    overflow: 'hidden',
    borderRadius: 4,
    color: '#ffffff',
    justifyContent: 'center'
  },
  buttonRegister: {
    backgroundColor: '#E75D5B'
  },
  buttonSignIn: {
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    flex: 2,
    alignSelf: 'center',
    color: 'white'
  }
})
