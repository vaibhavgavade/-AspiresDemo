import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, VerticalScale, scale} from '../components/size';
import R from '../R';
const {height} = Dimensions.get('window');

export const css = StyleSheet.create({
  logoImg: {
    alignSelf: 'flex-end',
    marginTop: moderateScale(20, 0.1),
    marginRight: moderateScale(25, 0.1),
  },
  balanceText: {
    fontSize: 14,
    fontFamily: R.fonts.AspireRegular,
    color: R.colors.w,
    paddingTop: moderateScale(24, 0.1),
    paddingHorizontal: 24,
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  balanceTextValue: {
    paddingLeft: 10,
    color: R.colors.w,
    fontSize: moderateScale(20, 0.1),
    fontFamily: R.fonts.AspireBold,
  },
  modalView: {
    backgroundColor: R.colors.w,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    height: moderateScale(height / 1.6, 0.1),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 1,
    top: moderateScale(height / 2.8),
  },
  debitCardView: {
    height: moderateScale(height / 3.9, 0.1),
    backgroundColor: R.colors.g,
    position: 'absolute',
    borderRadius: 10,
    // top: verticalScale(183),
    top: moderateScale(height / 3.7, 0.1),
    zIndex: 3,
    left: 20,
    right: 20,
  },
  showTextView: {
    backgroundColor: R.colors.w,
    height: moderateScale(35, 0.1),
    position: 'absolute',
    borderRadius: 3,
    // top: verticalScale(165),
    top: moderateScale(height / 4.3, 0.1),
    right: 0,
    zIndex: 2,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  listTitle: {
    color: R.colors.t,
    fontFamily: R.fonts.AspireRegular,
    fontSize: moderateScale(14, 0.1),
  },
  listSubtitle: {
    color: R.colors.b,
    fontFamily: R.fonts.AspireRegular,
    fontSize: moderateScale(13, 0.1),
  },
  progressView: {
    position: 'absolute',
    top: moderateScale(height / 6.3, 0.1),
    zIndex: 3,
    left: 10,
    right: 10,
  },
  debitImg: {
    alignSelf: 'flex-end',
    marginVertical: 24,
    marginRight: 21,
  },
  visaImg: {
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  showCardText: {
    color: R.colors.g,
    fontSize: moderateScale(12, 0.1),
    fontFamily: R.fonts.AspireDBold,
  },
  debitTitle: {
    color: R.colors.w,
    fontFamily: R.fonts.AspireBold,
    fontSize: moderateScale(22, 0.1),
    paddingLeft: moderateScale(24, 0.1),
  },
});
