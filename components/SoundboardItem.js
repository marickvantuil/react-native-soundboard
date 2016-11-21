import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableNativeFeedback, NativeModules } from 'react-native';

export class SoundboardItem extends Component {
  constructor(props) {
    super(props)
  }

  playSound(slug, loop) {
    NativeModules.MediaPlayer.playAudio(slug, loop)
  }

  render() {
    return (
        <TouchableNativeFeedback onPress={() => this.playSound(this.props.data.sound, false)} onLongPress={() => this.playSound(this.props.data.sound, true)}>
          <View style={styles.item}>
            <Text style={styles.item__font}>{this.props.data.title}</Text>
          </View>
        </TouchableNativeFeedback>
    );
  }
}

const styles = {
  item: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10
  },
  item__font: {
    fontSize: 17
  }
}
