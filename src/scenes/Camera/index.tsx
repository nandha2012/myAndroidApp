'use strict';
import React, {useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {Camera, CameraType, CameraApi} from 'react-native-camera-kit';
const RNFS = require('react-native-fs');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
const CameraComponent: React.FC<any> = (): JSX.Element => {
  const camerRef = useRef(null);
  const takePicture = async () => {
    if (camerRef) {
      const options = {quality: 0.5, base64: true};
      const {uri} = await CameraApi.capture();
      console.log(uri);
    }
  };

  return (
    <div>
      <Camera
        ref={(ref: React.Ref<any>) => {
          console.log('ref', ref);
        }}
        CameraType={CameraType.Back} // front/ba
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </div>
  );
};

export default CameraComponent;
