import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { AppBar } from './components/AppBar'
import { Soundboard } from './components/Soundboard'

class soundboard extends Component {
  render() {
    return (
      <View>
        <AppBar></AppBar>
        <Soundboard></Soundboard>
      </View>
    );
  }
}

AppRegistry.registerComponent('soundboard', () => soundboard);