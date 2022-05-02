import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import R from '../../src/R';
import {moderateScale} from './size';
const RoundButton = props => {
  return (
    <TouchableOpacity
      style={[
        buttonStyle.buttonBody,
        {backgroundColor: props.disabled ? R.colors.s : R.colors.g},
      ]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={buttonStyle.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  buttonBody: {
    // width: '100%',
    padding: 17,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    left: 57,
    right: 57,
    zIndex: 2,
  },
  buttonText: {
    color: R.colors.w,
    fontSize: moderateScale(16, 0.1),
    fontFamily: R.fonts.AspireBold,
    alignSelf: 'center',
  },
});

export {RoundButton};
