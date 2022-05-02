//define routes here for react-navigation
import React from 'react';
import {DebitCard, Limit} from './mainRoute';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="DebitCard">
        <stack.Screen
          name="DebitCard"
          component={DebitCard}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Limit"
          component={Limit}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
