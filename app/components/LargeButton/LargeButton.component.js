

import React, { Component } from 'react';
import {View ,Text, TouchableOpacity, Modal, Alert} from 'react-native';
import Autocomplete from './../Autocomplete/Autocomplete.component';
import PropTypes from 'prop-types';
import styles from './LargeButton.component.style';



class LargeButton extends Component {
  render() {
    return (
        <TouchableOpacity style={[styles.container,
           !this.props.isPrimary && styles.secondaryButton,
            this.props.isPrimary && {margin: 10},
            !this.props.isEnabled && {backgroundColor: '#afd4ed'}]}
           onPress={this.props.cb}
           disabled={!this.props.isEnabled}>
           <Text style={styles.text}> {this.props.text}</Text>
        </TouchableOpacity>  
    );
  }
}

LargeButton.propTypes = {
  cb: PropTypes.func,
  text: PropTypes.string,
  isPrimary: PropTypes.bool,
  isEnabled: PropTypes.bool
}

LargeButton.defaultProps = {
  isEnabled: true
}

export default LargeButton;