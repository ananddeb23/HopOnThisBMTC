import React, { Component } from 'react';
import { TextInput, FlatList, ScrollView ,View ,Text, Picker, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
// import SuggestionBox from '../SuggestionBox/SuggestionBox.component';
import styles from './SuggestionBox.component.style';



class SuggestionBox extends Component {
  state = {
    text: '',
     
    data : ['a', 'b', 'c', 'd', 'e', 'f']
};
  render() {
    return (
      <View 
      style={{ height: 70, width: 350 }}>
      <ScrollView
        style={{ height: 10, width: 350, borderColor: 'gray', borderWidth: 1}}>
         var matches = $.map( acList, function(acItem) {
     
    });
    {this.props.data.map((ele) => {
       if ( ele.toUpperCase().indexOf(text) === 0 ) {
        return ele;
      }
    })}
          {this.props.data.map((ele, index) => <Text key={index}>{ele}</Text>)}
        </ScrollView>
      </View>
    );
  }
}

export default SuggestionBox;