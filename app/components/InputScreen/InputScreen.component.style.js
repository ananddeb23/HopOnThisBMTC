import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    height: 200,
    width: 410,
    margin: 20
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  closeButtonOuter: {
    width: 300,
    height: 300,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',marginBottom: 40
  },
  closeButtonInner: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50
  },
  closeButtonText: {
    marginLeft: 17,
    marginTop: 9,
    fontSize: 25
  }
});