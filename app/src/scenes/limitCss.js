import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, VerticalScale, scale} from '../components/size';
import R from '../../src/R';
const {height} = Dimensions.get('window');
export const css = StyleSheet.create({
  mainView: {
    backgroundColor: R.colors.w,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    height: moderateScale(height / 1.4, 0.1),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 1,
  },
  currenyView: {
    height: 45,
    borderBottomWidth: 1,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: R.colors.s,
  },
  weeklyLimit: {
    fontFamily: R.fonts.AspireRegular,
    fontSize: moderateScale(14, 0.1),
    paddingLeft: 12,
  },
  lastSevenText: {
    color: R.colors.Grey,
    flexWrap: 'wrap',
    fontFamily: R.fonts.AspireRegular,
    fontSize: moderateScale(13, 0.1),
    paddingLeft: 25,
    paddingTop: 12,
  },
  limitRowView: {
    flexDirection: 'row',
    marginHorizontal: 24,
    paddingTop: 32,
  },
  buttomContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: moderateScale(8, 0.1),
  },
});
