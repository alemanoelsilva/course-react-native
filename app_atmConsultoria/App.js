import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components'

import {
  createStackNavigator,
} from 'react-navigation';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';


const RootsStack = createStackNavigator({
  principal: { screen: CenaPrincipal },
  cliente: { screen: CenaClientes },
  contato: { screen: CenaContatos },
  empresa: { screen: CenaEmpresa },
  servico: { screen: CenaServicos },
}, {
  initialRouteName: 'principal',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

export default class App extends Component {
  render() {
    return <RootsStack />
  }
}
