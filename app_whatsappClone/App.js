import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyChErAQ1D9djIc3YaVvaYkND1DAzs4rDsM",
      authDomain: "app-whatsappclone.firebaseapp.com",
      databaseURL: "https://app-whatsappclone.firebaseio.com",
      projectId: "app-whatsappclone",
      storageBucket: "app-whatsappclone.appspot.com",
      messagingSenderId: "608762173701"
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
