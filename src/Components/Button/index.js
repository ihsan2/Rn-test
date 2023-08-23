import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const Button = ({
  title,
  style,
  gapRight = 0,
  blue,
  red,
  noBorder,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container(blue, red, noBorder, gapRight), style ?? {}]}>
      <Text style={styles.titleStyle(blue, red)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
