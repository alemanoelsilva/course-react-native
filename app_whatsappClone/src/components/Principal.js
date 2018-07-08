import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Conversas' },
      { key: '2', title: 'Contatos' }
    ]
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    '1': Conversas,
    '2': Contatos
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._handleChangeTab}
        renderTabBar={this._renderHeader}
      />
      // <TabViewAnimated
      //   style={styles.container}
      //   navigationState={this.state}
      //   renderScene={this._renderScene}
      //   renderHeader={this._renderHeader}
      //   onRequestChangeTab={this._handleChangeTab}
      // />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
