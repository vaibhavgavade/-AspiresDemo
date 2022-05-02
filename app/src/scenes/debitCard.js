//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import R from '../R';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Heading} from '../components/Heading';
import {Currency} from '../components/currency';
import {moderateScale, verticalScale} from '../components/size';
import {ListItem, Avatar, Switch} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {LiteCreditCardInput} from 'react-native-credit-card-input';
import {css} from './debitCss';
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
  const [showCredNum, setShowNum] = useState(false);
  const {value} = useSelector(state => state.balance);
  useEffect(() => {}, [value]);

  const onChange = obj => {
    console.log('test obj', obj);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersßistTaps="handled">
        <View style={styles.container}>
          <Image source={R.images.aspireLogo} style={css.logoImg} />
          <Heading>{R.strings.DEBIT_CARD}</Heading>
          <Text style={css.balanceText}>{R.strings.AVAILABLE_BALANCE}</Text>
          <View style={css.balanceView}>
            <Currency>{'$$'}</Currency>
            <Text style={css.balanceTextValue}>{value ? value : '00'}</Text>
          </View>

          <View style={css.modalView}>
            <View style={css.progressView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontFamily: R.fonts.AspireRegular,
                    fontSize: moderateScale(13, 0.1),
                  }}>
                  {R.strings.DEBIT_CARD_LIMIT}
                </Text>
                <Text
                  style={{fontSize: moderateScale(13, 0.1), color: R.colors.g}}>
                  {`${value} | $${'5000'}`}
                </Text>
              </View>
              <Progress
                progress={0.3}
                width={366}
                unfilledColor={'#f0fff0'}
                color={R.colors.g}
                borderWidth={0}
                height={moderateScale(15, 0.1)}
              />
            </View>
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
                    <ListItem.Title style={css.listTitle}>
                      {l.title}
                    </ListItem.Title>
                    <ListItem.Subtitle style={css.listSubtitle}>
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
          <View style={css.debitCardView}>
            <Image source={R.images.credLogo} style={css.debitImg} />
            <Text style={css.debitTitle}>{R.strings.Mark}</Text>
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
              }}
            />

            <Image source={R.images.visa} style={css.visaImg} />
          </View>

          <TouchableOpacity
            onPress={() => setShowNum(!showCredNum)}
            style={css.showTextView}>
            <Icon
              name={showCredNum ? 'visibility' : 'visibility-off'}
              size={20}
              color={R.colors.g}
            />
            <Text style={css.showCardText}>{R.strings.SHOW_CARD_NUMBER}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
