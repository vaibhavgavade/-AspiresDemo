import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Indicator = () => {
  return (
    <View style={indicatorStyle.container}>
      <ActivityIndicator size={'large'} color="#000080" />
    </View>
  );
};

const indicatorStyle = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {Indicator};
