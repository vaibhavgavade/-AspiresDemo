//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from '../../src/R';

const Currency = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 40,
    height: 22,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.g,
    borderRadius: 4,
  },
  text: {
    color: R.colors.w,
    fontFamily: R.fonts.AspireBold,
    fontSize: 12,
  },
});

export {Currency};
