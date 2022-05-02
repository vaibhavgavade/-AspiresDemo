import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import R from '../R';
import {moderateScale} from './size';
const Input = ({placeholder, onChangeText, keyboardType, value}) => (
  <View style={inputStyle.c}>
    <View style={inputStyle.c2}>
      <TextInput
        style={inputStyle.textinput}
        onChangeText={onChangeText}
        autoCapitalize="none"
        keyboardType={keyboardType}
        autoFocus
        value={value}
      />
    </View>
  </View>
);

const inputStyle = StyleSheet.create({
  textinput: {
    color: R.colors.b,
    fontSize: moderateScale(18, 0.1),
    fontFamily: R.fonts.AspireRegular,
    paddingVertical: 10,
  },
  c: {
    flex: 1,
    marginHorizontal: 24,
  },
  c2: {
    flex: 5,
  },
});

export {Input};
