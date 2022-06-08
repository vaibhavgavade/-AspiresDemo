import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import R from '../R';

const RedButton = props => {
  return (
    <TouchableOpacity
      style={buttonStyle.buttonBody}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={buttonStyle.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  buttonBody: {
    margin: 5,
    backgroundColor: R.colors.A,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 30,
  },
  buttonText: {
    color: R.colors.w,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    // fontFamily: R.fonts.GothamBold
  },
});

export {RedButton};
