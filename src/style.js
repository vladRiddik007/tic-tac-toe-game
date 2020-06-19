import {StyleSheet} from 'react-native';
import {width, height} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  h1: {
    fontSize: 30,
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  tile: {
    borderWidth: 1,
    width: width / 4,
    height: height / 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  tileX: {
    color: 'red',
    fontSize: 60,
  },
  tileO: {
    color: 'green',
    fontSize: 50,
  },
  button: {
    paddingTop: 40,
  },
  tileLeftTop: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tileTop: {
    borderTopWidth: 0,
  },
  tileRightTop: {
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  tileLeft: {
    borderLeftWidth: 0,
  },
  tileRight: {
    borderRightWidth: 0,
  },
  tileLeftBottom: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  tileBottom: {
    borderBottomWidth: 0,
  },
  tileRightBottom: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
});
export const {
  container,
  tile,
  row,
  tileX,
  tileO,
  button,
  h1,
  tileLeftTop,
  tileTop,
  tileRightTop,
  tileLeft,
  tileRight,
  tileLeftBottom,
  tileBottom,
  tileRightBottom,
} = styles;
