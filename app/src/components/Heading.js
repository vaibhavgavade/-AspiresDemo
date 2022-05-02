import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import R from '../R';
import {moderateScale} from './size';
const Heading = props => (
  <View style={headingStyle.bodyStyle}>
    <Text style={headingStyle.textStyle}>{props.children}</Text>
  </View>
);

const headingStyle = StyleSheet.create({
  bodyStyle: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: moderateScale(5, 0.1),
  },
  textStyle: {
    color: R.colors.w,
    fontSize: 24,
    fontFamily: R.fonts.AspireBold,
  },
});

export {Heading};
