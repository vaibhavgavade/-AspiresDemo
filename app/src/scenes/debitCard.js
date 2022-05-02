//import liraries
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import R from '../R';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Heading} from '../components/Heading';
import {Currency} from '../components/currency';
import {moderateScale, verticalScale, scale} from '../components/size';
import {ListItem, Avatar, Switch} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {LiteCreditCardInput} from 'react-native-credit-card-input';
import Progress from 'react-native-progress/Bar';

const {height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'Top-up account',
    subtitle: 'Deposit money to your account to use with card',
    img: R.images.TopUP,
  },
  {
    id: 2,
    title: 'Weekly spending limit',
    subtitle: 'You haven’t set any spending limit on card',
    img: R.images.weekSpent,
  },
  {
    id: 3,
    title: 'Freeze card',
    subtitle: 'Your debit card is currently active',
    img: R.images.freez,
  },
  {
    id: 4,
    title: 'Get a new Card',
    subtitle: 'This deactivate your current debit card',
    img: R.images.newCard,
  },
  {
    id: 5,
    title: 'Deactivated cards',
    subtitle: 'Your previously deactivated cards',
    img: R.images.deactivate,
  },
];
const DebitCard = props => {
  const {value} = useSelector(state => state.balance);
  useEffect(() => {}, [value]);

  const onChange = obj => {
    console.log('test obj', obj);
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersßistTaps="always">
      <View style={styles.container}>
        <Image
          source={R.images.aspireLogo}
          style={{
            alignSelf: 'flex-end',
            marginTop: moderateScale(50, 0.1),
            marginRight: moderateScale(25, 0.1),
          }}
        />
        <Heading>{R.strings.DEBIT_CARD}</Heading>
        <Text
          style={{
            fontSize: 14,
            fontFamily: R.fonts.AspireRegular,
            color: R.colors.w,
            paddingTop: moderateScale(24, 0.1),
            paddingHorizontal: 24,
          }}>
          {R.strings.AVAILABLE_BALANCE}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingTop: 10,
            paddingHorizontal: 24,
          }}>
          <Currency>{'$$'}</Currency>
          <Text
            style={{
              paddingLeft: 10,
              color: R.colors.w,
              fontSize: moderateScale(20, 0.1),
              fontFamily: R.fonts.AspireBold,
            }}>
            {value ? value : '00'}
          </Text>
        </View>
        <Progress progress={0.3} width={200} />

        <View
          style={{
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
          }}>
          <View style={{paddingTop: verticalScale(130)}}>
            {data.map((l, i) => (
              <ListItem
                key={i}
                onPress={
                  i == 1
                    ? () => props.navigation.navigate('Limit')
                    : () => console.log('welcome to aspire')
                }>
                <Avatar source={l.img} />
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      color: R.colors.t,
                      fontFamily: R.fonts.AspireRegular,
                      fontSize: moderateScale(14, 0.1),
                    }}>
                    {l.title}
                  </ListItem.Title>
                  <ListItem.Subtitle
                    style={{
                      color: R.colors.b,
                      fontFamily: R.fonts.AspireRegular,
                      fontSize: moderateScale(13, 0.1),
                    }}>
                    {i == 1 && value
                      ? ` Your weekly spending limit is ${value}`
                      : l.subtitle}
                  </ListItem.Subtitle>
                </ListItem.Content>
                {i == 1 || i == 2 ? (
                  <Switch value={false} color={R.colors.s} />
                ) : null}
              </ListItem>
            ))}
          </View>
        </View>
        <View
          style={{
            height: moderateScale(220, 0.1),
            backgroundColor: R.colors.g,
            position: 'absolute',
            borderRadius: 10,
            top: verticalScale(183),
            zIndex: 3,
            left: 20,
            right: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'flex-end',
              paddingRight: 20,
            }}>
            <Image
              source={R.images.aspireLogo}
              style={{height: 30, width: 30}}
            />
            <Text style={{color: R.colors.w}}>{R.strings.ASPIRE}</Text>
          </View>
          <Text
            style={{
              color: R.colors.w,
              fontFamily: R.fonts.AspireBold,
              fontSize: moderateScale(22, 0.1),
              paddingLeft: moderateScale(24, 0.1),
            }}>
            {R.strings.Mark}
          </Text>
          <LiteCreditCardInput
            onChange={onChange}
            autoFocus
            invalidColor={R.colors.w}
            addtionalInputProps={{
              name: {
                defaultValue: 'my name',
                maxLength: 40,
                placeholderTextColor: 'lightblue',
                secureTextEntry: true,
              },
              postalCode: {
                returnKeyType: 'go',
              },
            }}
            inputStyle={{
              paddingHorizontal: moderateScale(15, 0.1),
              color: R.colors.w,
              fontFamily: R.fonts.AspireDBold,
              // paddingVertical: 50,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: R.colors.w,
            height: moderateScale(38, 0.1),
            position: 'absolute',
            borderRadius: 3,
            top: verticalScale(157),
            right: 0,
            zIndex: 2,
            right: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <Icon name="visibility" size={20} color={R.colors.g} />
          <Text
            style={{
              color: R.colors.g,
              fontSize: moderateScale(12, 0.1),
              fontFamily: R.fonts.AspireDBold,
            }}>
            {R.strings.SHOW_CARD_NUMBER}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.A1,
  },
});

//make this component available to the app
export default DebitCard;
