import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: (blue, red, noBorder, gapRight) => ({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: blue ? '#2A72C4' : red ? '#DB2C2C' : '#FFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D5D5D5',
    borderWidth: noBorder ? 0 : 1,
    marginRight: gapRight,
  }),
  titleStyle: (blue, red) => ({
    color: blue || red ? '#FFF' : '#707070',
    textAlign: 'center',
  }),
});
