import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class FormLogin extends Component {
  _autenticarUsuario() {
    const { email, senha } = this.props;

    this.props.autenticarUsuario({ email, senha });
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return (
        <ActivityIndicator size="large" />
      )
    }
    return (
      <TouchableHighlight
        onPress={() => this._autenticarUsuario()}
        style={style.button}>
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Acessar</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (<ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
        </View>
        <View style={{ flex: 2 }}>
          <TextInput
            value={this.props.email}
            style={style.input}
            placeholder='E-mail'
            placeholderTextColor='#fff'
            onChangeText={texto => this.props.modificaEmail(texto)} />
          <TextInput
            secureTextEntry
            value={this.props.senha}
            style={style.input}
            placeholder='Senha'
            placeholderTextColor='#fff'
            onChangeText={texto => this.props.modificaSenha(texto)} />
          <TouchableHighlight onPress={() => Actions.formCadastro()}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          {this.renderBtnAcessar()}
        </View>
      </View>
    </ImageBackground>
    );
  }
};

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loading_login: state.AutenticacaoReducer.loading_login
})

export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
  }
)(FormLogin);

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
