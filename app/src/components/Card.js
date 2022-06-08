import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../../app/src/components/size';
const Card = props => (
  <View
    style={[
      styles.main,
      {
        backgroundColor: props.color,
        // borderColor: props.border,
        marginTop: moderateScale(props.top, 0.1),
      },
    ]}>
    {props.children}
  </View>
);
export {Card};
const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    borderRadius: 6,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    elevation: 7,
    marginLeft: moderateScale(15, 0.1),
    marginRight: moderateScale(15, 0.1),
    marginBottom: moderateScale(10),
  },
});
