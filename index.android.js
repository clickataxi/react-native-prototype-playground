/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import Splash from './app/components/Splash'

class DrivrLogin extends Component {
  render () {
    return (
      <Splash/>
    )
  }
}

AppRegistry.registerComponent('DrivrLogin', () => DrivrLogin)
