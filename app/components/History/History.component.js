import React, { Component } from 'react';
import { ScrollView,  Image, View ,Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './History.component.style';



class History extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView horizontal={true}>
        {[...this.props.data.reverse()].map((ob, index) => {
          const source = ob.found ? require('./../../assets/green_bus_icon.png') : require('./../../assets/red_bus_icon.png');
          return <View  key={index} 
            style={{ flex:1, height: 150, width: 150, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={source} style={{width: 50, height: 50}} />
          <Text style={{color:'white'}}> {ob.bus}</Text>
          </View>})
        }
      </ScrollView>
     </View>     
    );
  }
}

History.propTypes = {
  data: PropTypes.array
}

export default History;