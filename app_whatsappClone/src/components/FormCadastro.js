import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, ImageBackground, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
  _cadastraUsuario() {
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });
  }

  renderBtnCadastro() {
    if (this.props.loading_cadastro) {
      return (
        <ActivityIndicator size="large" />
      )
    }
    return (
      <TouchableHighlight
        onPress={() => this._cadastraUsuario()}
        style={style.button}>
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Cadastrar</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              placeholderTextColor='#fff'
              style={style.input}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor='#fff'
              style={style.input}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              placeholder="Senha"
              placeholderTextColor='#fff'
              style={style.input}
              onChangeText={texto => this.props.modificaSenha(texto)}
            />

            <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            {this.renderBtnCadastro()}
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro,
  loading_cadastro: state.AutenticacaoReducer.loading_cadastro
});

export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
  }
)(FormCadastro);

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
