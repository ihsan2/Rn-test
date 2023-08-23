import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './style';

const Container = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
