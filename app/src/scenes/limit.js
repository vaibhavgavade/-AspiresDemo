//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {Header, Button} from 'react-native-elements';
import R from '../R';
import {Heading} from '../components/Heading';
import {moderateScale} from '../components/size';
import {RoundButton} from '../components/Button';
import {Currency} from '../components/currency';
import {Input} from '../components/Input';
import {useDispatch} from 'react-redux';
import {BalanceLimtReducer} from '../redux/reducers/balanceReducer';
import {css} from './limitCss';

const {height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    price: '5000',
  },
  {
    id: 2,
    price: '10,000',
  },
  {
    id: 3,
    price: '20,000',
  },
];

// create a component
const Limit = props => {
  const [debitCardLimit, setDebitCardLimit] = useState('');
  const dispatch = useDispatch();

  const onButtonPress = () => {
    console.log('do any validation operation', debitCardLimit);
    dispatch(BalanceLimtReducer(debitCardLimit));

    if (debitCardLimit) {
      Alert.alert(`${R.strings.ASPIRE}`, `${R.strings.Message}`, [
        {
          text: `${R.strings.OK}`,
          onPress: () => console.log('submit'),
        },
      ]);
    }
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <Header
          containerStyle={{borderBottomWidth: 0}}
          barStyle="light-content"
          backgroundColor={R.colors.A1}
          placement="left"
          leftComponent={{
            icon: 'arrow-back-ios',
            color: '#fff',
            onPress: () => props.navigation.goBack(),
          }}
          rightComponent={<Image source={R.images.aspireLogo} size={'small'} />}
        />
        <Heading>{R.strings.SPENDING_LIMIT}</Heading>
        <View style={css.mainView}>
          <View style={css.limitRowView}>
            <Image source={R.images.speed} />
            <Text style={css.weeklyLimit}>{R.strings.WEEKLY_LIMIT}</Text>
          </View>
          <View style={css.currenyView}>
            <Currency>{'$$'}</Currency>
            <Input
              onChangeText={text => setDebitCardLimit(text)}
              value={debitCardLimit}
              keyboardType={'numeric'}
            />
          </View>
          <Text style={css.lastSevenText}>{R.strings.LAST_SEVEN_DAYS}</Text>
          <ScrollView horizontal={true} keyboardShouldPersistTaps="handled">
            {data.map((l, i) => (
              <View style={css.buttomContainer}>
                <Button
                  title={`S$${l.price}`}
                  containerStyle={{
                    width: moderateScale(105, 0.1),
                  }}
                  onPress={() => setDebitCardLimit(l.price)}
                  buttonStyle={{
                    backgroundColor: R.colors.g,
                    opacity: 0.4,
                    borderRadius: 4,
                  }}
                  titleStyle={{
                    color: R.colors.w,
                    fontFamily: R.fonts.AspireDBold,
                    fontSize: moderateScale(12, 0.1),
                  }}
                />
              </View>
            ))}
          </ScrollView>

          <RoundButton
            disabled={debitCardLimit == '' ? true : false}
            onPress={() => onButtonPress()}>
            {R.strings.SAVE}
          </RoundButton>
        </View>
      </View>
    </KeyboardAvoidingView>
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
export default Limit;
