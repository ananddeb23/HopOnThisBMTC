import React, { Component } from 'react';
import {View ,Text, Image} from 'react-native';
import InputScreen from '../InputScreen/InputScreen.component';
import History from './../History/History.component';
import styles from './HopOn.component.style';
import buses from '../../assets/busData.json';
import bus_stops from '../../assets/stops.json';
import data from '../../assets/data.json';
import LargeButton from '../LargeButton/LargeButton.component';




class HopOn extends Component {
  state = {
    buses: [],
    stops :  [],
    data: [],
    destination: '',
    bus: null,
    found: false,
    history: [],
    showDestinationToggle: false,
    showBusToggle: false,
  };

  componentDidMount = () => {
    this.setState({buses: buses.data, stops: bus_stops.data, data: data.data});
  }

  performSearch = (bus) => {
    if(this.state.destination !== ''){
    const busDetails = this.state.data.filter((busData) => {
        return busData.name === bus;
    });
    const busStops = busDetails[0].stops;
    for(let i = 0; i < busStops.length; i += 1){
      if(busStops[i] === this.state.destination){        
        return this.setState({bus: bus, found: true, history: [...this.state.history, {bus: bus, found: true}]})
      }
    }
    this.setState({bus: bus, found: false, history: [...this.state.history, {bus: bus, found: false}]})
    }
  }

  lockDestination = (destination) => {
    this.setState({destination: destination});
    this.toggleDestination();
  }

  toggleDestination = () => {
    this.setState({showDestinationToggle: !this.state.showDestinationToggle})
  }

  toggleBus = () => {
    this.setState({showBusToggle: !this.state.showBusToggle})
  }

  render() {
    const source = this.state.found ? require('./../../assets/green_bus_icon.png') : require('./../../assets/red_bus_icon.png');
    return (
          <View style={styles.container}>
          <View style={styles.innerContainer}>

         
            {this.state.bus!==null && <View style={styles.busBox}>
              <Image source={source} style={{width: 100, height: 100}} />
                <Text style={{color: 'white'}}>{this.state.bus}</Text>
            </View>}

            <History data={this.state.history} />

            {this.state.destination !== '' && <View style={styles.destinationContainer}>
              <Text style={{
                color: 'white', fontSize: 20}}> Destination: {this.state.destination}</Text>
              </View>}
          </View>
          <View style={styles.btnContainer}>
            <LargeButton cb={this.toggleDestination} text={'Select Destination'} isPrimary={true}  />
            <LargeButton cb={this.toggleBus} text={'Select Bus'} isPrimary={false} isEnabled={this.state.destination !== ''} />
          </View>
          
          <InputScreen 
            toggleState={this.state.showDestinationToggle}
            data={this.state.stops}
            dataCB={this.lockDestination}
            placeholder={'Where would you like to go...'}
            closeInputScreenCB={this.toggleDestination}
          />  

          <InputScreen 
            toggleState={this.state.showBusToggle}
            data={this.state.buses}
            dataCB={this.performSearch}
            placeholder={'Bus...'}
            closeInputScreenCB={this.toggleBus}
          /> 
          
        </View>
    );
  }
}

export default HopOn;