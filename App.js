/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import { createStore } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  render() {
    return (
    <Provider store={createStore(reducers)}>
      <View>
        <LoginForm />
      </View>
     </Provider>
   );
  }
}


export default App;
