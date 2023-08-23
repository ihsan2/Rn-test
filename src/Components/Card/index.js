import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Button} from '../index';

const Card = ({item, onPressLike, onPressDislike}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={styles.bottomView}>
        <Button
          title={`${item.like} Like`}
          style={styles.button}
          disabled={true}
        />
        <View style={styles.row}>
          <Button
            title={'Like'}
            blue
            style={styles.button}
            gapRight={10}
            onPress={onPressLike}
          />
          <Button
            title={'Dislike'}
            red
            style={[styles.button]}
            onPress={onPressDislike}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
