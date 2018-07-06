import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Header from './src/components/Header';
import Icon from './src/components/Icon';

const CHOICES = [ 'pedra', 'papel', 'tesoura' ];
const PEDRA = 0;
const PAPEL = 1;
const TESOURA = 2;

const RESULTS = {
  WON: 'Você ganhou', DRAW: 'Empatou', LOST: 'Você perdeu'
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      computer: '',
      user: '',
      result: '',
    };
  }

  validResult({ computer, user }) {
    switch (computer) {
      case PEDRA:
        if (user === PEDRA) return RESULTS.DRAW
        if (user === PAPEL) return RESULTS.WON
        if (user === TESOURA) return RESULTS.LOST
      case PAPEL:
        if (user === PEDRA) return RESULTS.LOST
        if (user === PAPEL) return RESULTS.DRAW
        if (user === TESOURA) return RESULTS.WON
      case TESOURA:
        if (user === PEDRA) return RESULTS.WOWN
        if (user === PAPEL) return RESULTS.LOST
        if (user === TESOURA) return RESULTS.DRAW
    }
  }

  setChoice(user) {
    const computer = Math.floor(Math.random() * 2);

    const result = this.validResult({
      computer,
      user,
    });

    this.setState({ computer, user, result });
  }

  render() {
    const { computer, user, result } = this.state;

    return (
      <View>
        <Header />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title={CHOICES[PEDRA]} onPress={() => { this.setChoice(PEDRA); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title={CHOICES[PAPEL]} onPress={() => { this.setChoice(PAPEL); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title={CHOICES[TESOURA]} onPress={() => { this.setChoice(TESOURA); }} />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.result}</Text>
          <Icon escolha={this.state.computer} jogador='Computador' />
          <Icon escolha={this.state.user} jogador='Você' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
 