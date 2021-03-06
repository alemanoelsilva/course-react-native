import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

const NAME_NAVIGATION_BAR = 'ATM Consultoria';

export default class CenaPrincipal extends Component {
  static navigationOptions = {
    title: NAME_NAVIGATION_BAR,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
			<View>
        <StatusBar backgroundColor='#CCC' />

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#B9C941'}
              activeOpacity={0.3}
              onPress={() => { navigate('cliente', { title: NAME_NAVIGATION_BAR }) }}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#61BD8C'}
              activeOpacity={0.3}
              onPress={() => { navigate('contato', { title: NAME_NAVIGATION_BAR }) }}
            >
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#EC7148'}
              activeOpacity={0.3}
              onPress={() => { navigate('empresa', { title: NAME_NAVIGATION_BAR }) }}
            >
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#19D1C8'}
              activeOpacity={0.3}
              onPress={() => { navigate('servico', { title: NAME_NAVIGATION_BAR }) }}
            >
              <Image style={styles.imgMenu} source={menuServico} />
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
