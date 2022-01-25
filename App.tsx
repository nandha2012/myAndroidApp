'use strict';
import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import CameraComponent from './src/scenes/Camera';
const RNFS = require('react-native-fs');
export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <CameraComponent />
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});
