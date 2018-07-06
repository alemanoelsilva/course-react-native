import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

const URL = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListaItens extends Component {

	constructor(props) {
		super(props);

		this.state = { listaItens: [] };
	}

	async componentWillMount() {
		try {
			const { data: listaItens } = await axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html');

			this.setState({ listaItens });
		} catch (error) {
			alert(error)
		}
	}

  render() {
    return (
			<ScrollView style={{ backgroundColor: '#DDD' }}>
				{ this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
			</ScrollView>
    );
  }
}
