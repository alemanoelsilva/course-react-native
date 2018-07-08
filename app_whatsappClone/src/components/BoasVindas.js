import React from 'react';
import { View, Text, TouchableHighlight, ImageBackground, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
  <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
    <View style={{ flex: 1, padding: 15 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: '#ffffff' }}>Seja Bem-Vindo</Text>
        <Image source={require('../imgs/logo.png')} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableHighlight
          onPress={() => Actions.formLogin()}
          style={style.button}>
          <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Fazer Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  </ImageBackground>
);

const style = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 45,
    backgroundColor: '#2F4F4F',
    borderRadius: 6,
    marginTop: 10,
    paddingLeft: 5,
    borderColor: '#fff',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    width: 200,
    borderColor: '#fff',
    borderWidth: 1,
  }
});
