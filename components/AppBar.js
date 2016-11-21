import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export class AppBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let appName = 'Soundboard'
    return (
      <View style={styles.appbar} elevation={5}>
        <Text style={styles.appbar__title}>{appName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#0f9687',
        padding: 20
    },
    appbar__title: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 17
    }
})