import React, { Component } from 'react';
import { TextInput, ScrollView ,View ,Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Autocomplete.component.style';
const MIN_SEARCH_CHAR = 1;


class Autocomplete extends Component {
  state = {
    scrollIsCollapsed : true,
    text: '',
    dropDownData: [],
    data :  []
};

handleChange = (text) => {
  const matches =  text.length >= MIN_SEARCH_CHAR
  ? this.props.data.filter((ele) => {
    return ele.substr(0, text.length).toUpperCase() === text.toUpperCase();
  })
  : [];
  this.setState({text, dropDownData: matches, scrollIsCollapsed: false}) 
}

handleClick = (ele) => {
  console.log('ele', ele);
    this.setState({text: ele, scrollIsCollapsed: true});
    this.props.cb(ele);
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.txtInp}
        onChangeText={(text) => this.handleChange(text)}
        value={this.state.text}
        placeholder={this.props.placeholder}
        placeholderTextColor="#ffffff"
      />
     {this.state.text.length > 0 && !this.state.scrollIsCollapsed && <View 
        style={styles.scrollContainer}>
      <ScrollView keyboardShouldPersistTaps={'always'}
        style={styles.scrollBody}>
          {this.state.dropDownData.map((ele, index) => {
          return <Text key={index} 
          style={{paddingLeft: 8, color: 'white'}}
          onPress={()=> this.handleClick(ele)}>{ele}</Text>
          })}
        </ScrollView>
      </View>
    }
      </View>
    );
  }
}

Autocomplete.propTypes = {
  data: PropTypes.array,
  cb: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Autocomplete;