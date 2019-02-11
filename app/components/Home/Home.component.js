import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './Home.component.style';
import HopOn from '../HopOn/HopOn.component';
import {connect} from 'react-redux';


class Home extends Component {
  render() {
    console.log(this.props.state);
    return (
      <View style={styles.container}>
        <HopOn />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);