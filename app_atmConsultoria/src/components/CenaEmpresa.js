import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

const NAME_NAVIGATION_BAR = 'ATM Consultoria';

export default class CenaEmpresa extends Component {
  static navigationOptions = {
    title: NAME_NAVIGATION_BAR
  };
  
  render() {
    return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar backgroundColor='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>
            A ATM Consultoria está no mercado a mais de 20 anos...
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
