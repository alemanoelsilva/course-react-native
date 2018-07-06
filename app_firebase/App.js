import React, {Component} from 'react';
import firebase from 'firebase';
import {StyleSheet, Button, View} from 'react-native';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB9Vlq0H45Ct991zTyl33_QM6xELg0Z5Pg",
      authDomain: "app-reactnative.firebaseapp.com",
      databaseURL: "https://app-reactnative.firebaseio.com",
      projectId: "app-reactnative",
      storageBucket: "app-reactnative.appspot.com",
      messagingSenderId: "555053336278"
    });
  
  }

  cadastrarUsuario(){
    var email = "jamilton.cursos2@gmail.com";
    var senha = "jamilton12345";

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        var mensagemErro = "";
        if( erro.code == "auth/weak-password" ){
          mensagemErro = "A senha precisa ter no mínimo 6 caracteres!";
        }
        //erro.code, erro.message
        alert( mensagemErro );
      }
    );

  }

  verificarUsuarioLogado(){

    const usuario = firebase.auth();

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if( usuarioAtual ){
          alert("Usuário está logado");
        }else{
          alert("Usuário não está logado");
        }
      }
    );

    /*const usuarioAtual = usuario.currentUser;

    if( usuarioAtual ){
      alert("Usuário está logado");
    }else{
      alert("Usuário não está logado");
    }*/

  }

  deslogarUsuario(){
    const usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario(){
    var email = "jamilton.cursos2@gmail.com";
    var senha = "jamilton12345";

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        alert( erro.message );
      }
    );

  }

  render() {
    return (
      <View>
        <Button
          onPress={ ()=>{ this.cadastrarUsuario(); } }
          title="Cadastrar Usuário"
          color="#841584"
          accessibilityLabel="Cadastrar Usuário"/>
          
          <Button
          onPress={ ()=>{ this.verificarUsuarioLogado(); } }
          title="Verificar usuário logado"
          color="#841584"
          accessibilityLabel="Verificar usuário logado"/>

          <Button
          onPress={ ()=>{ this.deslogarUsuario(); } }
          title="Deslogar usuário"
          color="#841584"
          accessibilityLabel="Deslogar usuário"/>

          <Button
          onPress={ ()=>{ this.logarUsuario(); } }
          title="Logar usuário"
          color="#841584"
          accessibilityLabel="Logar usuário"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
