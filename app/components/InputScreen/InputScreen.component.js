import React, { Component } from 'react';
import {View ,Text, TouchableOpacity, Modal, Alert} from 'react-native';
import Autocomplete from '../Autocomplete/Autocomplete.component';
import PropTypes from 'prop-types';
import styles from './InputScreen.component.style';



class InputScreen extends Component {
  render() {
    return (
        <Modal
          style={styles.container}
          animationType="fade"
          transparent={true}
          visible={this.props.toggleState}
          onRequestClose={() => Alert.alert('InputScreen has been closed.')}>
          <View style={styles.innerContainer}>
            <Autocomplete data={this.props.data} cb={this.props.dataCB} placeholder={this.props.placeholder}/>
            <TouchableOpacity style={styles.closeButtonOuter}
              onPress={this.props.closeInputScreenCB}>
              <View style={styles.closeButtonInner}> 
              <Text style={styles.closeButtonText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>  
    );
  }
}

InputScreen.propTypes = {
  toggleState: PropTypes.bool,
  data: PropTypes.array,
  dataCB: PropTypes.func,
  placeholder: PropTypes.string,
  closeInputScreenCB: PropTypes.func
}

export default InputScreen;