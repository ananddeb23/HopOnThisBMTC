/**
 * Hop on this Bus (An app for BMTC buses)
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './components/Home/Home.component';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import styles from './index.styles';

const store = initStore();
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Home />
     </View>
    </Provider>
     
    );
  }
}
