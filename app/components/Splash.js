import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import Button from 'react-native-button'

export default class Splash extends Component {
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
          Get a ride
        </Text>
          <View style={{flex: 2, alignSelf: 'stretch', alignItems: 'stretch', flexDirection: 'column'}}>
              <Button
                containerStyle={[styles.button, styles.buttonRegister]}
                styleDisabled={{color: 'red'}}
                style={{fontSize: 20, color: 'white', alignItems: 'center'}}
                onPress={() => this._onLogin()}>
                Register
              </Button>
              <Button
                containerStyle={[styles.button, styles.buttonSignIn]}
                styleDisabled={{color: 'red'}}
                style={{fontSize: 20, color: 'white', textAlign: 'center' }}
                onPress={() => this._onSignUp()}>
                Sign In
              </Button>
              <Button
                containerStyle={[styles.button]}
                styleDisabled={{color: 'red'}}
                style={{fontSize: 12, color: '#ffffff44'}}
                onPress={() => this._onSkip()}>
                Skip to see how it works first
              </Button>
          </View>
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
