/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text, Alert, } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Frases do dia',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


const getNewPhrase = () => {
  const number = Math.floor(Math.random() * 5);

  const phrases = [
    'Hoje é um dia bom para aprender e teclar nesse teclado maldito',
    'Vamos aprender inglês de verdade mano?',
    'O que é o que é, eu esqueci haha',
    'Ainda estou apanhando bastante da crase e acento nesse teclado',
    'Olha, foram três mensagens referentes ao teclado do mac, haha'
  ];

  Alert.alert(phrases[number]);
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { main, button, textButton } = styles;
    return (
        <View style={main}>
          <Image source={ require('./image/logo.png') } />
          <TouchableOpacity onPress={getNewPhrase} style={button}>
            <Text style={textButton}> Nova Frase </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: `center`,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
