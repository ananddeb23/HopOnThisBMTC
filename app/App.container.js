import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from './components/Home/Home.component';

class App1 extends Component {
  render () {
    return (
      <Home />
    );
  }
}

export default connect(null, null)(App1);