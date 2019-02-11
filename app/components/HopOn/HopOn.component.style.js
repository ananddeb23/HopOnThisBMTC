import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    height: '100%',
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  space: {
    marginTop: 0
  },
  innerContainer: { 
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  busBox : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  destinationContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: 10
  }
});