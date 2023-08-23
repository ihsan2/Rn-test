import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {height: 240, borderTopLeftRadius: 10, borderTopRightRadius: 10},
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    width: 75,
    height: 35,
  },
  row: {
    flexDirection: 'row'
  }
});
