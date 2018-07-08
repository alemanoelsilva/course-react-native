import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {
  renderAdicionarContato() {
    if (!this.props.cadastro_resultado_inclusao) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
              placeholder='E-mail'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
              value={this.props.adiciona_contato_email}
            />
          </View>

          <View style={{ flex: 1 }}>
            <TouchableHighlight
              underlayColor="#114D44"
              onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
              style={style.button}>
              <Text style={{ fontSize: 20, color: '#2F4F4F', fontWeight: 'bold' }}>Adicionar</Text>
            </TouchableHighlight>

            <Text style={{ color: '#ff0000', fontSize: 20 }}>
              {this.props.cadastro_resultado_txt_erro}
            </Text>
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={{ fontSize: 20 }}>
            Cadastro realizado com sucesso!
          </Text>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        {this.renderAdicionarContato()}
      </View>
    )
  }
}

const mapStateToProps = state => (
  {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
    cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
  }
)

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);

const style = StyleSheet.create({
  input: {
    fontSize: 20,
    height: 45,
    backgroundColor: '#2F4F4F',
    borderRadius: 6,
    marginTop: 10,
    paddingLeft: 5,
    borderColor: '#2F4F4F',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    width: 200,
    borderColor: '#2F4F4F',
    borderWidth: 1,
  }
});
