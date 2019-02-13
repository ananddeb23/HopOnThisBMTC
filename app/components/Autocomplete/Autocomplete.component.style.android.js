import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    width: 400,
    margin: 50,
    color: 'white'
  },
  txtInp : {
    height: 50,
    width: 350,
    borderColor: '#F4F6F7',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    zIndex: 1,
    color: '#fff'},
  scrollContainer: {
    height: 190,
    width: 340,
    borderRadius: 10,
    zIndex: 1200
  },
  scrollBody: {
    height: 210,
    width: 340,
    backgroundColor: '#2C3E50',
    color: '#ffffff',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  }
});