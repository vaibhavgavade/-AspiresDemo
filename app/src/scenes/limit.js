//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {Header, Avatar, Button} from 'react-native-elements';
import R from '../R';
import {Heading} from '../components/Heading';
import {moderateScale, verticalScale} from '../components/size';
import {RoundButton} from '../components/Button';
import {Currency} from '../components/currency';
import {Input} from '../components/Input';
import {useDispatch} from 'react-redux';
import {BalanceLimtReducer} from '../redux/reducers/balanceReducer';

const {width, height} = Dimensions.get('window');

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
      <View
        style={{
          backgroundColor: R.colors.w,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          height: moderateScale(height / 1.3, 0.1),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          zIndex: 1,
        }}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 24, paddingTop: 32}}>
          <Image source={R.images.speed} />
          <Text
            style={{
              fontFamily: R.fonts.AspireRegular,
              fontSize: moderateScale(14, 0.1),
              paddingLeft: 12,
            }}>
            {R.strings.WEEKLY_LIMIT}
          </Text>
        </View>
        <View
          style={{
            height: 35,
            borderBottomWidth: 1,
            marginHorizontal: 24,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: R.colors.s,
            // backgroundColor: '#f0f',
          }}>
          <Currency>{'$$'}</Currency>
          <Input
            onChangeText={text => setDebitCardLimit(text)}
            value={debitCardLimit}
            keyboardType={'numeric'}
          />
        </View>
        <Text
          style={{
            color: R.colors.Grey,
            flexWrap: 'wrap',
            fontFamily: R.fonts.AspireRegular,
            fontSize: moderateScale(13, 0.1),
            paddingLeft: 25,
            paddingTop: 12,
          }}>
          {R.strings.LAST_SEVEN_DAYS}
        </Text>
        <ScrollView horizontal={true} keyboardShouldPersistTaps="handled">
          {data.map((l, i) => (
            <View
              style={{
                flex: 1,
                paddingTop: 32,
                paddingHorizontal: moderateScale(8, 0.1),
              }}>
              <Button
                title={`S$${l.price}`}
                containerStyle={{
                  width: 114,
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
